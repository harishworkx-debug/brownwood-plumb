export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  lastModified: string;
  author: string;
  authorRole: string;
  readTime: string;
  serviceLink: string;
  serviceName: string;
  targetQuestion: string;
  content: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "water-heater-repair-vs-replacement",
    title: "Water Heater Repair vs. Replacement: Signs Homeowners Should Know",
    excerpt: "Facing water heater trouble? Learn how to evaluate tank age, repair costs, and critical failure symptoms so you make the safest, most cost-effective choice for your home.",
    category: "Water Heaters",
    date: "2025-01-10",
    lastModified: "2025-01-15",
    author: "Mike Webb",
    authorRole: "Texas Master Plumber (RMP #12345)",
    readTime: "5 min read",
    serviceLink: "/water-heaters-brownwood-tx",
    serviceName: "Water Heater Services",
    targetQuestion: "Should I spend money repairing my existing water heater, or is full replacement a smarter investment?",
    content: [
      {
        heading: "The 50% Rule and Equipment Age",
        paragraphs: [
          "When a water heater begins underperforming, homeowners often struggle with whether a quick repair is worth the expense. A proven industry guideline is the 50% rule: if the repair quote approaches 50% of the cost of a brand-new unit, and the tank is more than eight years old, replacement is virtually always the wiser financial move.",
          "Most residential storage tank water heaters are engineered for an operational lifespan of 8 to 12 years. If your unit is less than 6 years old, simple component fixes—such as replacing an electric heating element, thermostat, or pilot thermocouple—are straightforward and will usually restore years of reliable service."
        ]
      },
      {
        heading: "Critical Warning Signs That Demand Replacement",
        paragraphs: [
          "Some water heater symptoms can be repaired, but others indicate irreversible structural failure:",
        ],
        bullets: [
          "Water pooling around the base of the tank (indicates an inner steel tank breach that cannot be patched)",
          "Rust-tinted or brownish hot water accompanied by a metallic odor (signals internal tank corrosion)",
          "Loud popping, knocking, or rumbling noises during heating cycles (hardened limestone crust insulating the burners)",
          "Recurring pilot light failures or electrical shorts caused by moisture condensation",
          "A sacrificial anode rod that has completely eroded, leaving the tank lining vulnerable to corrosion"
        ]
      },
      {
        heading: "Energy Efficiency and Long-Term Savings",
        paragraphs: [
          "Modern water heaters adhere to significantly higher DOE efficiency standards than units built a decade ago. Upgrading an obsolete unit to a high-efficiency atmospheric tank or an on-demand tankless system can lower monthly water heating energy bills by 15% to 30%, quickly offsetting a portion of the installation cost.",
          "Before deciding, have a licensed plumber inspect the unit's pressure relief valve, thermal expansion tank, and electrical or gas supply lines to ensure safety."
        ]
      }
    ]
  },
  {
    slug: "what-to-do-when-drain-keeps-clogging",
    title: "What to Do When a Drain Keeps Clogging",
    excerpt: "Recurring sink, tub, or toilet clogs are symptoms of a deeper plumbing issue. Discover why chemical drain cleaners fail and how professional diagnostics permanently fix the problem.",
    category: "Drain Cleaning",
    date: "2025-01-05",
    lastModified: "2025-01-12",
    author: "Mike Webb",
    authorRole: "Texas Master Plumber (RMP #12345)",
    readTime: "4 min read",
    serviceLink: "/drain-and-sewer-brownwood-tx",
    serviceName: "Drain & Sewer Services",
    targetQuestion: "Why does my bathroom or kitchen drain keep backing up every few weeks despite using store-bought cleaners?",
    content: [
      {
        heading: "The Danger of Chemical Drain Cleaners",
        paragraphs: [
          "When a sink or shower drains slowly, reaching for a bottle of liquid drain cleaner is a common reaction. Unfortunately, caustic chemical cleaners rely on sulfuric acid or sodium hydroxide to dissolve organic matter. In doing so, they generate intense chemical heat that softens PVC joints, eats away cast iron pipe walls, and releases hazardous fumes.",
          "Worse, liquid chemicals rarely clear the full diameter of the pipe. They simply burn a small pinhole through the blockage, allowing water to trickle through temporarily before hair, grease, and soap scum quickly re-accumulate."
        ]
      },
      {
        heading: "Why Drains Experience Recurring Blockages",
        paragraphs: [
          "If the same fixture backs up repeatedly, the obstruction is rarely located in the P-trap directly under the sink. Common subterranean causes include:",
        ],
        bullets: [
          "Tree Root Intrusion: Thirsty root hair penetrates loose mortar joints in older clay or cast iron sewer laterals, catching solids and paper.",
          "Pipe Sags (Bellies): Ground movement creates low dips in drain lines where standing water slows velocity and causes sludge to collect.",
          "Mineral Scale Accumulation: Hard water minerals combine with kitchen fats, oils, and grease (FOG) to form rock-like constrictions inside lines.",
          "Poor Venting: A clogged plumbing vent stack creates negative air pressure (vacuum), causing slow drainage and gurgling toilets."
        ]
      },
      {
        heading: "The Professional Solution: Camera Scopes and Hydro-Jetting",
        paragraphs: [
          "To resolve chronic clogs permanently, a licensed plumber will insert a high-definition fiber-optic video camera through your cleanout to inspect the pipe interior in real time. Once the exact issue is pinpointed, high-pressure hydro-jetting (up to 3,500 PSI) scours the entire pipe wall clean, removing years of buildup without digging up your yard."
        ]
      }
    ]
  },
  {
    slug: "signs-of-hidden-water-leak",
    title: "Signs of a Hidden Water Leak in a Home",
    excerpt: "Undetected plumbing leaks can cause thousands of dollars in foundation movement and mold growth. Learn how to identify subtle leak warnings and perform a DIY meter test.",
    category: "Leak Detection",
    date: "2024-12-28",
    lastModified: "2025-01-08",
    author: "Mike Webb",
    authorRole: "Texas Master Plumber (RMP #12345)",
    readTime: "5 min read",
    serviceLink: "/piping-and-leaks-brownwood-tx",
    serviceName: "Leak Detection & Pipe Repair",
    targetQuestion: "How do I know if pressurized water is leaking under my concrete foundation slab or behind drywall?",
    content: [
      {
        heading: "How to Perform the 15-Minute Water Meter Test",
        paragraphs: [
          "Your municipal water meter is the single most accurate tool for detecting hidden leaks. Here is how to test your system without any specialized tools:",
          "1. Turn off every water fixture inside and outside your home (sinks, washing machine, ice maker, and lawn sprinklers).",
          "2. Locate your water meter box (typically near the street curb) and open the lid.",
          "3. Look closely at the low-flow indicator (often a small red or silver triangle, or a sweeping digital star). If all water is turned off and the dial is spinning—even slowly—pressurized water is escaping somewhere in your plumbing system."
        ]
      },
      {
        heading: "Subtle Warning Signs of Slab and Wall Leaks",
        paragraphs: [
          "Because water lines are embedded within concrete slabs or concealed behind insulated drywall, leaks rarely appear as sudden gushing geysers. Instead, watch for these gradual indicators:",
        ],
        bullets: [
          "An unexpected jump in your monthly municipal water utility bill with no change in family habits",
          "Warm or damp spots on carpet, hardwood, or tile flooring (often indicating a hot-water under-slab pipe leak)",
          "The faint sound of running or hissing water behind walls when fixtures are silent",
          "Musty odors, bubbling paint, or warped baseboards along interior walls",
          "Cracks developing along sheetrock corners or exterior foundation brickwork caused by shifting soil moisture"
        ]
      },
      {
        heading: "Non-Invasive Diagnostic Solutions",
        paragraphs: [
          "Modern leak detection technology eliminates the need for destructive wall demolition. Professional plumbers utilize ultrasonic acoustic sensors and thermal imaging cameras that listen to the frequency of escaping pressurized water to pinpoint the exact breach within inches.",
          "For slab leaks, an overhead attic PEX reroute is often the best long-term fix, cleanly bypassing the compromised pipe underneath the foundation without breaking floor tiles or structural concrete."
        ]
      }
    ]
  },
  {
    slug: "when-to-schedule-plumbing-inspection",
    title: "When to Schedule a Plumbing Inspection Before Buying a House",
    excerpt: "Standard real estate home inspections frequently miss underground sewer damage and high water pressure. Here is when and why to book a specialized plumbing inspection during your option period.",
    category: "Inspections",
    date: "2024-12-20",
    lastModified: "2025-01-04",
    author: "Mike Webb",
    authorRole: "Texas Master Plumber (RMP #12345)",
    readTime: "5 min read",
    serviceLink: "/plumbing-inspections-brownwood-tx",
    serviceName: "Plumbing Inspections",
    targetQuestion: "Why should a homebuyer hire a licensed plumber for an inspection when the general inspector already checked the house?",
    content: [
      {
        heading: "The Limits of a General Home Inspection",
        paragraphs: [
          "During a real estate purchase, a general home inspector checks hundreds of items across the roof, electrical panel, HVAC, and cosmetics. When evaluating plumbing, their scope is typically limited to verifying that faucets flow and toilets flush.",
          "General inspectors do not insert fiber-optic cameras into underground sewer laterals, test static line water pressure with calibrated gauges, or inspect the interior of water heater tanks. A hidden sewer line collapse or deteriorating galvanized supply piping can easily cost $7,000 to $15,000+ to remediate immediately after closing."
        ]
      },
      {
        heading: "When to Book the Inspection During the Option Period",
        paragraphs: [
          "In Texas, buyers typically negotiate a 7 to 10-day option period. It is critical to schedule your specialized plumbing inspection within the first 3 to 4 days of that window. This ensures you receive the detailed digital findings and itemized repair estimates in time to negotiate seller repair concessions, escrow credits, or price adjustments before the option expires."
        ]
      },
      {
        heading: "What a Comprehensive Plumbing Inspection Must Cover",
        paragraphs: [
          "A thorough licensed inspection should deliver verified findings across four major areas:",
        ],
        bullets: [
          "Static Line Pressure Test: Verifying incoming municipal water pressure is between 45 and 65 PSI (pressures above 80 PSI blow out appliance valves).",
          "HD Sewer Lateral Camera Scope: Inspecting from the exterior cleanout all the way to the city main to verify pipe slope, joint integrity, and absence of root intrusion.",
          "Water Heater Safety Audit: Checking temperature and pressure relief (T&P) valves, thermal expansion tanks, flue draft, and remaining service life.",
          "Supply Line Material Verification: Confirming the absence of recalled polybutylene piping or heavily corroded galvanized iron pipes."
        ]
      }
    ]
  },
  {
    slug: "tankless-vs-traditional-water-heaters",
    title: "Tankless vs. Traditional Water Heaters: Installation and Maintenance",
    excerpt: "Thinking of upgrading your water heater? Compare upfront costs, endless hot water capability, gas requirements, and maintenance routines for both systems.",
    category: "Water Heaters",
    date: "2024-12-15",
    lastModified: "2024-12-29",
    author: "Mike Webb",
    authorRole: "Texas Master Plumber (RMP #12345)",
    readTime: "6 min read",
    serviceLink: "/water-heaters-brownwood-tx",
    serviceName: "Water Heater Upgrades",
    targetQuestion: "Is an on-demand tankless water heater worth the higher upfront installation cost compared to a traditional storage tank?",
    content: [
      {
        heading: "How Both Systems Operate",
        paragraphs: [
          "Traditional tank water heaters keep 40 to 50 gallons of water continuously heated inside a steel reservoir 24 hours a day. While reliable and relatively inexpensive to replace, once that reservoir is emptied during peak morning use, household members must wait 30 to 45 minutes for the tank to recover.",
          "Tankless water heaters, in contrast, heat water on demand. When a hot water tap is opened, flow sensors activate high-output gas burners or electric heating elements, flash-heating water as it passes through a copper heat exchanger. Hot water flows continuously for as long as the tap remains on."
        ]
      },
      {
        heading: "Comparing the Pros and Cons",
        paragraphs: [
          "Understanding the direct trade-offs helps homeowners select the ideal configuration:",
        ],
        bullets: [
          "Lifespan: Tankless units routinely last 20+ years; traditional storage tanks average 8 to 12 years.",
          "Energy Efficiency: Tankless systems eliminate standby heat loss, reducing energy consumption by 20% to 30%.",
          "Space Savings: A compact tankless unit mounts on a wall, freeing up valuable closet or garage floor space.",
          "Installation Complexity: Tankless systems require properly sized gas supply lines (often 3/4-inch rather than 1/2-inch) and dedicated PVC/polypropylene direct venting.",
          "Upfront Investment: Tankless installations have a higher upfront cost, while traditional tanks offer lower initial equipment and installation expense."
        ]
      },
      {
        heading: "Essential Maintenance: Preventing Mineral Scale",
        paragraphs: [
          "In areas with hard water, dissolved calcium and magnesium will gradually coat a tankless unit's heat exchanger. To preserve peak efficiency and manufacturer warranties, tankless units should be flushed annually with a non-toxic descaling solution.",
          "Pairing a tankless system with a high-efficiency water softener protects the heat exchanger from scale accumulation and ensures decades of trouble-free performance."
        ]
      }
    ]
  },
  {
    slug: "what-to-know-hiring-gas-line-professional",
    title: "What Homeowners Should Know Before Hiring a Gas-Line Professional",
    excerpt: "Gas line repairs require specialized licensing and strict code compliance. Learn the legal qualifications, safety procedures, and pressure tests every technician must follow.",
    category: "Gas Line Safety",
    date: "2024-12-05",
    lastModified: "2024-12-18",
    author: "Mike Webb",
    authorRole: "Texas Master Plumber (RMP #12345)",
    readTime: "5 min read",
    serviceLink: "/gas-line-repair-brownwood-tx",
    serviceName: "Gas Line Repair & Inspection",
    targetQuestion: "Can any general handyman repair gas piping, or is a specialized licensed plumber legally required in Texas?",
    content: [
      {
        heading: "Texas Law and Licensing Standards",
        paragraphs: [
          "Natural gas and propane piping carry severe safety risks. Under Texas law, all residential gas piping work must be performed by or under the direct supervision of a Master Plumber licensed through the Texas State Board of Plumbing Examiners (TSBPE).",
          "Hiring an unlicensed handyman or trying DIY fixes on gas lines is not only illegal, but voids homeowner insurance policies and exposes families to catastrophic explosion or carbon monoxide hazards. Always ask for the technician's RMP (Responsible Master Plumber) license number before authorizing gas work."
        ]
      },
      {
        heading: "How Certified Pressure Drop Testing Works",
        paragraphs: [
          "Professional gas leak detection goes far beyond spraying soapy water on a pipe joint. When evaluating a gas system, a certified technician follows rigorous diagnostic steps:",
        ],
        bullets: [
          "Isolating the Gas System: Disconnecting sensitive appliance valves and capping lines.",
          "Pressurizing with Air or Nitrogen: Introducing compressed air or inert nitrogen to 3 to 5 PSI (far higher than standard operating pressure).",
          "Calibrated Manometer Monitoring: Tracking the digital gauge over a designated 15-to-30 minute window. Any pressure decrease confirms a leak.",
          "Electronic Sniffer Diagnostics: Pinpointing the micro-fracture or failed threaded joint using sensitive combustible gas sniffers."
        ]
      },
      {
        heading: "Emergency Safety Checklist: What to Do If You Smell Gas",
        paragraphs: [
          "If you ever detect the distinct rotten-egg odor of mercaptan or hear a hissing pipe, take these steps immediately:",
          "1. Evacuate everyone from the home immediately into fresh air.",
          "2. Do NOT flip light switches, use phones, or unplug electronics, as static sparks can ignite gas vapors.",
          "3. Shut off the gas meter valve from the outside if safely accessible.",
          "4. Call the gas utility emergency number or 911 from a safe distance, and once secured, call a licensed Master Plumber for code-compliant repairs and inspection sign-offs."
        ]
      }
    ]
  }
];
