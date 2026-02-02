# Food System Infographic - Project Notes

> **For future sub-agents:** This document captures the complete context, intent, narrative structure, and technical implementation of this scrollytelling infographic project. Use this as your primary reference for understanding what was built and why.

---

## Project Overview

### What This Is
An interactive scrollytelling infographic that visualizes how the U.S. Farm Bill and agricultural subsidies create a food system designed for extraction rather than sustainability. The project presents a dual-narrative: **"Current System"** (showing the path to collapse) and **"The Alternative"** (showing a regenerative path forward).

### Core Intent
The narrative follows a specific rhetorical structure:
1. **Hook** - Introduce the Farm Bill as the source of everything
2. **Follow the Money** - Show who really benefits from subsidies (corporations, not farmers)
3. **The Factory** - How cheap commodities enable industrial monoculture
4. **Externalities** - The true costs: health, environment, economic extraction
5. **Fragility** - Why the system is vulnerable to collapse
6. **Collapse Trajectory** - Where current trends lead (MIT's Limits to Growth model)
7. **The Alternative** - A regenerative alternative exists

### Target Audience
- General public interested in food policy
- Policy advocates
- Anyone curious about the connection between farm subsidies and American health/environment

---

## Technical Architecture

### File Structure
```
food-system-infographic/
├── index.html      # Main HTML structure
├── styles.css      # All styling (mobile-first, responsive)
├── script.js       # Scrollama-based scroll interactions + D3 visualization
└── data.js         # Node data for both "current" and "alternative" systems
```

### Key Technologies
- **D3.js v7** - SVG visualization (nodes, connections, orbital rings)
- **Scrollama** - Scroll-driven narrative sections (with IntersectionObserver fallback)
- **CSS Custom Properties** - Theming for current vs. alternative color palettes
- **No build process** - Pure HTML/CSS/JS, ready to deploy statically

### Visualization Structure
The SVG visualization uses a **radial/orbital layout**:
- **Ring 0 (center)**: Farm Bill - the policy source
- **Ring 1**: Corporate Beneficiaries
- **Ring 2**: Industrial Production
- **Ring 3**: Externalities (Health, Environment, Economic) - three nodes at angles
- **Ring 4**: System Fragility
- **Ring 5 (outer)**: Collapse / Long-term Viability

Connections draw between nodes as users scroll, revealing the causal chain.

---

## Dual System Toggle

### How It Works
A toggle switch appears after the user scrolls through all 7 sections of the "Current System" narrative. When toggled:

1. **Page scrolls to top** for fresh narrative experience
2. **Scroll panels swap** - Current (right side) slides out, Alternative (left side) slides in
3. **SVG morphs** - Same node positions, different colors and content
4. **Hero text updates** - Title, tagline, and subtext all change

### Hero Text by System

| System | Element | Text |
|--------|---------|------|
| **Current** | Title | "The $20 Billion Food System Built to Collapse" |
| **Current** | Tagline | "Every 5 years, Congress writes a bill that shapes what 330 million Americans eat." |
| **Current** | Subtext | "Scroll to follow the money." |
| **Alternative** | Title | "A Food System Designed to Sustain the Present and Future" |
| **Alternative** | Tagline | "What if public policy shifted to support a system that was insulated against collapse?" |
| **Alternative** | Subtext | "Scroll to see the way forward" |

### Color Palette
**Current System**: Reds, oranges, browns - colors of extraction and warning
- Policy: `#2c5282` (blue - neutral policy)
- Beneficiaries: `#6b46c1` (purple - corporate)
- Production: `#b7791f` (brown - industrial)
- Externalities: `#c53030` (red - harm)
- Fragility/Collapse: `#9b2c2c` to `#742a2a` (deepening red)

**Alternative System**: Greens, teals - colors of growth and hope
- Policy: `#2c5282` (same blue - policy is neutral)
- Beneficiaries: `#48bb78` (green - communities)
- Production: `#38a169` (green - regenerative)
- Externalities: `#0ea5e9` and `#3182ce` (blue/teal - restoration)
- Resilience/Viability: `#319795` to `#2f855a` (teal to green)

---

## Narrative Content (Current System)

### Section 1: The Farm Bill (Hook)
**Node**: Farm Bill (center)
**Key message**: "$20 billion annually flows to commodity crop subsidies"
**Detail content covers**: What subsidies are, how they break supply/demand curves, the concentration effect (10% of farms get 78% of payments)

### Section 2: Follow the Money
**Node**: Corporate Beneficiaries
**Key message**: "The ABCD grain traders + food manufacturers capture the value"
**Detail content covers**: ADM/Bunge/Cargill/Louis Dreyfus, Tyson/JBS/Smithfield, PepsiCo/Coca-Cola/General Mills profits, $177M lobbying in 2023

### Section 3: The Factory
**Node**: Industrial Monoculture
**Key message**: "180 million acres of corn and soybeans"
**Detail content covers**: CAFOs, input dependencies (fertilizer, pesticides, GMO seeds, antibiotics)

### Section 4: The Bill Comes Due
**Nodes**: Health, Environment, Economic (three externality nodes)
**Key stats**:
- Health: 70% overweight, diet-related disease #1 cause of death
- Environment: 57 billion tons topsoil lost
- Economic: 30% of farmers on SNAP

**Detail content covers**: The antibiotic crisis, the agricultural treadmill, the disappearing farmland

### Section 5: The Fragile Machine
**Node**: System Fragility
**Key message**: "3 days grocery inventory, 6 corn varieties = 43% of production"
**Detail content covers**: COVID meatpacking, infant formula crisis, 1970 corn blight, fertilizer geopolitics

### Section 6: Where This Leads
**Node**: Collapse Trajectory
**Key message**: "MIT's Limits to Growth model - we're tracking the collapse scenario"
**Detail content covers**: San Joaquin Valley sinking, Ogallala Aquifer depletion, Florida phosphate reserves, the Dust Bowl parallel

### Section 7: The Alternative (CTA)
**No new node** - prompts user to toggle
**Key message**: "Designed systems can be redesigned"

---

## Narrative Content (Alternative System)

### Section 1: Rewriting the Rules
**Node**: Reformed Farm Policy
**Key message**: "Outcome-based subsidies - pay for soil health, not bushels"
**Detail covers**: Value-Added Producer Grants, Farm to School, Conservation Stewardship Program

### Section 2: Money Stays Local
**Node**: Farmers & Communities
**Key message**: "Wealth stays local - democratic feedback loop replaces lobbying feedback loop"

### Section 3: Farming That Gives Back
**Node**: Regenerative Diversified Production
**Key message**: "88-92% of U.S. could be fed within 100 miles"
**Detail covers**: Cover cropping, crop rotation, integrated livestock, precision ag, controlled environment

### Section 4: The Payoff
**Nodes**: Health, Environment, Economic (restored/improved)
**Key message**: "$100B+ healthcare cost reduction potential"

### Section 5: Built to Bend
**Node**: System Resilience
**Key message**: "Antifragile by design - diversity, distribution, redundancy"

### Section 6: Systems That Last
**Node**: Long-term Viability
**Key message**: "Collapse averted - regenerative feedback loops"

### Section 7: The Current System (CTA to toggle back)

---

## Implementation Details

### Scrollama Setup
```javascript
// Dual Scrollama instances - one for each narrative
scrollamaInstance = scrollama().setup({ step: '#scroll-current .scroll-section' });
scrollamaAlt = scrollama().setup({ step: '#scroll-alt .scroll-section' });

// Alt is disabled initially
scrollamaAlt.disable();
```

### Toggle System Function
Located in `script.js`, the `toggleSystem(toAlternative)` function:
1. Sets transition data attributes for CSS animations
2. Disables outgoing Scrollama instance
3. Clears section states
4. Scrolls to top
5. Updates `currentSystem` state
6. Updates SVG class for color morphing
7. Updates hero text (title, tagline, subtext)
8. Resets revealed nodes/connections
9. Updates node data via `updateNodesForSystem()`
10. Re-renders connections
11. Enables incoming Scrollama instance

### Progressive Reveal
Nodes and connections are rendered hidden initially. As users scroll:
- `revealNodes(nodeIds)` adds `.visible` class
- `revealConnections(connectionIds)` adds `.visible` and `.drawing` classes
- Exit handlers hide nodes when scrolling back up

### Node Interaction
- **Hover**: Highlights hovered node, dims others (precise circle hit detection)
- **Click**: Opens detail panel with rich HTML content
- **Keyboard**: Tab navigation, Enter/Space to open details, Escape to close

---

## CSS Architecture

### Key CSS Variables
```css
--panel-transition: 500ms;    /* Scroll panel slide duration */
--panel-slide: 100px;         /* Slide distance */
--transition-morph: 800ms;    /* SVG color morph duration */
```

### Responsive Breakpoints
- **Mobile-first** base styles
- **768px+**: Side-by-side layout (viz center, scroll panels on sides)
- **1024px+**: Wider visualization area

### Accessibility
- `prefers-reduced-motion`: Disables all animations
- Skip link for keyboard users
- Focus indicators on all interactive elements
- ARIA labels on nodes and toggle

---

## Recent Session Changes

### Dynamic Taglines (Just Implemented)
**Files modified**:
- `index.html` lines 21-22: Added `id="hero-tagline"` and `id="hero-subtext"`
- `script.js` `toggleSystem()`: Added tagline/subtext update logic after title update

**Code added to toggleSystem()**:
```javascript
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
```

---

## Hosting/Publishing Notes

### Static Deployment
The project requires no build step. Deploy these 4 files to any static host:
- `index.html`
- `styles.css`
- `script.js`
- `data.js`

### External Dependencies (CDN)
- D3.js v7: `https://d3js.org/d3.v7.min.js`
- Scrollama: `https://unpkg.com/scrollama@3.2.0/scrollama.min.js`
- Inter font: Google Fonts

### Recommended Hosts
- **GitHub Pages**: Free, git-based deployment
- **Netlify**: Free tier, drag-and-drop or git integration
- **Vercel**: Similar to Netlify
- **S3 + CloudFront**: For production scale

### Pre-deployment Checklist
- [ ] Test on mobile devices
- [ ] Test toggle functionality (both directions)
- [ ] Verify all node detail panels have content
- [ ] Check reduced-motion behavior
- [ ] Validate keyboard navigation

---

## Future Enhancement Ideas
- Analytics tracking for scroll depth and toggle usage
- Share/embed functionality
- Print-optimized view
- Additional data sources in detail panels
- Animated number counters for statistics
- Social meta tags (Open Graph, Twitter Cards)

---

## Data Sources Referenced in Content
- USDA Economic Research Service
- Environmental Working Group Farm Subsidy Database
- OpenSecrets lobbying database
- CDC, EPA, FDA
- Company annual reports (PepsiCo, Coca-Cola, ADM, etc.)
- "Limits to Growth" (Meadows et al., 1972)
- Gaya Herrington's 2020 update to Limits to Growth
- American Farmland Trust
- USGS groundwater monitoring

---

### Narrative Revisions (February 2026)

Major content updates to strengthen credibility, add success stories, incorporate Indigenous knowledge, and sharpen the farmer vs. corporation framing.

#### 1. The "88-92% Local" Claim Fix

**Problem:** The original claim "88-92% of U.S. could be fed within 100 miles" was unqualified and potentially misleading.

**Source verified:** Zumkehr & Campbell (2015), *Frontiers in Ecology and the Environment*

**Changes made:**
- `data.js` - Regenerative Production node: Changed stat from `'88-92% local potential'` to `'Up to 90% local potential'`
- Added caveat in production detail: "if cropland were redirected from feed and fuel back to food for people"
- Added citation: Zumkehr & Campbell, *Frontiers in Ecology and the Environment*, 2015
- `data.js` - System Resilience node: Fixed reference for consistency

**Key insight:** The 90% figure represents *potential* if we redirected cropland from animal feed, biofuels, and exports to direct human food—not current reality (only 1.5-3% of US ag production is local food currently).

---

#### 2. Success Stories Added (Alternative System)

Added real-world examples to each downstream alternative node to demonstrate that the "alternative" isn't hypothetical—it's already working.

**Health Node - Geisinger Fresh Food Farmacy (Pennsylvania):**
```
Food-as-medicine program for diabetic patients
- HbA1c dropped 2.1 percentage points (better than adding medication)
- Healthcare costs fell 80% ($240K → $48K per patient/year)
Source: Harvard Business Review, Geisinger Health
```

**Environment Node - Brown's Ranch (North Dakota):**
```
Gabe Brown's 5,000-acre regenerative operation
- Soil organic matter: 1.9% → 6%+
- Water infiltration: 0.5 → 30+ inches/hour
- Grew several inches of new topsoil in 20 years
- Zero synthetic fertilizer, 75% less herbicide
Source: USDA NRCS, CSU Chico
```

**Economic Node - Vermont Farm to Plate:**
```
Comprehensive state food system initiative
- 6,560 net new jobs over a decade (11.3% increase)
- Local food purchases: 5% → 14% of food spending
- Economic output increased 48% ($7.5B → $11.3B)
Source: Vermont Sustainable Jobs Fund
```

---

#### 3. Indigenous/TEK References Added (4 locations)

Added Traditional Ecological Knowledge (TEK) framing across four alternative system nodes to acknowledge Indigenous peoples as originators AND ongoing practitioners of regenerative approaches.

**Reformed Farm Policy node:**
> "Honoring Indigenous Knowledge" section - Policy can support revival of Indigenous food sovereignty, honoring TEK that sustained this land for millennia.

**Regenerative Production node:**
> "Indigenous Roots of Regenerative Practice" - Many practices now called "regenerative" originate in Indigenous food systems. Three Sisters (corn, beans, squash) yields 20% more than monoculture. References Native American Food Sovereignty Alliance (NAFSA).

**System Resilience node:**
> "Lessons From Indigenous Systems" - Indigenous food systems demonstrate resilience: diverse, distributed, adapted to local conditions, designed for the long term.

**Long-term Viability node:**
> "Ancient Wisdom, Modern Application" - This isn't new—it's a return to principles Indigenous peoples practiced for millennia and continue to advance through organizations like the Intertribal Agriculture Council and Indigenous Seedkeepers Network.

**Key organizations referenced:**
- Native American Food Sovereignty Alliance (NAFSA)
- Indigenous Seedkeepers Network
- Intertribal Agriculture Council

---

#### 4. Call to Action Section Added

New `<section class="cta-section">` added to `index.html` providing actionable next steps for readers.

**Three tiers:**
- **Start Small:** Eat more locally—even one meal a week makes a difference
- **Find Local Food:** Links to LocalHarvest.org and USDA Farmers Market Directory
- **Go Deeper:** Connect with local food coalitions

**Files modified:**
- `index.html`: Added CTA section HTML structure
- `styles.css`: Added corresponding CSS for `.cta-section`, `.cta-tier`, `.cta-links`

---

#### 5. Farmer vs. Corporation Framing Sharpened

Revised language throughout to clarify that farmers are victims of the system, not villains. Corporations (ABCD grain traders, meat processors, food manufacturers) are the beneficiaries of extraction.

**Changes by file:**

**index.html:**
- Section 1: Clarified largest farms receiving subsidies are "mostly corporate operations"
- Section 3: Added "Farmers are forced to grow what the system pays for"

**data.js:**
- Farm Bill node: "traps farmers in a system that rewards volume over value"
- Industrial Monoculture node: "Farmers are forced to grow what the system incentivizes"
- Input Dependencies detail: "The system traps farmers in a cycle of dependency"

**Framing principle:** The system design is the problem; farmers are doing the best they can within constraints they didn't create.

---

#### Files Modified Summary

| File | Changes |
|------|---------|
| `data.js` | 88-92% fix with citation, 3 success stories, 4 TEK references, farmer framing language |
| `index.html` | CTA section HTML, farmer/corp framing in scroll sections |
| `styles.css` | CTA section styling (`.cta-section`, `.cta-tier`, `.cta-links`) |

---

*Last updated: February 2026 - Narrative revisions session*

---

## Deployment (February 2026)

### GitHub Pages Deployment

**Live URL:** https://joelmcclurg.github.io/food-system-infographic/

**Repository:** https://github.com/joelmcclurg/food-system-infographic

**Deployment Steps Completed:**

1. **Installed GitHub CLI (gh v2.86.0)**
   - Downloaded from official releases
   - Installed to `~/bin/gh`

2. **Committed all project files**
   - `index.html`, `styles.css`, `script.js`, `data.js`
   - `PROJECT_NOTES.md`

3. **Created GitHub repository**
   ```bash
   gh repo create food-system-infographic --public --source=. --push
   ```

4. **Enabled GitHub Pages**
   ```bash
   gh api repos/joelmcclurg/food-system-infographic/pages -X POST \
     -f "source[branch]=main" -f "source[path]=/"
   ```

**Configuration:**
- Source branch: `main`
- Source path: `/` (root)
- HTTPS enforced: Yes

### Embedding in Substack

Substack has limited native embed support. Options:

1. **Link directly** (most reliable for full interactivity)
   - Just paste the URL in your Substack post
   - Example: "Explore the interactive infographic: [link]"

2. **Embed as iframe** (may have display limitations)
   ```html
   <iframe src="https://joelmcclurg.github.io/food-system-infographic/"
           width="100%" height="800" frameborder="0"></iframe>
   ```
   - Note: Substack may not render iframes from all sources

3. **Screenshot + link** (fallback)
   - Take a compelling screenshot of the visualization
   - Link to full interactive version

**Recommended approach:** Link directly with a compelling description. The scrollytelling experience works best at full page size.

---

### Future Deployment Updates

To update the live site after making changes:

```bash
cd ~/food-system-infographic
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically rebuild and deploy within minutes.
