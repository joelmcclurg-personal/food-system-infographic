// Node detailed information for the info panel
const nodeDetails = {
    // Current System Nodes
    'farm-bill': {
        title: 'Farm Bill & Commodity Subsidies',
        content: `
            <p>The Farm Bill, renewed approximately every 5 years, directs over <strong>$20 billion annually</strong> in commodity subsidies primarily to corn, soybeans, wheat, cotton, and rice producers.</p>
            <p>This isn't support for "farmers" broadly—it's targeted support for specific commodity crops that form the foundation of industrial agriculture.</p>
            <p><strong>Key statistics:</strong></p>
            <ul>
                <li>Farms with over $1M in sales receive ~60% of payments</li>
                <li>The largest 10% of farms receive 78% of subsidies</li>
                <li>Fruit and vegetable producers receive minimal support</li>
            </ul>
            <p><strong>Why this matters:</strong> These subsidies don't reflect market demand—they shape what gets grown, artificially making corn and soy the cheapest inputs for everything from animal feed to processed food.</p>
            <p class="source-link">Sources: USDA ERS, Environmental Working Group Farm Subsidy Database</p>
        `
    },
    'beneficiaries': {
        title: 'Corporate Beneficiaries',
        content: `
            <p>While subsidies nominally go to farmers, the primary beneficiaries are the corporations that buy subsidized commodities at below-production-cost prices.</p>
            <p><strong>Grain Trading (ABCD Companies):</strong></p>
            <ul>
                <li>ADM, Bunge, Cargill, Louis Dreyfus control 70%+ of global grain trade</li>
                <li>Cargill is the largest privately-held company in the US (~$165B revenue)</li>
            </ul>
            <p><strong>Meat Processing:</strong></p>
            <ul>
                <li>Tyson, JBS, Cargill, Smithfield control 85% of beef processing</li>
                <li>Similar concentration in pork and poultry</li>
            </ul>
            <p><strong>The Lobbying Loop:</strong> These corporations spend $140M+ annually on lobbying to maintain the subsidy structure that benefits them, creating a self-reinforcing cycle.</p>
            <p class="source-link">Sources: Open Secrets, USDA GIPSA, Academic research on market concentration</p>
        `
    },
    'production': {
        title: 'Industrial Monoculture Production',
        content: `
            <p>Subsidized cheap corn and soy don't just <em>enable</em> industrial agriculture—they <strong>necessitate</strong> it.</p>
            <p><strong>The CAFO connection:</strong> When corn is artificially cheap, it only makes economic sense to concentrate animals in feedlots rather than raising them on pasture. The subsidy structure forces this model.</p>
            <p><strong>Scale of monoculture:</strong></p>
            <ul>
                <li>~90 million acres of corn annually</li>
                <li>~90 million acres of soybeans annually</li>
                <li>These two crops cover more land than all other crops combined</li>
            </ul>
            <p><strong>Processed food penetration:</strong> Over 70% of processed foods contain corn or soy derivatives (high fructose corn syrup, soybean oil, corn starch, lecithin, etc.)</p>
            <p><strong>Input requirements:</strong> Industrial monoculture requires massive synthetic inputs—nitrogen fertilizer (Haber-Bosch process), pesticides, and herbicides—because it eliminates the natural systems that would otherwise provide these functions.</p>
            <p class="source-link">Sources: USDA NASS, Food processing industry data</p>
        `
    },
    'health': {
        title: 'Public Health Externalities',
        content: `
            <p>The food system's costs show up in our bodies and our healthcare system.</p>
            <p><strong>Obesity & Metabolic Disease:</strong></p>
            <ul>
                <li>70%+ of American adults are overweight or obese (under updated clinical measures)</li>
                <li>34 million Americans have diabetes</li>
                <li>88 million have prediabetes</li>
                <li>Diet-related disease is now the #1 cause of death</li>
            </ul>
            <p><strong>The Hunger Paradox:</strong> Despite producing more calories per capita than ever, 44 million Americans remain food insecure. "Cheap food" hasn't solved hunger—it's created a system where processed calories are accessible but nutritious food is not.</p>
            <p><strong>Antibiotic Resistance:</strong> 70%+ of antibiotics sold in the US go to livestock, accelerating antibiotic resistance—a crisis the WHO calls one of the greatest threats to global health.</p>
            <p><strong>Healthcare costs:</strong> Diet-related disease costs exceed $200 billion annually in direct medical costs.</p>
            <p class="source-link">Sources: CDC, USDA, WHO, Healthcare cost studies</p>
        `
    },
    'environment': {
        title: 'Environmental Externalities',
        content: `
            <p>Industrial agriculture treats natural systems as externalities to be exploited rather than resources to be maintained.</p>
            <p><strong>Soil Degradation:</strong></p>
            <ul>
                <li>US has lost 57.6 billion tons of topsoil since European settlement</li>
                <li>Average of ~14 inches of topsoil lost across agricultural regions</li>
                <li>Current erosion rates: 10-100x faster than soil formation</li>
                <li>At current rates, many regions have <100 years of productive soil remaining</li>
            </ul>
            <p><strong>Water Systems:</strong></p>
            <ul>
                <li>Gulf of Mexico dead zone: 6,000+ square miles (size of New Jersey)</li>
                <li>Caused by nitrogen runoff from Midwest agriculture</li>
                <li>Groundwater depletion accelerating (Ogallala Aquifer declining)</li>
            </ul>
            <p><strong>Biodiversity Collapse:</strong></p>
            <ul>
                <li>40%+ decline in insect biomass over 30 years</li>
                <li>75% decline in flying insects in protected areas</li>
                <li>Pollinator crisis threatens food production itself</li>
            </ul>
            <p class="source-link">Sources: USDA NRCS, EPA, Nature journal studies, UN FAO</p>
        `
    },
    'economic': {
        title: 'Economic Externalities',
        content: `
            <p>The "efficiency" of industrial agriculture comes at enormous economic cost—just not to the corporations profiting from it.</p>
            <p><strong>Farmer Economics:</strong></p>
            <ul>
                <li>Net farm income is negative for most commodity crop farmers without subsidies</li>
                <li>30% of farmers rely on SNAP (food stamps)</li>
                <li>Median farm income from farming: -$1,000 (2022)</li>
                <li>Most farm families rely on off-farm income to survive</li>
            </ul>
            <p><strong>Rural Decline:</strong></p>
            <ul>
                <li>Farm consolidation has devastated rural communities</li>
                <li>Rural population continues to decline</li>
                <li>Farmer suicide rates significantly elevated</li>
            </ul>
            <p><strong>Externalized Costs:</strong></p>
            <ul>
                <li>Healthcare costs from diet-related disease: $200B+/year</li>
                <li>Environmental remediation costs: billions annually</li>
                <li>Water treatment to remove agricultural chemicals</li>
                <li>Climate costs from agricultural emissions</li>
            </ul>
            <p class="source-link">Sources: USDA ERS, Census of Agriculture, Rural health studies</p>
        `
    },
    'fragility': {
        title: 'System Fragility',
        content: `
            <p>The industrial food system optimized for "efficiency" has created profound vulnerabilities.</p>
            <p><strong>Supply Chain Fragility:</strong></p>
            <ul>
                <li>Just-in-time delivery means grocery stores have ~3 days of food supply</li>
                <li>Any disruption (weather, transport, pandemic) immediately impacts availability</li>
                <li>Concentrated processing creates single points of failure</li>
            </ul>
            <p><strong>Genetic Uniformity:</strong></p>
            <ul>
                <li>Just 6 corn varieties account for 43% of US production</li>
                <li>Genetic uniformity creates vulnerability to disease/pests</li>
                <li>Historical precedent: 1970 Southern Corn Leaf Blight destroyed 15% of US crop</li>
            </ul>
            <p><strong>Input Dependencies:</strong></p>
            <ul>
                <li>US imports significant nitrogen fertilizer (Russia, Canada, Trinidad)</li>
                <li>Phosphorus largely imported (Morocco controls 70% of reserves)</li>
                <li>Fossil fuel dependency throughout the system</li>
            </ul>
            <p>This isn't a resilient system—it's a brittle one optimized for short-term profit extraction.</p>
            <p class="source-link">Sources: USDA, Fertilizer industry data, Supply chain research</p>
        `
    },
    'collapse': {
        title: 'Collapse Trajectory',
        content: `
            <p>This isn't speculation—it's the trajectory we're currently on according to systems modeling.</p>
            <p><strong>Limits to Growth:</strong></p>
            <ul>
                <li>1972 MIT study modeled resource constraints and system dynamics</li>
                <li>Predicted various scenarios including "business as usual" collapse</li>
                <li>2020 analysis by Gaya Herrington (then at KPMG) found current data tracking closely with collapse scenarios</li>
            </ul>
            <p><strong>Critical Inflection Point: ~2040</strong></p>
            <p>The model suggests a critical inflection point around 2040 where multiple systems begin failing simultaneously—not a single catastrophic event, but cascading degradation.</p>
            <p><strong>Important context:</strong> This is <em>not a prediction</em>—it's a projection of where current trajectories lead. The point of understanding this is that <strong>trajectories can be changed</strong>.</p>
            <p>The alternative system isn't just desirable—it may be necessary for civilization to continue.</p>
            <p class="source-link">Sources: "Limits to Growth" (1972), Gaya Herrington's 2020 analysis, Systems dynamics research</p>
        `
    },
    // Alternative System Nodes
    'policy-reform': {
        title: 'Reformed Farm Policy',
        content: `
            <p>Policy reform doesn't mean eliminating farm support—it means redirecting it toward outcomes that benefit farmers, communities, and the environment.</p>
            <p><strong>Existing Programs to Expand:</strong></p>
            <ul>
                <li><strong>VAPG (Value-Added Producer Grants):</strong> Helps farmers capture more value from their products</li>
                <li><strong>Farm to School:</strong> Connects local producers with institutional buyers</li>
                <li><strong>Conservation Stewardship Program:</strong> Pays for environmental outcomes</li>
                <li><strong>Beginning Farmer Programs:</strong> Support new farmers entering agriculture</li>
            </ul>
            <p><strong>Infrastructure Investment:</strong></p>
            <ul>
                <li>Local/regional meat processing facilities</li>
                <li>Food hubs for aggregation and distribution</li>
                <li>Cold storage and logistics for local systems</li>
            </ul>
            <p><strong>Outcome-Based Subsidies:</strong> Tying support to soil health, water quality, biodiversity, and nutritional outcomes rather than commodity production volume.</p>
        `
    },
    'new-beneficiaries': {
        title: 'Farmers & Communities as Beneficiaries',
        content: `
            <p>In a reformed system, the beneficiaries of farm policy would be the people who grow food and the communities they live in.</p>
            <p><strong>Farmer Economics:</strong></p>
            <ul>
                <li>Value capture stays with producers, not processors</li>
                <li>Diversified operations reduce risk</li>
                <li>Direct-to-consumer channels increase margins</li>
                <li>Reduced input costs through regenerative practices</li>
            </ul>
            <p><strong>Community Benefits:</strong></p>
            <ul>
                <li>Local food systems create more jobs per dollar than industrial</li>
                <li>Rural economic revitalization</li>
                <li>Regional food security</li>
                <li>Preserved agricultural knowledge and culture</li>
            </ul>
            <p><strong>Democratic Feedback:</strong> When farmers benefit from policy, they advocate for policy that benefits farmers—a positive feedback loop replacing the corporate lobbying cycle.</p>
        `
    },
    'regenerative': {
        title: 'Regenerative & Diversified Production',
        content: `
            <p>The alternative isn't a return to pre-industrial farming—it's advanced regenerative systems that can actually feed populations.</p>
            <p><strong>Evidence for Viability:</strong></p>
            <ul>
                <li>Research shows 88-92% of US population could be fed from within 100 miles</li>
                <li>Regenerative farms can match or exceed conventional yields after transition period</li>
                <li>Polyculture systems more productive per acre when measuring total output</li>
            </ul>
            <p><strong>Key Practices:</strong></p>
            <ul>
                <li>Cover cropping and crop rotation</li>
                <li>Integrated livestock at appropriate scale</li>
                <li>Reduced tillage/no-till systems</li>
                <li>Agroforestry and perennial systems</li>
            </ul>
            <p><strong>Technology Integration:</strong></p>
            <ul>
                <li>CEA (Controlled Environment Agriculture) for high-value crops</li>
                <li>Aquaponics and hydroponics where appropriate</li>
                <li>Precision agriculture reducing input waste</li>
                <li>Small-scale appropriate technology (See: USDA demos, EPCOT model)</li>
            </ul>
            <p><strong>Protein Question:</strong> Beef specifically requires reduction; chicken, pork, fish can scale in regenerative systems. Aquaponics offers 10x protein production per acre.</p>
        `
    },
    'health-positive': {
        title: 'Public Health Outcomes',
        content: `
            <p>A food system designed for nutrition rather than commodity production creates dramatically different health outcomes.</p>
            <p><strong>Nutritional Access:</strong></p>
            <ul>
                <li>Fresh, nutrient-dense food accessible to all communities</li>
                <li>Ending "food apartheid" through equitable food system design</li>
                <li>School food programs featuring local, whole foods</li>
            </ul>
            <p><strong>Disease Prevention:</strong></p>
            <ul>
                <li>Reduced chronic disease burden</li>
                <li>Obesity rates declining</li>
                <li>Diabetes prevention through diet</li>
            </ul>
            <p><strong>Economic Benefits:</strong></p>
            <ul>
                <li>Healthcare cost reduction (potentially $100B+ annually)</li>
                <li>Increased productivity from healthier population</li>
                <li>Reduced disability and early mortality</li>
            </ul>
            <p><strong>True Food Security:</strong> Not just calories available, but nutrition accessible—solving the hunger paradox.</p>
        `
    },
    'environment-positive': {
        title: 'Environmental Restoration',
        content: `
            <p>Regenerative agriculture doesn't just reduce harm—it actively restores natural systems.</p>
            <p><strong>Soil Regeneration:</strong></p>
            <ul>
                <li>Rebuilding topsoil through cover cropping and reduced tillage</li>
                <li>Increasing organic matter and water retention</li>
                <li>Restoring soil biology and nutrient cycling</li>
            </ul>
            <p><strong>Carbon Sequestration:</strong></p>
            <ul>
                <li>Healthy soil is a massive carbon sink</li>
                <li>Agriculture could shift from carbon source to carbon sink</li>
                <li>Climate mitigation through farming practices</li>
            </ul>
            <p><strong>Water Systems:</strong></p>
            <ul>
                <li>Reduced runoff and nutrient pollution</li>
                <li>Gulf dead zone recovery possible</li>
                <li>Groundwater recharge through improved soil infiltration</li>
            </ul>
            <p><strong>Biodiversity:</strong></p>
            <ul>
                <li>Habitat restoration within agricultural landscapes</li>
                <li>Pollinator recovery</li>
                <li>Genetic diversity in crops and livestock</li>
            </ul>
        `
    },
    'economic-positive': {
        title: 'Economic Benefits',
        content: `
            <p>When true costs are accounted for, regenerative systems are more economically viable than industrial agriculture.</p>
            <p><strong>Farmer Prosperity:</strong></p>
            <ul>
                <li>Reduced input costs (less fertilizer, pesticides)</li>
                <li>Higher margins on differentiated products</li>
                <li>Multiple revenue streams from diversified operations</li>
                <li>Resilience to commodity price volatility</li>
            </ul>
            <p><strong>Rural Economy:</strong></p>
            <ul>
                <li>More labor-intensive = more rural jobs</li>
                <li>Local food systems multiply spending in communities</li>
                <li>Support for Main Street businesses</li>
            </ul>
            <p><strong>Externality Reduction:</strong></p>
            <ul>
                <li>Healthcare savings from improved nutrition</li>
                <li>Reduced environmental remediation costs</li>
                <li>Climate cost avoidance</li>
            </ul>
            <p><strong>True Cost Accounting:</strong> When externalities are priced in, regenerative food is actually cheaper than industrial food—we just currently hide the costs.</p>
        `
    },
    'resilience': {
        title: 'System Resilience',
        content: `
            <p>A diversified, distributed food system is inherently more resilient than a concentrated industrial one.</p>
            <p><strong>Distributed Networks:</strong></p>
            <ul>
                <li>Regional food production reduces transport vulnerability</li>
                <li>Multiple smaller processors instead of concentrated mega-facilities</li>
                <li>Redundancy built into the system</li>
            </ul>
            <p><strong>Genetic Diversity:</strong></p>
            <ul>
                <li>Multiple crop varieties reduce disease vulnerability</li>
                <li>Heritage breeds preserve genetic resources</li>
                <li>Seed saving and local adaptation</li>
            </ul>
            <p><strong>Reduced Dependencies:</strong></p>
            <ul>
                <li>Lower fossil fuel requirements</li>
                <li>On-farm fertility cycling reduces fertilizer imports</li>
                <li>Local inputs where possible</li>
            </ul>
            <p><strong>Regional Food Security:</strong></p>
            <ul>
                <li>Strategic reserves at regional level</li>
                <li>Shorter supply chains = faster response to disruption</li>
                <li>Community-level food security planning</li>
            </ul>
        `
    },
    'sustainability': {
        title: 'Long-term Viability',
        content: `
            <p>The alternative system isn't just preferable—it may be the only path to a food system that can persist.</p>
            <p><strong>Regenerative Trajectory:</strong></p>
            <ul>
                <li>Systems that build rather than deplete natural capital</li>
                <li>Positive feedback loops instead of extractive spirals</li>
                <li>Improving conditions over time</li>
            </ul>
            <p><strong>Intergenerational Security:</strong></p>
            <ul>
                <li>Food systems our grandchildren can inherit</li>
                <li>Preserved agricultural resources (soil, water, genetics)</li>
                <li>Knowledge and practice transmission</li>
            </ul>
            <p><strong>The Choice:</strong></p>
            <p>We're not choosing between "modern efficient agriculture" and "going back"—we're choosing between:</p>
            <ul>
                <li>A system that extracts value until it collapses</li>
                <li>A system that can sustain human civilization indefinitely</li>
            </ul>
            <p>The Limits to Growth analysis shows us where we're headed. The alternative shows us a different trajectory is possible—if we choose it.</p>
        `
    }
};

