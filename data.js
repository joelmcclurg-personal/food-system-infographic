// Node data for both system states
const systemData = {
    current: {
        nodes: [
            {
                id: 'farm-bill',
                label: 'Farm Bill',
                sublabel: 'Commodity Subsidies',
                stat: 'What our tax dollars prioritize',
                category: 'policy',
                ring: 0,
                angle: 180,
                size: 50,
                detail: {
                    title: 'The Farm Bill',
                    content: `
                        <p>Every five years, Congress reauthorizes the Farm Bill, a massive piece of legislation that determines how America grows, distributes, and consumes food. The bill shapes everything from crop insurance to nutrition assistance, but its commodity programs have created something remarkable: an endless supply of corn and soybeans priced below what it costs to grow them.</p>
                        <p><strong>What Is a Subsidy?</strong> A subsidy is a direct payment from the government to a producer. The government collects taxes from citizens and redistributes that money to industries it wants to encourage. Agricultural subsidies were originally designed during the Great Depression to stabilize farm income and ensure food security. Today, they've become a mechanism that fundamentally distorts what America grows, and how much.</p>
                        <p><strong>Breaking the Supply/Demand Curve:</strong> In a normal market, overproduction causes prices to fall. When prices fall below the cost of production, farmers lose money and reduce planting. Supply decreases, prices recover, and the market finds equilibrium.</p>
                        <p>Subsidies break this feedback loop:</p>
                        <ul>
                            <li>When corn prices fall below production costs, farmers would normally lose money and plant less</li>
                            <li>Instead, government payments cover the gap between market price and a guaranteed "reference price"</li>
                            <li>Farmers stay profitable even when selling below cost, so they keep planting</li>
                            <li>More supply enters the market, pushing prices even lower</li>
                            <li>Lower prices trigger more subsidy payments, which enable more production</li>
                        </ul>
                        <p>The result is a permanent glut. Corn and soybeans exist outside normal supply and demand, produced in quantities the market would never support, at prices the market would never sustain. This isn't a market failure. It's a policy design.</p>
                        <p><strong>The Scale:</strong></p>
                        <ul>
                            <li>The bill authorizes roughly $20 billion annually in commodity subsidies</li>
                            <li>These payments flow primarily to producers of corn, soybeans, wheat, cotton, and rice</li>
                            <li>Subsidy formulas are based on acreage and historical production, so larger operations receive larger payments</li>
                            <li>The largest 10% of farms receive 78% of all subsidy payments</li>
                        </ul>
                        <p><strong>The Concentration Effect:</strong> Large corporate farming operations with over $1 million in sales capture approximately 60% of commodity payments. Meanwhile, family farmers growing fruits, vegetables, and other specialty crops receive minimal direct support. The incentive structure doesn't just favor commodity production—it traps farmers in a system where growing anything else is economically irrational.</p>
                        <p class="source">Sources: USDA Economic Research Service, Environmental Working Group Farm Subsidy Database</p>
                    `
                }
            },
            {
                id: 'beneficiaries',
                label: 'Where Benefits',
                sublabel: 'Flow',
                stat: 'Not back to farmers',
                category: 'beneficiary',
                ring: 1,
                angle: 180,
                size: 40,
                connections: ['farm-bill'],
                detail: {
                    title: 'Where the Benefits Flow',
                    content: `
                        <p>When taxpayers invest $20 billion annually in farm policy, where does that investment go? Follow the money: subsidies are paid to farmers, but the economic value moves downstream. When commodity prices fall below production costs, the difference between what farmers receive and what the market would naturally pay becomes margin for buyers.</p>
                        <p><strong>The Supply Chain Shows Where Value Accumulates:</strong></p>
                        <ul>
                            <li><strong>Grain trading</strong> is highly concentrated—four companies (ADM, Bunge, Cargill, and Louis Dreyfus) handle over 70% of global trade. ADM alone reported $3.5 billion in net income in 2023.</li>
                            <li><strong>Meat processing</strong> follows the same pattern—four companies process 85% of beef. Cheap corn makes concentrated animal feeding operations economically viable.</li>
                            <li><strong>Food manufacturing</strong> turns subsidized corn and soy into the cheapest calories available:
                                <ul>
                                    <li><strong>PepsiCo</strong> (Frito-Lay, Quaker, Gatorade): $9.7 billion profit (2023)</li>
                                    <li><strong>Coca-Cola</strong> (beverages with HFCS): $10.7 billion profit (2023)</li>
                                    <li><strong>General Mills</strong> (cereals, snacks): $2.5 billion profit (2024)</li>
                                    <li><strong>Mondelez</strong> (Oreos, chips, snacks): $5.0 billion profit (2023)</li>
                                    <li><strong>Conagra</strong> (frozen foods, snacks): $684 million profit (2023)</li>
                                </ul>
                            </li>
                        </ul>
                        <p>These five companies alone generate over $28 billion in annual profit—that's the scale of value that flows past farmers, built on a foundation of corn syrup, soybean oil, and corn starch priced below production costs.</p>
                        <p><strong>Policy Momentum:</strong> Once supply chains, processing infrastructure, and distribution networks are built around cheap commodities, there's momentum to maintain that structure. The question isn't whether anyone is acting badly—it's whether this is the outcome we want from our public investment.</p>
                        <p class="source">Sources: Company annual reports and SEC filings, USDA Grain Inspection Packers and Stockyards Administration</p>
                    `
                }
            },
            {
                id: 'production',
                label: 'Industrial',
                sublabel: 'Monoculture',
                stat: '180M acres corn+soy',
                category: 'production',
                ring: 2,
                angle: 180,
                size: 40,
                connections: ['beneficiaries'],
                detail: {
                    title: 'Industrial Monoculture',
                    content: `
                        <p>Industrial monoculture—the practice of growing a single crop repeatedly over vast areas—dominates American agriculture. Farmers are forced to grow what the system incentivizes, not what their land can sustainably support. When corn costs less to buy than to grow, the entire food system reorganizes around using as much of it as possible. This isn't a market failure or a farmer's choice—it's a policy outcome. And policy can change.</p>
                        <p><strong>The Scale:</strong></p>
                        <ul>
                            <li>Corn and soybeans together cover approximately 180 million acres annually</li>
                            <li>These two crops occupy more American farmland than all other crops combined</li>
                            <li>Over 70% of processed foods contain corn or soy derivatives (high-fructose corn syrup, soybean oil, corn starch, lecithin)</li>
                        </ul>
                        <p><strong>The CAFO Connection:</strong> Artificially cheap corn makes Concentrated Animal Feeding Operations (CAFOs) economically viable. CAFOs are industrial facilities where thousands of animals (cattle, hogs, or poultry) are confined in enclosed spaces and fed grain-based diets rather than being raised on pasture. When feed costs drop below natural production costs, it becomes profitable to concentrate animals in facilities designed for maximum throughput rather than animal welfare or environmental sustainability.</p>
                        <p><strong>Input Dependencies:</strong> The system traps farmers in a cycle of dependency. Growing the same crop year after year without rotation or cover crops depletes soil nutrients and disrupts natural pest cycles. Without diverse plantings to fix nitrogen, suppress weeds, and break pest and disease cycles, the land cannot replenish itself. Farmers become dependent on purchasing ever-more-expensive inputs from the same corporations that profit from the system:</p>
                        <ul>
                            <li>Synthetic nitrogen fertilizer (derived from natural gas)</li>
                            <li>Pesticides and herbicides</li>
                            <li>Genetically modified seeds designed for chemical systems</li>
                            <li>Routine antibiotics in livestock operations (contributing to antimicrobial resistance, more on this downstream)</li>
                        </ul>
                        <p class="source">Sources: USDA National Agricultural Statistics Service, Food processing industry data</p>
                    `
                }
            },
            {
                id: 'health',
                label: 'Public Health',
                sublabel: 'Crisis',
                stat: 'We are what we subsidize',
                category: 'externality-health',
                ring: 3,
                angle: 228,
                radius: 375,
                size: 35,
                connections: ['production'],
                detail: {
                    title: 'The Public Health Crisis',
                    content: `
                        <p>The 180 million acres of subsidized corn and soybeans don't stay on farms; they become the building blocks of a disease-promoting food supply. Over 70% of processed foods contain corn or soy derivatives: high-fructose corn syrup, soybean oil, corn starch, lecithin. Because these ingredients are artificially cheap, ultra-processed foods become the cheapest calories available. The result appears not at the checkout counter but in hospital bills, prescription costs, and mortality statistics. <strong>Annual healthcare costs from diet-related disease exceed $200 billion.</strong></p>
                        <p><strong>The Numbers:</strong></p>
                        <ul>
                            <li>Diet-related disease is now the #1 cause of death in America, above accidents, violence, and drug overdoses</li>
                            <li>Over 70% of American adults are overweight or obese</li>
                            <li>34 million Americans have diabetes; another 88 million are prediabetic</li>
                        </ul>
                        <p><strong>The Hunger Paradox:</strong> Despite record calorie production, 44 million Americans remain food insecure. The system produces abundant cheap calories but limited access to nutritious food. "Food deserts" and "food apartheid" describe communities where processed foods are accessible but fresh produce is not.</p>
                        <p><strong>The Antibiotic Crisis:</strong> The same cheap corn that fills processed foods also makes Concentrated Animal Feeding Operations (CAFOs) economically viable. Crowding thousands of animals creates disease pressure, and the industrial solution is routine antibiotics. Over 70% of U.S. antibiotics go to livestock, often at low doses mixed into feed. This breeds superbugs: sub-therapeutic doses kill susceptible bacteria but spare resistant ones. Survivors multiply and share resistance genes, even across species. The resistant bacteria spread through meat, water, air, and farmworkers into communities. Monoculture enables CAFOs; CAFOs breed superbugs; superbugs render modern medicine defenseless.</p>
                        <p class="source">Sources: Centers for Disease Control, USDA, World Health Organization</p>
                    `
                }
            },
            {
                id: 'economic',
                label: 'Economic',
                sublabel: 'Extraction',
                stat: 'Farmers can\'t afford food',
                category: 'externality-econ',
                ring: 3,
                angle: 132,
                radius: 375,
                size: 35,
                connections: ['production'],
                detail: {
                    title: 'Economic Extraction',
                    content: `
                        <p>Here is American agriculture's central paradox: the people who grow the nation's food often cannot afford to eat. In 2022, the median farm household earned negative $1,000 from farming operations. Not low income, negative income. The families feeding America survive on off-farm jobs, and nearly a third rely on SNAP (food stamps) to put food on their own tables. This isn't a market failure or bad luck. It's the predictable result of a system designed to extract wealth from rural communities and concentrate it elsewhere.</p>
                        <p><strong>The Cost-Price Squeeze:</strong> Farmers are caught between rising costs they cannot control and falling prices they cannot negotiate. On one side: seed, fertilizer, equipment, and land costs that climb relentlessly. On the other: commodity prices set by global markets and a handful of buyers. The math is brutal, and intentional.</p>
                        <ul>
                            <li><strong>Seed prices</strong> have risen over 300% since the 1990s as consolidation reduced competition. Monsanto (now Bayer), Corteva, and Syngenta control over 60% of the global seed market. Patented seeds must be purchased new each year; saving seed is now illegal for most commercial varieties.</li>
                            <li><strong>Equipment costs</strong> have exploded. A new combine harvester costs $500,000-$800,000. John Deere alone controls 53% of the large equipment market, and their proprietary software means farmers can't repair their own machinery without dealer approval.</li>
                            <li><strong>Land costs</strong> have risen 50% since 2020 in prime agricultural areas, driven by institutional investors and commodity speculation. Farmers compete for land against pension funds and private equity.</li>
                            <li><strong>Input costs</strong> for fertilizer tripled during the 2022 supply disruption. When you depend on purchased fertility, you're hostage to global commodity markets.</li>
                        </ul>
                        <p><strong>The Treadmill:</strong> When margins shrink, the industrial logic says: expand. Buy more land. Plant more acres. Spread fixed costs across more bushels. But every farmer faces the same logic, so everyone expands, production increases, prices fall further, and the cycle repeats. This is the "agricultural treadmill," a dynamic where farmers must run faster just to stay in place. Those who can't keep up lose their farms. Those who do keep up take on more debt for more land to grow more crops they'll sell at a loss. The winners are the companies selling inputs and buying commodities, capturing value at both ends while farmers bear all the risk.</p>
                        <p><strong>Contract Agriculture—Farming Without Ownership:</strong> In poultry and hog production, most farmers don't own their animals at all. Companies like Tyson and Smithfield contract with farmers who provide land, buildings, and labor while the company owns the birds, controls the feed, and sets the terms. A chicken farmer might invest $1 million in facilities but have no bargaining power over prices. If the company doesn't like your performance metrics, they simply stop sending birds. You keep the debt; they find another farmer.</p>
                        <p><strong>The Human Toll:</strong> The financial pressure translates directly into human suffering. Farmers die by suicide at rates 3.5 times higher than the general population, the highest of any occupation. The Farm Aid hotline reports calls increasing every year. Rural America faces a mental health crisis with too few providers: over 60% of rural counties have no psychiatrist. Farm families don't just lose money; they lose farms that have been in families for generations, communities their grandparents built, and identities tied to the land.</p>
                        <p><strong>The Multiplier Effect—Lost:</strong> When a farmer spends money locally (at the feed store, the equipment dealer, the diner), that money circulates. Economists call this the "local multiplier effect." A dollar spent locally generates $1.50-$3.00 in local economic activity as it passes through hands.</p>
                        <p>But when farm spending flows to multinational corporations (Bayer for seed, Cargill for sales, John Deere for equipment), that money leaves and never returns. Rural communities don't just lose farms; they lose grocery stores, schools, hospitals, and young people. Since 1950, over 4 million farms have disappeared. The towns that served them followed.</p>
                        <p><strong>The Hidden Costs We All Share:</strong> The economic extraction from farming doesn't stay isolated; it compounds with the health and environmental costs discussed elsewhere. Taxpayers subsidize cheap commodities, then pay again when those commodities become products that cause disease, then pay again to remediate the environmental damage from producing them. We pay multiple times—first to fund the subsidies, then to cover the consequences. The true cost of "cheap food" isn't on the price tag; it's in our taxes, our healthcare bills, and our environment.</p>
                        <p><strong>The Disappearing Farmland:</strong> When farmers can't turn a profit, they sell. And increasingly, they sell to developers. Once productive farmland is converted to subdivisions, strip malls, or warehouse complexes, it's lost to agriculture permanently. Unlike other economic losses that might recover with better market conditions, this conversion is irreversible. Concrete doesn't become corn.</p>
                        <p>The loss extends beyond acreage. When a farm sells, generations of place-based knowledge disappear with it: knowledge of what grows well in which fields, how water moves across the land in wet years, which soil patches need lime and which don't. This isn't information you can find in a textbook or learn in an agricultural program. It's knowledge accumulated over decades of observation, passed from parent to child, refined through seasons of success and failure. When the last family member leaves the farm, that knowledge leaves too.</p>
                        <p><strong>New Farmers Face Impossible Math:</strong> The barriers to entering farming have become nearly insurmountable. Land costs, up 50% since 2020, make purchasing acreage impossible for most aspiring farmers. But they're not just competing against other farmers for land; they're competing against institutional investors and developers who can pay cash and don't need the land to turn a profit. Even farmers who manage to find affordable land face the same cost-price squeeze that's bankrupting established operations, but without the land equity built up over generations or the scale needed to absorb losses.</p>
                        <p>The demographics tell the story: the average American farmer is 58 years old, and that number rises every year. For every farmer under 35, there are six over 65. The generation that should be taking over farms is instead taking jobs in cities, because the math simply doesn't work. Entry is nearly impossible; profitability after entry is even harder. The result is a slow-motion crisis: farmland steadily converting to development while the knowledge and people needed to farm what remains age out of the workforce with no one to replace them.</p>
                        <p class="source">Sources: USDA Economic Research Service, Census of Agriculture, Farm Aid, CDC occupational mortality data, American Farm Bureau Federation, American Farmland Trust</p>
                    `
                }
            },
            {
                id: 'environment',
                label: 'Environmental',
                sublabel: 'Degradation',
                stat: 'Creating conditions\nfor collapse',
                category: 'externality-env',
                ring: 3,
                angle: 180,
                size: 35,
                connections: ['production'],
                detail: {
                    title: 'Environmental Degradation',
                    content: `
                        <p>Industrial agriculture treats soil, water, and biodiversity as resources to extract rather than systems to maintain. The same monoculture that enables cheap commodity production strips the land of its resilience. Fields planted in corn year after year lose organic matter; fertilizers and pesticides run off into waterways; simplified landscapes eliminate the insects and wildlife that healthy farms depend on. These aren't separate problems; they're interconnected symptoms of a system optimizing for short-term yield at the cost of long-term viability. <strong>Many agricultural regions have less than 100 years of productive topsoil remaining.</strong></p>
                        <p><strong>Soil Loss:</strong> America has lost 57.6 billion tons of topsoil since European settlement. Each inch takes approximately 500 years to form naturally, yet current erosion rates run 10 to 100 times faster than formation. We are spending down an inheritance that cannot be replenished on any human timescale.</p>
                        <p><strong>Water Contamination:</strong> The nitrogen and phosphorus that boost crop yields don't stay on fields. They flow downstream, creating the Gulf of Mexico "dead zone," over 6,000 square miles where agricultural runoff has depleted oxygen and eliminated marine life. Meanwhile, the Ogallala Aquifer, which irrigates much of the Great Plains, is being pumped far faster than it recharges. Agricultural runoff is now the leading source of water quality impairment in American rivers and lakes.</p>
                        <p><strong>Biodiversity Collapse:</strong> Monoculture doesn't just simplify what's planted; it simplifies entire ecosystems. Insect biomass has declined over 40% in recent decades. Pollinator populations are in crisis, threatening the very agriculture that depends on them. The system is eliminating the biological infrastructure it needs to survive.</p>
                        <p class="source">Sources: USDA Natural Resources Conservation Service, EPA, Nature journal research</p>
                    `
                }
            },
            {
                id: 'fragility',
                label: 'System',
                sublabel: 'Fragility',
                stat: 'A chain with hundreds\nof weak links',
                category: 'fragility',
                ring: 4,
                angle: 180,
                size: 35,
                connections: ['health', 'environment', 'economic'],
                detail: {
                    title: 'The Fragile Machine',
                    content: `
                        <p>The American food system's fragility isn't an accident—it's what "efficiency" looks like. Every buffer, every backup, every redundancy costs money. Consolidation eliminates these costs by eliminating the buffers themselves. The system that emerges operates at maximum throughput with minimum margin for error. This works perfectly until something goes wrong. Then we discover that resilience was never waste—it was insurance we chose not to pay for.</p>
                        <p><strong>Supply Chain Fragility—What COVID Revealed:</strong> In April 2020, meatpacking plants became COVID hotspots. When Smithfield closed its Sioux Falls pork plant, the largest in the nation, processing 5% of U.S. pork, ripples spread instantly. Farmers had nowhere to send hogs. Some were euthanized. Simultaneously, grocery stores faced empty meat cases while farmers destroyed animals they couldn't sell. The system had no slack.</p>
                        <ul>
                            <li><strong>Grocery stores</strong> maintain roughly 3 days of inventory, enough for normal operations, catastrophic if supply is interrupted.</li>
                            <li><strong>Just-in-time delivery</strong> means food travels from farm to store to spoilage window with no buffer. There is no strategic food reserve the way there's a strategic petroleum reserve.</li>
                            <li><strong>Concentration creates chokepoints:</strong> Four companies process 85% of beef. One plant closure doesn't just affect that plant; it affects the entire national supply.</li>
                        </ul>
                        <p>In 2022, the infant formula crisis demonstrated the same fragility. A single Abbott facility in Michigan produced approximately 40% of U.S. formula. When contamination forced closure, there was no backup. Parents scrambled; shelves stayed empty for months. This wasn't a supply problem; it was a concentration problem.</p>
                        <p><strong>Genetic Vulnerability—Monoculture's Hidden Risk:</strong> When you plant 90 million acres of corn, seed companies sell what scales. Farmers plant what's certified and available. The result is genetic uniformity that would terrify any epidemiologist.</p>
                        <p>Just six corn varieties account for 43% of American corn production. These varieties share common genetic backgrounds, bred for yield in chemical-intensive systems. They're genetically similar in ways that make them vulnerable to the same diseases.</p>
                        <p>We've seen this before. In 1970, Southern Corn Leaf Blight swept through the Corn Belt. The fungal disease exploited a single genetic trait (T-cytoplasm) that seed companies had bred into most commercial varieties because it simplified hybrid production. That one decision made nearly all American corn vulnerable to the same pathogen. The blight destroyed 15% of the U.S. corn crop in a single season.</p>
                        <p>Today's genetic uniformity, combined with climate change creating new disease pressures, sets similar conditions. The question isn't whether a blight will strike; it's when, and whether we'll have diverse genetics to fall back on.</p>
                        <p><strong>Fertilizer Dependency—The Geopolitical Weak Point:</strong> Industrial agriculture's productivity depends on synthetic nitrogen fertilizer, and synthetic nitrogen depends on natural gas. The Haber-Bosch process that creates ammonia fertilizer consumes 1-2% of global energy production. Without it, experts estimate global food production would fall by 40-50%.</p>
                        <ul>
                            <li><strong>Natural gas</strong> prices directly affect fertilizer costs. When Russia invaded Ukraine, natural gas prices spiked, and fertilizer prices tripled. American farmers suddenly paid $900/ton for urea that cost $300/ton a year earlier.</li>
                            <li><strong>Potash</strong> (potassium fertilizer) comes from limited sources: Canada, Russia, and Belarus produce most of the world supply. Sanctions on Belarus disrupted supply; a single port closure could eliminate access.</li>
                            <li><strong>Phosphate</strong> comes from Morocco (which controls 70% of reserves), China, and Florida. Phosphate is non-renewable; there is no synthetic alternative. Florida's phosphate mines are projected to be depleted within decades.</li>
                        </ul>
                        <p>The system has traded self-sufficiency for dependency on global supply chains that can break for reasons having nothing to do with agriculture.</p>
                        <p><strong>Labor Fragility—The Invisible Workforce:</strong> American agriculture depends on labor it doesn't want to acknowledge. Meatpacking plants employ largely immigrant workforces, often refugees and undocumented workers willing to accept dangerous conditions for low wages. Turnover exceeds 100% annually at many plants. During COVID, workers had no ability to stay home; the virus spread through facilities designed for throughput, not safety.</p>
                        <p>Farm labor faces similar fragility. Most fruit and vegetable harvesting is done by hand, primarily by migrant workers. Immigration enforcement actions have left crops rotting in fields. The H-2A visa program can't scale fast enough; labor shortages cost billions in unharvested produce. The system depends on workers it treats as disposable.</p>
                        <p><strong>The Pattern:</strong> Each of these vulnerabilities follows the same pattern: efficiency eliminated a buffer that existed for good reason. Diverse processing capacity became concentrated. Diverse genetics became uniform. Domestic input production became global sourcing. Stable workforces became contingent labor. Every elimination of "waste" removed a shock absorber. The system runs smoothly until it doesn't—and when it fails, it fails everywhere at once.</p>
                        <p class="source">Sources: USDA, FDA, Census Bureau, Supply chain research, Congressional Research Service, Fertilizer industry data</p>
                    `
                }
            },
            {
                id: 'collapse',
                label: 'Collapse',
                sublabel: 'Trajectory',
                stat: 'Total food system failure',
                category: 'collapse',
                ring: 5,
                angle: 180,
                size: 35,
                connections: ['fragility'],
                detail: {
                    title: 'Where This Leads',
                    content: `
                        <p>This isn't dystopian speculation; it's observation. Collapse isn't a future event; it's a process already underway in parts of the American food system. The San Joaquin Valley is sinking as aquifers empty. Rural communities that fed the nation for generations stand hollow. Topsoil that took millennia to form washes to the Gulf each spring. The question isn't whether the current system can continue forever; it obviously cannot. The question is whether we change course before the accumulated damage becomes irreversible.</p>
                        <p><strong>Understanding the Limits to Growth Model:</strong> In 1972, a team of MIT researchers published "The Limits to Growth," a computer model simulating how population, industrial output, food production, resource consumption, and pollution interact over time. The model was revolutionary because it showed how these factors don't operate independently; they form feedback loops that can amplify small changes into system-wide shifts.</p>
                        <p>The model ran multiple scenarios. The "business as usual" scenario, assuming no major policy changes, projected that growth would continue until resource constraints and pollution accumulation triggered a peak and decline. The timing: early to mid-21st century. The pattern: not a single dramatic crash but a grinding decline as extraction outpaced regeneration.</p>
                        <p>Critics dismissed the study for decades. Then, in 2020, Gaya Herrington (a sustainability researcher then at KPMG) compared 50 years of real-world data against the original projections. Her finding: current trends track closely with two scenarios: "BAU2" (business as usual) and "CT" (comprehensive technology). Both project significant decline in human welfare within decades. We are, so far, on schedule.</p>
                        <p><strong>Collapse Is Already Happening:</strong> You don't have to trust models. Look at the ground.</p>
                        <ul>
                            <li><strong>The San Joaquin Valley</strong> in California, one of the world's most productive agricultural regions, is physically sinking. Farmers have pumped groundwater faster than rainfall replenishes it for decades. The land has dropped over 28 feet in some areas. The aquifer is collapsing; the storage capacity is gone. When the water runs out, so does the agriculture. Some projections give the valley 20-50 productive years at current extraction rates.</li>
                            <li><strong>The Ogallala Aquifer</strong> underlies eight Great Plains states and irrigates $20 billion in agriculture. In Kansas and Texas, it's being depleted 10 times faster than it recharges. Some areas have already exhausted accessible water. Towns are planning for agriculture's end within a generation.</li>
                            <li><strong>Florida's phosphate mines</strong> supply most domestic phosphorus fertilizer. Phosphorus is non-renewable; there's no synthetic substitute. Current reserves may last 50-100 years. Then what? Morocco controls 70% of global reserves. American agriculture would depend on imports from a single foreign source for a nutrient essential to all food production.</li>
                            <li><strong>Rural community collapse</strong> is already complete in many counties. Drive through the Great Plains and see towns that were thriving 50 years ago: closed schools, empty main streets, aging populations. The young leave because there's nothing to stay for. Farm consolidation eliminated the economic base; the communities followed. This is what agricultural decline looks like at human scale.</li>
                        </ul>
                        <p><strong>The Dust Bowl Parallel:</strong> In the 1930s, agricultural practices and drought combined to create the Dust Bowl, the worst ecological disaster in American history. Millions fled. It took decades and massive federal intervention to restore the land. The lesson seemed clear: exploit the soil without regard for sustainability, and it will blow away.</p>
                        <p>But the lesson didn't stick. Today's industrial agriculture is the Dust Bowl in slow motion, depletion without dramatic dust storms, but depletion nonetheless. The Dust Bowl was visible; today's soil loss is measured in statistics that don't make headlines. That doesn't make it less real.</p>
                        <p><strong>Cascading Failures:</strong> The danger isn't any single problem; it's how they interact. Drought stresses crops. Stressed crops need more inputs. Input costs rise with energy prices. Farmers take on debt to cover costs. Debt forces expansion. Expansion depletes more groundwater. Lower water tables require deeper wells. Deeper wells require more energy. Energy costs rise. Margins disappear. Farms fail. Consolidation accelerates. Remaining farms get larger and more vulnerable. One bad year triggers the next crisis.</p>
                        <p>This is what systems researchers call "cascading failure," problems in one area triggering problems in connected areas. A food system with no buffers has no way to absorb shocks. Each disruption weakens the system's capacity to handle the next one.</p>
                        <p><strong>The Narrowing Window:</strong> None of this is inevitable. The Limits to Growth model included scenarios where policy changes avoided decline, but those scenarios required action before overshoot, not after. Each year of continued extraction narrows the window for course correction. Depleted aquifers don't refill on human timescales. Eroded topsoil doesn't regenerate in a generation. Collapsed rural communities don't rebuild overnight.</p>
                        <p>The trajectory is not destiny, but changing trajectory requires acknowledging where the current path leads. The system cannot be reformed at the margins. It requires transformation.</p>
                        <p><strong>The Alternative Exists:</strong> The rest of this project explores what that transformation looks like. There are farmers practicing regenerative agriculture now. There are communities building local food systems. There are policies that could redirect incentives toward sustainability. The alternative isn't theoretical; it's already being demonstrated at scale around the world.</p>
                        <p>The current system is not a force of nature. It was built by policy choices. Different choices can build a different system, one designed for resilience, regeneration, and long-term viability rather than extraction, concentration, and collapse.</p>
                        <p class="source">Sources: "Limits to Growth" (Meadows et al., 1972), "Update to Limits to Growth" (Herrington, 2020), USGS groundwater monitoring, California Department of Water Resources, Congressional Research Service, USDA Census of Agriculture</p>
                    `
                }
            }
        ],
        connections: [
            { from: 'farm-bill', to: 'beneficiaries' },
            { from: 'beneficiaries', to: 'production' },
            { from: 'health', to: 'fragility' },
            { from: 'environment', to: 'fragility' },
            { from: 'economic', to: 'fragility' },
            { from: 'fragility', to: 'collapse' }
        ]
    },
    alternative: {
        nodes: [
            {
                id: 'farm-bill',
                label: 'Reformed',
                sublabel: 'Farm Policy',
                stat: 'Tax payers see returns',
                category: 'policy',
                ring: 0,
                angle: 180,
                size: 50,
                detail: {
                    title: 'Reformed Farm Policy',
                    content: `
                        <p>The current food system was built by policy choices. Different choices can build a different system. The Farm Bill already contains programs that work. They're just underfunded and overshadowed by commodity subsidies. Reform doesn't require inventing something new. It requires <strong>redirecting the $20 billion in annual agricultural spending</strong> toward outcomes that benefit farmers, communities, and ecosystems rather than corporate supply chains.</p>
                        <p><strong>Outcome-Based Subsidies:</strong> The shift is conceptually simple: instead of paying farmers based on how many bushels they produce, pay them for the outcomes society actually wants. Soil health improvements that sequester carbon. Water quality gains from reduced runoff. Nutritious food produced, not just calories. Pollinator habitat and genetic diversity preserved. These outcomes are measurable, and programs already exist to reward them.</p>
                        <p><strong>Programs Ready to Scale:</strong> The infrastructure for reform already exists within current policy. <strong>Value-Added Producer Grants</strong> help farmers capture more value from their production. <strong>Farm to School</strong> connects local producers with institutional buyers who need consistent supply. The <strong>Conservation Stewardship Program</strong> pays for environmental outcomes. <strong>Beginning Farmer Programs</strong> address the aging farmer crisis by helping new entrants access land and capital. Each of these works. Each is underfunded relative to commodity programs.</p>
                        <p><strong>Building New Infrastructure:</strong> The current system's infrastructure serves consolidation: mega-processing plants, commodity logistics, export terminals. Alternative infrastructure serves distribution and regional resilience. This means regional meat processing facilities so farmers aren't dependent on distant corporate plants. Food hubs for aggregation and distribution. Cold storage and logistics designed for diverse crops, not just corn and soybeans. Direct-to-consumer platforms that let producers capture retail margins.</p>
                        <p><strong>Honoring Indigenous Knowledge:</strong> Policy can also support the revival of Indigenous food sovereignty—honoring Traditional Ecological Knowledge that sustained this land for millennia before industrial agriculture.</p>
                        <p class="source">Focus: Outcomes over volume</p>
                    `
                }
            },
            {
                id: 'beneficiaries',
                label: 'Farmers &',
                sublabel: 'Communities',
                stat: 'Wealth stays local',
                category: 'beneficiary',
                ring: 1,
                angle: 180,
                size: 40,
                connections: ['farm-bill'],
                detail: {
                    title: 'Farmers & Communities',
                    content: `
                        <p>In the current system, farm subsidies are paid to farmers but the economic benefits concentrate elsewhere. In a reformed system, <strong>the benefits of public investment flow to food producers and the communities where they live</strong>, not to distant corporate shareholders. This isn't just fairer. It's more economically productive.</p>
                        <p><strong>Farmer Economics Transformed:</strong> When farmers capture value rather than ceding it to processors, the math changes completely. Diversified operations spread risk across multiple crops and markets rather than betting everything on commodity prices. Direct-to-consumer channels increase margins by <strong>200-400%</strong> compared to selling through commodity markets. Regenerative practices reduce purchased input costs over time as soil health improves. Premium markets for sustainably-produced food reward farmers who invest in quality over quantity.</p>
                        <p><strong>The Democratic Feedback Loop:</strong> The current system has momentum—infrastructure, supply chains, and policy all reinforce existing patterns. A reformed system creates different momentum: when farmers and communities thrive from policy, they become advocates for policies that help more farmers and communities thrive. Political power shifts to the people who actually grow food.</p>
                        <p><strong>Community Revival:</strong> Local food systems create more jobs per dollar than commodity agriculture because the work stays local rather than concentrating in distant processing facilities. Money spent on local food circulates through local economies, generating $1.50-$3.00 in economic activity for every dollar spent. Rural communities maintain their populations, tax bases, schools, and services. Agricultural knowledge and culture are preserved and transmitted to new generations rather than disappearing when the last farmer sells out.</p>
                        <p class="source">Beneficiaries: The people who grow food</p>
                    `
                }
            },
            {
                id: 'production',
                label: 'Regenerative',
                sublabel: 'Diversified',
                stat: 'Up to 90% local potential',
                category: 'production',
                ring: 2,
                angle: 180,
                size: 40,
                connections: ['beneficiaries'],
                detail: {
                    title: 'Regenerative Production',
                    content: `
                        <p>This is not a return to pre-industrial agriculture. It's an advance beyond it. Regenerative systems produce food while building rather than depleting natural capital. The soil gets richer each year rather than washing away. Water systems improve rather than degrading. And the research suggests the potential is remarkable: <strong>up to 90% of Americans could be fed by food produced within 100 miles</strong>—if cropland were redirected from feed and fuel back to food for people. This doesn't require abandoning technology. It requires redirecting it.</p>
                        <p><strong>Practices That Build Rather Than Extract:</strong> The core practices are well understood. <strong>Cover cropping</strong> plants vegetation between cash crops that prevents erosion, fixes nitrogen from the air, and builds organic matter in the soil. <strong>Crop rotation</strong> breaks pest and disease cycles while balancing soil nutrients naturally. <strong>Integrated livestock</strong> at appropriate scale cycles nutrients and manages vegetation the way grazing animals have for millennia. <strong>Reduced or no-till</strong> farming minimizes soil disturbance to preserve structure and the biological communities that drive fertility. <strong>Agroforestry</strong> integrates trees with crops and livestock, creating multiple benefits: shade, windbreaks, habitat, and additional harvests.</p>
                        <p><strong>Indigenous Roots of Regenerative Practice:</strong> Many practices now called "regenerative"—polyculture, controlled burns, soil-building—originate in Indigenous food systems. The Three Sisters (corn, beans, squash) yields 20% more than monoculture while building soil. Indigenous-led organizations like the Native American Food Sovereignty Alliance continue advancing these approaches today.</p>
                        <p><strong>Technology Serving Regeneration:</strong> Regenerative agriculture embraces advanced technology when it serves regenerative goals. <strong>Controlled environment agriculture</strong> enables year-round production of high-value crops with minimal water and land. <strong>Aquaponics</strong> integrates fish and plant systems, producing 10x the protein per acre compared to conventional methods. <strong>Precision agriculture</strong> uses sensors and data to reduce waste and optimize inputs, applying exactly what's needed where it's needed. <strong>Improved genetics</strong> bred for nutrition, resilience, and regional adaptation rather than just maximum yield.</p>
                        <p><strong>The Protein Question:</strong> Beef production at current industrial scales is incompatible with regenerative systems. However, the alternative isn't eliminating animal protein. Chicken, pork, and fish scale well within regenerative frameworks. Pasture-raised beef at reduced volumes can play an important role, with grazing animals building soil and managing landscapes. The transition is about right-sizing animal agriculture, not eliminating it.</p>
                        <p class="source">Sources: Zumkehr & Campbell, <em>Frontiers in Ecology and the Environment</em>, 2015; regional food systems research</p>
                    `
                }
            },
            {
                id: 'health',
                label: 'Public Health',
                sublabel: 'Restored',
                stat: 'Food that nourishes',
                category: 'externality-health',
                ring: 3,
                angle: 225,
                size: 35,
                connections: ['production'],
                detail: {
                    title: 'Public Health Restored',
                    content: `
                        <p>A food system designed for nutrition rather than commodity throughput produces fundamentally different health outcomes. The current system spends over <strong>$200 billion annually</strong> treating diet-related disease. A reformed system invests in prevention instead of treatment, making nutritious food the accessible default rather than the expensive exception.</p>
                        <p><strong>True Food Security:</strong> Food security means more than calories available. It means nutrition accessible. The current system produces abundant cheap calories alongside widespread nutritional deficiency, 44 million Americans facing food insecurity despite record production. A reformed system addresses both problems simultaneously by making nutrient-dense food available everywhere, not just in affluent communities.</p>
                        <p><strong>Nutrition Becomes Accessible:</strong> Fresh, nutrient-dense food becomes available in all communities, ending food apartheid. School meal programs source local whole foods rather than processed commodities, giving children their first experience of real food. Healthcare systems integrate "food as medicine" interventions, prescribing produce alongside pharmaceuticals. SNAP benefits are structured to incentivize nutritious purchases, making healthy choices the economical ones.</p>
                        <p><strong>Disease Prevention at Scale:</strong> When the default food environment supports health rather than undermining it, the disease burden shifts dramatically. Rates of obesity, diabetes, and heart disease decline as the foods driving them become less ubiquitous. The chronic disease burden on the healthcare system eases. <strong>Potential healthcare cost reduction exceeds $100 billion annually</strong> as prevention replaces treatment. Quality of life improves, and productive years increase.</p>
                        <p><strong>The Hunger Paradox Solved:</strong> The same transformation that reduces chronic disease also addresses food insecurity. This isn't a coincidence. Both problems stem from the same system that prioritizes cheap calories over nutrition. Fix the system, and both problems improve together.</p>
                        <p><strong>Real-World Example:</strong> Pennsylvania's Geisinger Fresh Food Farmacy prescribes healthy food to diabetic patients. Results: HbA1c levels dropped 2.1 percentage points (better than adding medication), and healthcare costs fell 80%—from $240,000 to $48,000 per patient annually.</p>
                        <p class="source">Sources: Harvard Business Review, Geisinger Health</p>
                    `
                }
            },
            {
                id: 'environment',
                label: 'Environmental',
                sublabel: 'Restoration',
                stat: 'Healing the land',
                category: 'externality-env',
                ring: 3,
                angle: 180,
                size: 35,
                connections: ['production'],
                detail: {
                    title: 'Environmental Restoration',
                    content: `
                        <p>Regenerative agriculture doesn't merely reduce environmental harm. It actively rebuilds the natural systems that industrial agriculture has degraded. The 57.6 billion tons of topsoil America has lost since European settlement took millennia to form. Regenerative practices can rebuild it within decades, while producing food at the same time.</p>
                        <p><strong>Soil Regeneration:</strong> Cover crops and reduced tillage rebuild topsoil year after year. Organic matter increases from depleted levels (often 1-2%) toward healthy levels of 5% or higher. The impact is transformative: <strong>each 1% increase in organic matter allows soil to hold 20,000+ additional gallons of water per acre</strong>. Soil biology recovers as fungi, bacteria, and organisms that drive natural fertility return. Agriculture becomes a carbon sink rather than a carbon source, drawing carbon from the atmosphere and storing it in the ground.</p>
                        <p><strong>Water Systems Heal:</strong> As soil structure improves, water behavior changes. Rainfall infiltrates rather than running off, carrying fertilizer and topsoil with it. The Gulf of Mexico dead zone begins to recover as nitrogen inputs decrease. Aquifers recharge as water soaks into the ground rather than rushing to streams. Farms need less irrigation as soil water-holding capacity increases. The same rain does more work.</p>
                        <p><strong>Biodiversity Returns:</strong> Diverse plantings and reduced chemical use restore habitat. Pollinator populations that had collapsed begin to recover. Genetic diversity is preserved through varied crop and livestock genetics rather than the handful of varieties that dominate industrial agriculture. Ecosystem services return: natural pest control, pollination, nutrient cycling. The farm becomes part of an ecosystem rather than a replacement for one.</p>
                        <p><strong>Climate Impact:</strong> Soil is the largest terrestrial carbon sink on Earth. Regenerative practices can sequester significant carbon while producing food, turning agriculture from a major climate problem into part of the climate solution. The same practices that improve soil health, retain water, and support biodiversity also draw down atmospheric carbon.</p>
                        <p><strong>Real-World Example:</strong> At Brown's Ranch in North Dakota, regenerative practices transformed degraded land. In 20 years: soil organic matter rose from 1.9% to over 6%, water infiltration improved from 0.5 to 30+ inches per hour, and the farm grew several inches of new topsoil—all without synthetic fertilizer.</p>
                        <p class="source">Sources: USDA NRCS, CSU Chico</p>
                    `
                }
            },
            {
                id: 'economic',
                label: 'Economic',
                sublabel: 'Prosperity',
                stat: 'Rebuilding farming\ncommunities',
                category: 'externality-econ',
                ring: 3,
                angle: 135,
                size: 35,
                connections: ['production'],
                detail: {
                    title: 'Economic Prosperity',
                    content: `
                        <p>When true costs are accounted for, regenerative systems are more economically viable than extractive ones. "Cheap food" is only cheap when someone else pays the costs. Industrial food externalizes its true costs onto healthcare systems, taxpayers funding environmental remediation, and communities bearing rural decline. When these costs are included, regenerative food is actually cheaper for society.</p>
                        <p><strong>Farmer Prosperity:</strong> The economics of farming transform when the extractive treadmill stops. Input costs decline as soil health reduces the need for purchased fertility and pesticides. Differentiated products (organic, local, pasture-raised) command higher margins than commodities. Diversified operations create multiple revenue streams rather than betting everything on a single crop. Diverse markets provide resilience to price volatility. Debt burdens ease as farmers stop borrowing to buy inputs. The median farm household no longer earns negative income from farming.</p>
                        <p><strong>Rural Economic Revival:</strong> Regenerative systems require more labor than industrial monoculture, creating rural employment rather than eliminating it. Money spent on local food circulates through local economies rather than flowing to distant corporations. The local multiplier effect kicks in: each dollar generates $1.50-$3.00 in community economic activity. Rural communities maintain their populations, tax bases, schools, and services. Farmer mental health improves as financial pressure decreases. The suicide rate among farmers, currently the highest of any occupation, begins to fall.</p>
                        <p><strong>Savings Compound:</strong> The economic benefits extend beyond farms. Healthcare cost reductions from preventing diet-related disease free resources for other priorities. Environmental remediation costs decrease as agricultural damage slows and reverses. Water treatment costs decline as agricultural pollution decreases. These savings can be reinvested in supporting more farmers through the transition, creating a virtuous cycle of investment and return.</p>
                        <p><strong>Real-World Example:</strong> Vermont's Farm to Plate initiative created 6,560 net new food system jobs over a decade. Local food purchases grew from 5% to nearly 14% of food spending, and economic output increased 48%—from $7.5 billion to $11.3 billion statewide.</p>
                        <p class="source">Sources: Vermont Sustainable Jobs Fund</p>
                    `
                }
            },
            {
                id: 'fragility',
                label: 'System',
                sublabel: 'Resilience',
                stat: 'Antifragile by design',
                category: 'fragility',
                ring: 4,
                angle: 180,
                size: 35,
                connections: ['health', 'environment', 'economic'],
                detail: {
                    title: 'System Resilience',
                    content: `
                        <p>Where the current system is fragile, a regenerative system is resilient. The current system optimized for efficiency by eliminating every buffer, backup, and redundancy. When COVID hit, a single meatpacking plant closure affected 5% of national pork supply. A single formula factory closure left shelves empty for months. That fragility is a design choice. <strong>Diversity, distribution, and redundancy</strong> can replace concentration, optimization, and single points of failure.</p>
                        <p><strong>Distributed Networks:</strong> Regional production reduces transportation vulnerability. Multiple smaller processors replace mega-facilities, so one closure doesn't cascade through the entire supply. Local and regional supply chains provide redundancy when national logistics fail. Communities can feed themselves if long-distance supply chains break down. The up to 90% local production potential means this isn't wishful thinking. It's achievable.</p>
                        <p><strong>Reduced Dependencies:</strong> The current system depends on global supply chains for fertilizer, fuel, and other critical inputs. A resilient system reduces these dependencies. Lower fossil fuel requirements through reduced synthetic inputs. On-farm fertility cycling reduces fertilizer imports. Local inputs where possible: seed saving, compost, biological pest control. Genetic diversity provides disease resilience so a single blight can't wipe out the entire crop. The system becomes less hostage to geopolitics and global commodity markets.</p>
                        <p><strong>Redundancy by Design:</strong> The current system treats redundancy as inefficiency to eliminate. A resilient system treats redundancy as insurance against disruption. Multiple supply sources for critical needs mean one failure doesn't create catastrophe. Inventory buffers at key points provide time to respond when problems emerge. Diverse production systems don't all fail simultaneously the way genetically identical monocultures do. Knowledge distributed across many farmers rather than concentrated in corporate systems means expertise survives even when individual operations don't.</p>
                        <p><strong>Antifragile Properties:</strong> Some regenerative systems actually improve under stress. Diverse ecosystems adapt to changing conditions. Diverse farms adapt to changing markets. Diverse genetics adapt to changing pathogens. The system doesn't just survive disruption. It learns from it.</p>
                        <p><strong>Lessons From Indigenous Systems:</strong> Indigenous food systems, developed over thousands of years, demonstrate exactly this kind of resilience—diverse, distributed, adapted to local conditions, and designed for the long term.</p>
                        <p class="source">Resilience through diversity</p>
                    `
                }
            },
            {
                id: 'collapse',
                label: 'Long-term',
                sublabel: 'Viability',
                stat: 'Collapse averted',
                category: 'collapse',
                ring: 5,
                angle: 180,
                size: 35,
                connections: ['fragility'],
                detail: {
                    title: 'Long-term Viability',
                    content: `
                        <p>The alternative to collapse is not merely survival. It's a food system that <strong>improves over time rather than degrading</strong>. A system our grandchildren can inherit in better condition than we found it. The current trajectory leads toward depletion: aquifers emptying, topsoil washing away, rural communities hollowing out. The regenerative trajectory leads toward abundance: soil deepening, water systems healing, communities thriving.</p>
                        <p><strong>The Regenerative Trajectory:</strong> Where extractive systems deplete their foundations, regenerative systems build them. Soil improves rather than erodes. Water systems recover rather than degrade. Biodiversity increases rather than collapses. Communities strengthen rather than hollow out. Each generation inherits more than the last. This isn't idealism. It's what happens when you stop extracting faster than systems can regenerate.</p>
                        <p><strong>Feedback Loops Reversed:</strong> The current system's feedback loops accelerate decline: depleted soil requires more inputs, which cost more, which requires more production to cover costs, which depletes more soil. Regenerative feedback loops accelerate improvement instead. Healthier soil requires fewer inputs, which costs less, which allows more investment in soil health, which improves productivity, which generates more resources for further investment. The virtuous cycle replaces the vicious one.</p>
                        <p><strong>The Real Choice:</strong> This isn't a choice between "modern" and "backward." It's a choice between a system that extracts until it collapses and a system that can persist and improve indefinitely. The Limits to Growth models show where the current trajectory leads. The regenerative trajectory curves toward viability rather than decline. Both are possible. Only one has a future.</p>
                        <p><strong>What's Required:</strong> The transition is significant but achievable. It requires policy reform to redirect incentives from commodity volume to genuine outcomes. Infrastructure investment in distributed systems rather than concentrated ones. Knowledge development and transfer so farmers can learn regenerative practices. Time for soil and ecosystems to recover. Political will to overcome the resistance of incumbents who profit from the current system. None of this is easy. All of it is possible.</p>
                        <p><strong>Ancient Wisdom, Modern Application:</strong> This isn't a new idea. It's a return to principles Indigenous peoples practiced for millennia—and continue to advance through organizations like the Intertribal Agriculture Council and Indigenous Seedkeepers Network.</p>
                        <p>The alternative exists. Farmers are practicing it now. Communities are building it now. The question is whether we choose it before circumstances force it.</p>
                        <p class="source">Intergenerational food security</p>
                    `
                }
            }
        ],
        connections: [
            { from: 'farm-bill', to: 'beneficiaries' },
            { from: 'beneficiaries', to: 'production' },
            { from: 'health', to: 'fragility' },
            { from: 'environment', to: 'fragility' },
            { from: 'economic', to: 'fragility' },
            { from: 'fragility', to: 'collapse' }
        ]
    }
};
