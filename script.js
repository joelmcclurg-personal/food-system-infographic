// Food System Infographic - Scrollytelling Implementation
// Using Scrollama for scroll-driven narrative

(function() {
    'use strict';

    // ===================================
    // Configuration
    // ===================================
    const config = {
        width: 1200,
        height: 1150,
        centerX: 600,
        centerY: 450,
        rings: [0, 100, 180, 260, 340, 420],
        nodeScale: 5.0,
        transitionDuration: 300,
        morphDuration: 800
    };

    // ===================================
    // State
    // ===================================
    let currentSystem = 'current';
    let revealedNodes = new Set();
    let revealedConnections = new Set();
    let scrollamaInstance = null;
    let scrollamaAlt = null;
    let currentActiveIndex = 0;

    // ===================================
    // DOM Elements
    // ===================================
    const svg = d3.select('#visualization');
    const toggle = document.getElementById('layer-toggle');
    const systemToggle = document.getElementById('system-toggle');
    const detailPanel = document.getElementById('detail-panel');
    const detailTitle = document.getElementById('detail-title');
    const detailContent = document.getElementById('detail-content');
    const closeDetail = document.getElementById('close-detail');
    const currentLabel = document.getElementById('current-label');
    const altLabel = document.getElementById('alt-label');
    const legend = document.getElementById('legend');

    // ===================================
    // Initialization
    // ===================================
    function init() {
        // Fade hero on scroll
        const hero = document.querySelector('.hero');
        if (hero) {
            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                const heroHeight = hero.offsetHeight;
                const progress = Math.min(scrollY / (heroHeight * 0.6), 1);
                hero.style.opacity = 1 - progress;
                hero.style.transform = `translateY(${-scrollY * 0.3}px)`;
            }, { passive: true });
        }

        setupSVG();
        renderAllNodes(systemData.current);
        renderAllConnections(systemData.current);
        generateAlternativeSections();
        setupEventListeners();
        initScrollama();

        // Show first node and section immediately
        setTimeout(() => {
            const firstSection = document.querySelector('.scroll-section');
            if (firstSection) {
                firstSection.classList.add('is-active');
            }
            revealNodes('farm-bill');
        }, 100);
    }

    // ===================================
    // SVG Setup
    // ===================================
    function setupSVG() {
        // Clear any existing content
        svg.selectAll('*').remove();

        // Background group
        svg.append('g').attr('class', 'bg-layer');

        // Orbital rings
        const ringsLayer = svg.append('g').attr('class', 'rings-layer');
        config.rings.slice(1).forEach((radius, i) => {
            ringsLayer.append('circle')
                .attr('class', 'orbital-ring')
                .attr('cx', config.centerX)
                .attr('cy', config.centerY)
                .attr('r', radius)
                .attr('opacity', 0.4 - i * 0.06);
        });

        // Connections layer
        svg.append('g').attr('class', 'connections-layer');

        // Nodes layer
        svg.append('g').attr('class', 'nodes-layer');
    }

    // ===================================
    // Position Calculations
    // ===================================
    function getNodePosition(node) {
        const radius = node.radius || config.rings[node.ring];
        const angleRad = (node.angle - 90) * Math.PI / 180;
        return {
            x: config.centerX + radius * Math.cos(angleRad),
            y: config.centerY + radius * Math.sin(angleRad)
        };
    }

    function getNodeColorClass(node) {
        return `node-${node.category}`;
    }

    // ===================================
    // Render All Nodes (Initially Hidden)
    // ===================================
    function renderAllNodes(data) {
        const layer = svg.select('.nodes-layer');
        layer.selectAll('.node-group').remove();

        const nodeGroups = layer.selectAll('.node-group')
            .data(data.nodes, d => d.id)
            .enter()
            .append('g')
            .attr('class', d => `node-group ${d.ring === 0 ? 'center-node' : ''}`)
            .attr('data-id', d => d.id)
            .attr('tabindex', '0')
            .attr('role', 'button')
            .attr('aria-label', d => `${d.label}: ${d.stat}`)
            .attr('transform', d => {
                const pos = getNodePosition(d);
                return `translate(${pos.x}, ${pos.y})`;
            });

        // Circle
        nodeGroups.append('circle')
            .attr('class', d => `node-circle ${getNodeColorClass(d)}`)
            .attr('r', d => d.size * config.nodeScale);

        // Label
        nodeGroups.append('text')
            .attr('class', 'node-label')
            .attr('dy', '-0.6em')
            .text(d => d.label);

        // Sublabel
        nodeGroups.append('text')
            .attr('class', 'node-sublabel')
            .attr('dy', '0.7em')
            .text(d => d.sublabel);

        // Stat (supports multiline with \n)
        nodeGroups.append('text')
            .attr('class', 'node-stat')
            .each(function(d) {
                renderStatText(d3.select(this), d.stat);
            });

        // Event listeners - hover on circles for precise hit area
        nodeGroups.select('.node-circle')
            .on('mouseenter', function(event) {
                const nodeGroup = d3.select(this.parentNode);
                handleNodeHover(event, nodeGroup);
            })
            .on('mouseleave', handleNodeLeave);

        // Keep click/keyboard on group for accessibility (larger touch target)
        nodeGroups
            .on('click', handleNodeClick)
            .on('keydown', function(event, d) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleNodeClick(event, d);
                }
            });
    }

    // ===================================
    // Render All Connections (Initially Hidden)
    // ===================================
    function renderAllConnections(data) {
        const layer = svg.select('.connections-layer');
        layer.selectAll('.connection').remove();

        layer.selectAll('.connection')
            .data(data.connections)
            .enter()
            .append('path')
            .attr('class', 'connection')
            .attr('data-from', d => d.from)
            .attr('data-to', d => d.to)
            .attr('d', d => {
                const fromNode = data.nodes.find(n => n.id === d.from);
                const toNode = data.nodes.find(n => n.id === d.to);
                const from = getNodePosition(fromNode);
                const to = getNodePosition(toNode);

                // Curved path
                const midX = (from.x + to.x) / 2;
                const midY = (from.y + to.y) / 2;
                const dx = to.x - from.x;
                const dy = to.y - from.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                const offset = dist * 0.15;
                const perpX = -dy / dist * offset;
                const perpY = dx / dist * offset;

                return `M ${from.x} ${from.y} Q ${midX + perpX} ${midY + perpY} ${to.x} ${to.y}`;
            })
            .style('display', 'none');
    }

    // ===================================
    // Progressive Reveal Functions
    // ===================================
    function revealNodes(nodeIds) {
        if (!nodeIds) return;

        const ids = nodeIds.split(',').map(id => id.trim());
        ids.forEach(id => {
            revealedNodes.add(id);
            svg.select(`.node-group[data-id="${id}"]`)
                .classed('visible', true);
        });
    }

    function hideNodes(nodeIds) {
        if (!nodeIds) return;

        const ids = nodeIds.split(',').map(id => id.trim());
        ids.forEach(id => {
            revealedNodes.delete(id);
            svg.select(`.node-group[data-id="${id}"]`)
                .classed('visible', false);
        });
    }

    function revealConnections(connectionIds) {
        if (!connectionIds) return;

        const ids = connectionIds.split(',').map(id => id.trim());
        ids.forEach(id => {
            const [from, to] = id.split('>');
            revealedConnections.add(id);

            const matched = svg.selectAll('.connection')
                .filter(function() {
                    const connFrom = d3.select(this).attr('data-from');
                    const connTo = d3.select(this).attr('data-to');
                    return (connFrom === from && connTo === to) ||
                           (connFrom === to && connTo === from);
                });
            matched.style('display', null)
                .classed('visible', true)
                .classed('drawing', true);

            // Remove drawing class after animation (scoped to matched elements)
            setTimeout(() => {
                matched.classed('drawing', false);
            }, 500);
        });
    }

    function showToggle(show) {
        if (show) {
            systemToggle.classList.add('visible');
            systemToggle.setAttribute('aria-hidden', 'false');
            legend.classList.add('visible');
        }
    }

    // ===================================
    // Generate Alternative Sections
    // ===================================
    function generateAlternativeSections() {
        const altContainer = document.getElementById('scroll-alt');
        if (!altContainer) return;

        const sections = [
            { num: '01', nodes: 'farm-bill', title: 'Rewriting the Rules', description: 'The Farm Bill gets rewritten. This time, the money flows to farmers who rebuild soil, not corporations who deplete it. Policy stops subsidizing extraction and starts investing in regeneration.' },
            { num: '02', nodes: 'beneficiaries', conn: 'farm-bill>beneficiaries', title: 'Money Stays Local', description: 'Instead of 78% flowing to mega-operations, support goes to small and mid-sized farmers who actually live in their communities. When farmers thrive, main streets come back to life. Money circulates locally instead of being extracted to distant shareholders.' },
            { num: '03', nodes: 'production', conn: 'beneficiaries>production', title: 'Farming That Gives Back', description: 'Forget the 180-million-acre corn monoculture. Diverse crops. Rotational grazing. Practices that build topsoil instead of stripping it. Animals eat what they\'re designed to eat. Farms become ecosystems, not factories.' },
            { num: '04', nodes: 'health,environment,economic', title: 'The Payoff', description: 'Real food replaces processed corn derivatives. Diet-related disease drops. Aquifers recharge. Pollinators return. Rural hospitals stay open because communities can afford to live there. The externalities flip from costs to benefits.' },
            { num: '05', nodes: 'fragility', conn: 'health>fragility,environment>fragility,economic>fragility', title: 'Built to Bend', description: 'Regional food networks replace continental supply chains. When one farm struggles, neighbors adapt—not collapse. Three days of inventory becomes three months of local reserves. The system bends instead of breaks.' },
            { num: '06', nodes: 'collapse', conn: 'fragility>collapse', title: 'Systems That Last', description: 'MIT\'s collapse trajectory gets rewritten. Soil regenerates faster than it erodes. Aquifers refill. Carbon returns to the ground. This isn\'t wishful thinking—it\'s the math of systems that give back more than they take.' },
            { num: '07', showToggle: true, title: 'The Current System', description: 'This future is possible. But first, see the system we inherited\u2014and why it was designed to fail.', description2: 'Toggle above to see why the current system we\'ve built is on the verge of collapse.' }
        ];

        sections.forEach(cfg => {
            const section = document.createElement('section');
            section.className = 'scroll-section';
            if (cfg.nodes) section.dataset.nodes = cfg.nodes;
            if (cfg.conn) section.dataset.connections = cfg.conn;
            if (cfg.showToggle) section.dataset.showToggle = 'true';

            const plural = cfg.nodes && cfg.nodes.includes(',') ? 'nodes' : 'node';
            const ctaLine = cfg.nodes ? `<p class="section-detail"><span class="section-cta">Click the ${plural} to learn more.</span></p>` : '';
            const desc2 = cfg.description2 ? `<p>${cfg.description2}</p>` : '';
            section.innerHTML = `
                <div class="section-content">
                    <span class="section-number">${cfg.num}</span>
                    <h2>${cfg.title}</h2>
                    <p>${cfg.description}</p>
                    ${desc2}
                    ${ctaLine}
                </div>
            `;
            altContainer.appendChild(section);
        });
    }

    // ===================================
    // Scrollama Setup with Fallback
    // ===================================
    function initScrollama() {
        // Try Scrollama first, fall back to IntersectionObserver
        if (typeof scrollama === 'function') {
            try {
                // Current system Scrollama (right side, active by default)
                scrollamaInstance = scrollama();
                scrollamaInstance
                    .setup({
                        step: '#scroll-current .scroll-section',
                        offset: 0.5,
                        debug: false
                    })
                    .onStepEnter(handleStepEnter)
                    .onStepExit(handleStepExit);

                // Alternative system Scrollama (left side, disabled initially)
                scrollamaAlt = scrollama();
                scrollamaAlt
                    .setup({
                        step: '#scroll-alt .scroll-section',
                        offset: 0.5,
                        debug: false
                    })
                    .onStepEnter(handleStepEnter)
                    .onStepExit(handleStepExit);

                // Disable alternative Scrollama initially
                scrollamaAlt.disable();

                // Handle resize for both instances
                window.addEventListener('resize', debounce(() => {
                    scrollamaInstance.resize();
                    scrollamaAlt.resize();
                }, 200));

            } catch (e) {
                initIntersectionObserver();
            }
        } else {
            initIntersectionObserver();
        }
    }

    // Fallback using native IntersectionObserver
    function initIntersectionObserver() {
        // Observe only current sections initially (alt sections start hidden)
        const currentSections = document.querySelectorAll('#scroll-current .scroll-section');
        const altSections = document.querySelectorAll('#scroll-alt .scroll-section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Only process if the section's container is active
                const container = entry.target.closest('.scroll-sections');
                const wrapper = document.querySelector('.scroll-sections-wrapper');
                const activeSystem = wrapper.dataset.activeSystem;

                const isCurrentContainer = container.id === 'scroll-current';
                const isAltContainer = container.id === 'scroll-alt';

                // Skip if this container is not active
                if ((activeSystem === 'current' && isAltContainer) ||
                    (activeSystem === 'alt' && isCurrentContainer)) {
                    return;
                }

                if (entry.isIntersecting) {
                    handleStepEnter({ element: entry.target, direction: 'down' });
                } else {
                    const direction = entry.boundingClientRect.top > 0 ? 'up' : 'down';
                    handleStepExit({ element: entry.target, direction });
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-10% 0px -10% 0px'
        });

        currentSections.forEach(section => observer.observe(section));
        altSections.forEach(section => observer.observe(section));
    }

    function handleStepEnter(response) {
        const section = response.element;
        const sectionId = section.dataset.section;

        // Track current active index for sync between systems
        const container = section.closest('.scroll-sections');
        const sections = container.querySelectorAll('.scroll-section');
        currentActiveIndex = Array.from(sections).indexOf(section);

        // Remove was-active, add is-active
        section.classList.remove('was-active');
        section.classList.add('is-active');

        // Reveal nodes for this section
        const nodes = section.dataset.nodes;
        if (nodes) {
            revealNodes(nodes);
        }

        // Reveal connections for this section
        const connections = section.dataset.connections;
        if (connections) {
            revealConnections(connections);
        }

        // Show toggle if specified
        if (section.dataset.showToggle === 'true') {
            showToggle(true);
        }
    }

    function handleStepExit(response) {
        const section = response.element;

        // Mark as was-active (faded) when scrolling down past it
        // Or remove completely when scrolling up past it
        section.classList.remove('is-active');

        if (response.direction === 'down') {
            section.classList.add('was-active');
        } else {
            section.classList.remove('was-active');
            // Hide nodes when scrolling up past a section
            const nodes = section.dataset.nodes;
            if (nodes) {
                hideNodes(nodes);
            }
        }
    }

    // ===================================
    // Node Interaction Handlers
    // ===================================
    function handleNodeHover(event, hoveredNodeGroup) {
        const hoveredElement = hoveredNodeGroup.node();

        // Get nodes relevant to current scroll context
        const activeSection = document.querySelector('.scroll-section.is-active');
        const relevantNodeIds = activeSection ? getNodesForSection(activeSection) : revealedNodes;

        svg.selectAll('.node-group.visible').each(function() {
            const thisGroup = d3.select(this);
            const circle = thisGroup.select('.node-circle');
            const nodeId = thisGroup.attr('data-id');

            // Direct element comparison - guaranteed accurate
            if (this === hoveredElement) {
                circle.classed('highlighted', true);
                thisGroup.classed('dimmed', false);
            } else {
                // Dim all other visible nodes
                circle.classed('highlighted', false);
                thisGroup.classed('dimmed', true);
            }
        });
    }

    // Helper: Get node IDs for a scroll section
    function getNodesForSection(section) {
        const ids = new Set();
        const nodesAttr = section.dataset.nodes;
        if (nodesAttr) {
            nodesAttr.split(',').map(id => id.trim()).forEach(id => ids.add(id));
        }
        return ids;
    }

    function handleNodeLeave() {
        svg.selectAll('.node-group.visible')
            .classed('dimmed', false);
        svg.selectAll('.node-circle')
            .classed('highlighted', false);
    }

    function handleNodeClick(event, d) {
        event.stopPropagation();

        if (d.detail) {
            detailTitle.textContent = d.detail.title;
            detailContent.innerHTML = d.detail.content;
            detailPanel.classList.add('active');
            detailPanel.setAttribute('aria-hidden', 'false');

            // Focus trap for accessibility
            closeDetail.focus();
        }
    }

    // ===================================
    // Detail Panel
    // ===================================
    function closeDetailPanel() {
        detailPanel.classList.remove('active');
        detailPanel.setAttribute('aria-hidden', 'true');
    }

    // ===================================
    // System Toggle
    // ===================================
    function toggleSystem(toAlternative) {
        const targetSystem = toAlternative ? 'alternative' : 'current';
        if (currentSystem === targetSystem) return;

        const wrapper = document.querySelector('.scroll-sections-wrapper');
        const duration = 500;

        // Set transition for CSS animations
        wrapper.dataset.transition = toAlternative ? 'to-alt' : 'to-current';

        // Disable outgoing Scrollama (with null checks for fallback mode)
        if (toAlternative) {
            if (scrollamaInstance) scrollamaInstance.disable();
        } else {
            if (scrollamaAlt) scrollamaAlt.disable();
        }

        // Clear previous section states
        document.querySelectorAll('.scroll-section').forEach(section => {
            section.classList.remove('is-active', 'was-active');
        });

        // Scroll to top for fresh narrative experience
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // After partial transition, update visualization data and system state
        setTimeout(() => {
            currentSystem = targetSystem;
            wrapper.dataset.activeSystem = toAlternative ? 'alt' : 'current';

            const data = toAlternative ? systemData.alternative : systemData.current;

            // Add morphing class for visualization
            svg.classed('morphing', true);
            svg.classed('alt', toAlternative);

            // Toggle .alt class on visualization wrapper for legend colors
            const vizWrapper = document.querySelector('.visualization-wrapper');
            vizWrapper.classList.toggle('alt', toAlternative);

            // Update toggle labels
            currentLabel.classList.toggle('active', !toAlternative);
            altLabel.classList.toggle('active', toAlternative);

            // Update main title
            const mainTitle = document.getElementById('main-title');
            if (mainTitle) {
                mainTitle.textContent = toAlternative
                    ? 'A Food System Designed to Sustain the Present and Future'
                    : 'The $20 Billion Food System Built to Collapse';
            }

            // Update tagline
            const heroTagline = document.getElementById('hero-tagline');
            if (heroTagline) {
                heroTagline.textContent = toAlternative
                    ? 'What if public policy shifted to support a system that was insulated against collapse?'
                    : 'Every 5 years, Congress writes a bill that shapes what 330 million Americans eat.';
            }

            // Update subtext
            const heroSubtext = document.getElementById('hero-subtext');
            if (heroSubtext) {
                heroSubtext.textContent = toAlternative
                    ? 'Scroll to see the way forward'
                    : 'Scroll to follow the money.';
            }

            // Reset revealed state for fresh scroll experience
            revealedNodes.clear();
            revealedConnections.clear();

            // Hide all nodes and connections
            svg.selectAll('.node-group').classed('visible', false);
            svg.selectAll('.connection').classed('visible', false);

            svg.select('.rings-layer').style('display', toAlternative ? 'none' : null);

            // Update nodes with new data
            updateNodesForSystem(data);

            // Update connections
            renderAllConnections(data);

            // Reveal first node
            revealNodes('farm-bill');
        }, 150);

        // After full transition, enable new Scrollama and activate first section
        setTimeout(() => {
            wrapper.removeAttribute('data-transition');

            if (toAlternative) {
                if (scrollamaAlt) {
                    scrollamaAlt.enable();
                    scrollamaAlt.resize();  // Recalculate step positions
                }
            } else {
                if (scrollamaInstance) {
                    scrollamaInstance.enable();
                    scrollamaInstance.resize();  // Recalculate step positions
                }
            }

            // Activate first section of new system
            const targetContainer = toAlternative ? '#scroll-alt' : '#scroll-current';
            const firstSection = document.querySelector(`${targetContainer} .scroll-section`);
            if (firstSection) {
                firstSection.classList.add('is-active');
            }

            // Remove morphing class
            svg.classed('morphing', false);

            // Trigger scroll event to force Scrollama to detect visible sections
            window.dispatchEvent(new Event('scroll'));
        }, duration + 100);
    }

    function updateNodesForSystem(data) {
        const layer = svg.select('.nodes-layer');

        data.nodes.forEach(nodeData => {
            const nodeGroup = layer.select(`.node-group[data-id="${nodeData.id}"]`);
            if (!nodeGroup.empty()) {
                // Update circle color class
                nodeGroup.select('.node-circle')
                    .attr('class', `node-circle ${getNodeColorClass(nodeData)}`);

                // Update text content
                nodeGroup.select('.node-label').text(nodeData.label);
                nodeGroup.select('.node-sublabel').text(nodeData.sublabel);
                renderStatText(nodeGroup.select('.node-stat'), nodeData.stat);

                // Update aria-label
                nodeGroup.attr('aria-label', `${nodeData.label}: ${nodeData.stat}`);

                // Update click and keydown handlers with new detail data
                function showDetail(event) {
                    event.stopPropagation();
                    if (nodeData.detail) {
                        detailTitle.textContent = nodeData.detail.title;
                        detailContent.innerHTML = nodeData.detail.content;
                        detailPanel.classList.add('active');
                        detailPanel.setAttribute('aria-hidden', 'false');
                        closeDetail.focus();
                    }
                }
                nodeGroup.on('click', showDetail);
                nodeGroup.on('keydown', function(event) {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        showDetail(event);
                    }
                });

                // Maintain visibility state
                if (revealedNodes.has(nodeData.id)) {
                    nodeGroup.classed('visible', true);
                }
            }
        });
    }

    // ===================================
    // Event Listeners
    // ===================================
    function setupEventListeners() {
        // Toggle switch
        toggle.addEventListener('change', function() {
            toggleSystem(this.checked);
        });

        // Close detail panel button
        closeDetail.addEventListener('click', closeDetailPanel);

        // Click outside to close
        document.addEventListener('click', function(e) {
            if (detailPanel.classList.contains('active') &&
                !detailPanel.contains(e.target) &&
                !e.target.closest('.node-group')) {
                closeDetailPanel();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeDetailPanel();
            }
        });

        // Focus trap in detail panel
        detailPanel.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                const focusable = detailPanel.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
                if (focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        });
    }

    // ===================================
    // Utility Functions
    // ===================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Helper to render multiline stat text using tspan elements
    function renderStatText(selection, stat) {
        selection.selectAll('tspan').remove();
        const lines = stat.split('\n');
        lines.forEach((line, i) => {
            selection.append('tspan')
                .attr('x', 0)
                .attr('dy', i === 0 ? '2.5em' : '1.2em')
                .text(line);
        });
    }

    // ===================================
    // Initialize on Load
    // ===================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }


})();