// DOM Elements
const toggle = document.getElementById('layer-toggle');
const currentLayer = document.getElementById('current-layer');
const alternativeLayer = document.getElementById('alternative-layer');
const toggleContainer = document.querySelector('.toggle-container');
const footerCta = document.getElementById('footer-cta');
const infoPanel = document.getElementById('info-panel');
const panelTitle = document.getElementById('panel-title');
const panelContent = document.getElementById('panel-content');
const closePanel = document.getElementById('close-panel');

// Toggle between layers
toggle.addEventListener('change', function() {
    if (this.checked) {
        currentLayer.classList.add('hidden');
        alternativeLayer.classList.remove('hidden');
        toggleContainer.classList.add('alt-active');
        footerCta.innerHTML = 'This is the system we could build. <span class="toggle-hint">← Toggle to see what we have</span>';
        footerCta.classList.add('alt-message');
    } else {
        currentLayer.classList.remove('hidden');
        alternativeLayer.classList.add('hidden');
        toggleContainer.classList.remove('alt-active');
        footerCta.innerHTML = 'This is the system we have. <span class="toggle-hint">Toggle to see the alternative →</span>';
        footerCta.classList.remove('alt-message');
    }
});

// Node click handlers
document.querySelectorAll('.node').forEach(node => {
    node.addEventListener('click', function() {
        const nodeId = this.dataset.node;
        if (nodeDetails[nodeId]) {
            panelTitle.textContent = nodeDetails[nodeId].title;
            panelContent.innerHTML = nodeDetails[nodeId].content;
            infoPanel.classList.add('active');
        }
    });
});

// Close panel
closePanel.addEventListener('click', function() {
    infoPanel.classList.remove('active');
});

// Close panel when clicking outside
document.addEventListener('click', function(e) {
    if (!infoPanel.contains(e.target) && !e.target.closest('.node')) {
        infoPanel.classList.remove('active');
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        infoPanel.classList.remove('active');
    }
});

// Smooth scroll for better mobile experience
if ('scrollBehavior' in document.documentElement.style === false) {
    // Polyfill for smooth scroll if needed
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
