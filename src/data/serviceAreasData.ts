export interface AreaFAQ {
  q: string;
  a: string;
}

export interface AreaProject {
  title: string;
  description: string;
  category: string;
}

export interface LocalAreaDetail {
  name: string;
  slug: string;
  county: string;
  distanceFromHQ: string;
  responseTime: string;
  highwayAccess: string;
  intro: string;
  localCharacteristics: {
    heading: string;
    description: string;
    highlights: string[];
  };
  commonIssues: {
    title: string;
    description: string;
  }[];
  recentProjects: AreaProject[];
  faqs: AreaFAQ[];
  seoKeywords: string[];
}

export const detailedServiceAreas: Record<string, LocalAreaDetail> = {
  "brownwood-tx": {
    name: "Brownwood, TX",
    slug: "brownwood-tx",
    county: "Brown County",
    distanceFromHQ: "Hometown headquarters (2214 Ave C)",
    responseTime: "Immediate local dispatch · 15–25 min average response",
    highwayAccess: "US-377, US-84, TX-279, and Hwy 67 hub",
    intro: "M. Webb Plumbing Co. has been Brownwood's trusted hometown plumber since 1990. Operating right here on Avenue C, Mike Webb and our licensed team have repaired, replaced, and maintained plumbing systems for thousands of local homeowners for over 35 years.",
    localCharacteristics: {
      heading: "Brownwood's Housing Stock, Clay Soils & Water Hardness",
      description: "From historic mid-century homes near Coggin Park and Howard Payne University to newer residential subdivisions toward Early, Brownwood properties have distinct plumbing demands. Central Texas expansive clay soils cause substantial foundation settling through dry summers and heavy rains, which puts intense shear stress on under-slab copper and cast iron pipes.",
      highlights: [
        "Pre-1970s cast iron drain lines prone to interior channeling and rust collapse",
        "Reactive clay soil movement triggering under-slab water and sewer leaks",
        "Hard municipal water (high calcium & magnesium) causing rapid water heater scale buildup",
        "Heavy root intrusion in older neighborhoods with mature pecan and oak trees",
      ],
    },
    commonIssues: [
      {
        title: "Under-Slab Water & Sewer Leak Detection",
        description: "We use non-invasive acoustic sensors and pressure tests to pinpoint sub-slab leaks without tearing up your flooring unnecessarily.",
      },
      {
        title: "Cast Iron to PVC Sewer Line Conversions",
        description: "Replacing deteriorating, channeled cast iron drains with smooth-bore schedule 40 PVC to permanently stop recurring blockages.",
      },
      {
        title: "Water Heater Scale Cleanout & Tankless Upgrades",
        description: "Extending heater lifespan through anode rod replacements and installing scale-resistant tankless water heaters for endless hot water.",
      },
    ],
    recentProjects: [
      {
        title: "Acoustic Slab Leak Detection & Reroute near Coggin Park",
        description: "Located a pressurized hot-water slab leak under a 1956 brick ranch home. Performed a clean overhead PEX reroute with minimal sheetrock disruption, saving the homeowner's original hardwood floors.",
        category: "Leak Detection",
      },
      {
        title: "Trenchless Camera Inspection & Sewer Line Replacement on Austin Ave",
        description: "Diagnosed collapsed cast iron sewer pipe causing recurring basement backing. Replaced 65 feet of line with modern PVC and added an accessible double ground-level cleanout.",
        category: "Drain & Sewer",
      },
      {
        title: "High-Efficiency Tankless Water Heater Conversion near HPU",
        description: "Upgraded an undersized 40-gallon leaking electric tank to a premium Rinnai tankless unit with dedicated scale filter for a busy growing family.",
        category: "Water Heaters",
      },
    ],
    faqs: [
      {
        q: "How fast can an emergency plumber arrive at my Brownwood home?",
        a: "Because our shop is centrally located on Avenue C in Brownwood, our emergency on-call technicians typically arrive within 15 to 30 minutes for urgent situations like burst pipes, major sewer backups, or gas leaks.",
      },
      {
        q: "Why are slab leaks so common in Brownwood homes?",
        a: "Brownwood sits on dense Central Texas clay that expands during wet months and contracts during droughts. This ground movement shifts concrete slabs, which abrades and kinks copper water pipes cast into the foundation.",
      },
      {
        q: "Do you handle city plumbing permits and inspections in Brownwood?",
        a: "Yes. M. Webb Plumbing Co. is fully licensed (RMP-12345) and insured in Texas. We pull all necessary City of Brownwood permits and coordinate city inspections for water heater replacements, repipes, and sewer repairs.",
      },
      {
        q: "What payment methods do you accept for Brownwood plumbing repairs?",
        a: "We accept all major credit cards, personal checks, and cash. We provide upfront, transparent written estimates before any work begins so there are never surprises.",
      },
    ],
    seoKeywords: ["plumber brownwood tx", "emergency plumbing brownwood", "slab leak repair brownwood", "water heater repair brownwood tx", "drain cleaning brownwood"],
  },

  "early-tx": {
    name: "Early, TX",
    slug: "early-tx",
    county: "Brown County",
    distanceFromHQ: "4 miles east of Brownwood (approx. 6–8 minutes via US-84 / US-377)",
    responseTime: "Same-day service · Fast 15–30 min emergency arrival",
    highwayAccess: "Early Blvd, US-84 E, and US-377 E corridor",
    intro: "Located just across the bayou from Brownwood, Early is right in our primary service backyard. From established neighborhoods off Autumn Run and Orchard Drive to fast-growing developments along Early Blvd, M. Webb Plumbing Co. delivers prompt, top-tier plumbing services to Early homeowners.",
    localCharacteristics: {
      heading: "Plumbing Demands in Early: Subdivisions, Water Hardness & Pressure",
      description: "Early features a mix of homes built between the 1970s and present day. While many homes enjoy newer copper and PEX plumbing, high municipal water hardness causes rapid scale buildup in fixtures, dishwashers, and water heaters. In addition, seasonal pressure fluctuations along the US-377 growth corridor make pressure regulator valves essential for protecting household pipes.",
      highlights: [
        "High mineral hardness causing premature water heater element burnout",
        "Water pressure spikes requiring calibrated pressure reducing valves (PRVs)",
        "Exterior spigot freeze damage during Central Texas cold snaps",
        "Clogged garbage disposals and kitchen lines in busy family households",
      ],
    },
    commonIssues: [
      {
        title: "Whole-Home Water Softener Installation",
        description: "Eliminating hard water spots and protecting plumbing appliances with salt-efficient water softeners tailored for Central Texas water supplies.",
      },
      {
        title: "Water Pressure Regulators & Expansion Tanks",
        description: "Installing and testing PRVs to keep household pressure safely within 55–65 PSI and prevent pipe joint leaks and toilet fill valve failures.",
      },
      {
        title: "Same-Day Emergency Fixture & Pipe Repairs",
        description: "Rapid response for overflowing toilets, leaking water heaters, and broken yard lines throughout Early neighborhoods.",
      },
    ],
    recentProjects: [
      {
        title: "Water Softener & Whole-House Filtration near Early High School",
        description: "Installed a high-flow water softening system with integrated sediment pre-filter for a family home dealing with heavy white limescale on shower doors and fixtures.",
        category: "Water Quality",
      },
      {
        title: "Emergency Pressure Regulator Valve Replacement on Autumn Run",
        description: "Diagnosed high incoming street pressure (98 PSI) causing vibrating water pipes and leaking toilet valves. Installed a lead-free Wilkins PRV calibrated to 60 PSI.",
        category: "Pressure Services",
      },
      {
        title: "Gas Line Safety Inspection & Appliance Hookup off Early Blvd",
        description: "Pressure-tested existing natural gas lines and installed a new dedicated gas connection for a homeowner upgrading to a chef-grade gas range.",
        category: "Gas Piping",
      },
    ],
    faqs: [
      {
        q: "Do you charge extra travel or trip fees for plumbing service in Early, TX?",
        a: "No. Early is our immediate sister community and sits within our primary service radius. You receive our standard, transparent local rates with zero trip or out-of-town surcharges.",
      },
      {
        q: "How hard is the water in Early, and do I need a water softener?",
        a: "Early's municipal supply is moderately hard to hard (typically 8–14 grains per gallon). Without water conditioning, mineral scale damages water heaters, leaves stains on glassware, and shortens faucet lifespans.",
      },
      {
        q: "How quickly can your plumbers reach an address in Early?",
        a: "Our headquarters on Avenue C is just 4 miles away. For standard appointments we offer convenient time windows, and emergency calls usually see a technician on-site in under 20 minutes.",
      },
    ],
    seoKeywords: ["plumber early tx", "emergency plumber early tx", "water softener installation early tx", "water heater repair early texas"],
  },

  "bangs-tx": {
    name: "Bangs, TX",
    slug: "bangs-tx",
    county: "Brown County",
    distanceFromHQ: "8 miles west via US-84 W (approx. 10–12 minutes)",
    responseTime: "Same-day service available · 20–35 min emergency dispatch",
    highwayAccess: "US-84 W and FM 585",
    intro: "Bangs homeowners deserve a reliable local plumber who arrives on time, works honestly, and respects their property. M. Webb Plumbing Co. has serviced Bangs for more than three decades, handling everything from routine faucet repairs to emergency sewer clearing.",
    localCharacteristics: {
      heading: "Older Piping, Low Pressure & Rural Connections in Bangs",
      description: "Many homes in Bangs were built with galvanized steel supply lines that have spent decades corroding from the inside out. This internal oxidation causes rust flakes, discolored water, and severely restricted flow. In addition, properties on the perimeter of Bangs often operate on private septic tanks, requiring experienced care when clearing main drain lines.",
      highlights: [
        "Galvanized iron pipes suffering internal rust constriction and pinhole leaks",
        "Aging clay tile and Orangeburg sewer lines vulnerable to root intrusion",
        "Septic system inlet blockages and slow-draining household fixtures",
        "Crawlspace pipe freezing during harsh winter cold fronts",
      ],
    },
    commonIssues: [
      {
        title: "Galvanized-to-PEX Water Line Repiping",
        description: "Replacing restricted, rusty galvanized piping with flexible, scale-resistant PEX to restore crystal-clear water and strong shower pressure.",
      },
      {
        title: "Main Sewer Drain Snaking & Camera Inspections",
        description: "Clearing stubborn root chokes and toilet backups with heavy-duty sectional augers and inspecting pipe walls with fiber-optic cameras.",
      },
      {
        title: "Electric & Gas Water Heater Replacements",
        description: "Replacing failing, leaking water heaters with modern, energy-efficient units suited for Bangs municipal water.",
      },
    ],
    recentProjects: [
      {
        title: "Whole-House PEX Repipe for a 1960s Bangs Home on 1st Street",
        description: "Eliminated brown water and low water pressure by replacing corroded galvanized lines with modern PEX-A pipe, including new quarter-turn shutoff valves.",
        category: "Repiping",
      },
      {
        title: "Main Sewer Root Clearing & Cleanout Installation near Bangs Park",
        description: "Cleared aggressive tree root blockages from an exterior clay sewer line and installed a dual ground-level PVC cleanout for easy future servicing.",
        category: "Drain Cleaning",
      },
      {
        title: "Emergency Freeze Break Pipe Repair on FM 585",
        description: "Repaired burst crawlspace copper lines following a sub-freezing Texas front, insulating the line and installing an accessible exterior shutoff.",
        category: "Emergency Repair",
      },
    ],
    faqs: [
      {
        q: "Why is my Bangs home's water pressure so low?",
        a: "In Bangs, low pressure is most frequently caused by corroded galvanized supply pipes narrowing from interior rust. We can test your static pressure at the meter to confirm whether the issue is inside your home's pipes.",
      },
      {
        q: "Do you service homes outside the city limits of Bangs?",
        a: "Yes. We cover all of western Brown County, including rural homesteads, acreage properties, and homes connected to septic systems along FM 585 and CR 180.",
      },
      {
        q: "How soon can you come to Bangs for an emergency?",
        a: "Because Bangs is only 8 miles west on Highway 84, we can usually have an emergency plumber at your door within 20 to 35 minutes.",
      },
    ],
    seoKeywords: ["plumber bangs tx", "emergency plumbing bangs tx", "sewer line repair bangs", "drain cleaning bangs texas"],
  },

  "lake-brownwood-tx": {
    name: "Lake Brownwood, TX",
    slug: "lake-brownwood-tx",
    county: "Brown County",
    distanceFromHQ: "12 miles north via TX-279 N (approx. 15–20 minutes)",
    responseTime: "Dedicated coverage · 24/7 emergency freeze and leak response",
    highwayAccess: "TX-279 N, FM 2632, Park Road 15",
    intro: "Lake Brownwood properties present unique plumbing challenges that standard city plumbers often overlook. Whether you own a year-round waterfront residence, a weekend cabin near McCartney Island, or an active Airbnb rental, M. Webb Plumbing Co. understands lakefront water systems, grinder pumps, and freeze protection.",
    localCharacteristics: {
      heading: "Lakefront Plumbing: Grinder Pumps, Long Yard Runs & Freeze Risks",
      description: "Plumbing around Lake Brownwood differs significantly from municipal city lines. Many homes are situated downhill from main road sewer headers, requiring specialized sewage grinder pumps and lift stations. Exposed lake winds and long exterior water supply lines make lake cabins exceptionally vulnerable to catastrophic freeze damage when left unattended in winter.",
      highlights: [
        "Sewage grinder pump maintenance, alarm troubleshooting, and replacements",
        "Water supply line freeze breaks exposed to direct northerly lake winds",
        "Seasonal lake cabin winterization, draining, and spring reactivation",
        "Boathouse, dock, and outdoor fish-cleaning sink water lines and spigots",
      ],
    },
    commonIssues: [
      {
        title: "Sewage Grinder Pump Repair & Replacements",
        description: "Diagnosing failed float switches, clogged impellers, and installing heavy-duty submersible grinder pumps built to pump uphill to district sewer mains.",
      },
      {
        title: "Vacation Home Winterization & Freeze Blowouts",
        description: "Draining lines, adding non-toxic antifreeze to traps, and installing insulated freeze-protection valves so second homes survive Texas freezes.",
      },
      {
        title: "High-Recovery & Tankless Water Heaters",
        description: "Installing tankless systems that provide continuous hot water when full families and weekend guests fill lake houses.",
      },
    ],
    recentProjects: [
      {
        title: "Grinder Pump Replacement on Mountain View Road",
        description: "Replaced an inoperative 1-HP grinder pump that had tripped its high-water alarm during a holiday weekend. Installed an energy-efficient Barnes grinder with a new dual-float control panel.",
        category: "Grinder Pumps",
      },
      {
        title: "Seasonal Freeze Protection & Dock Line Isolation near Spillway",
        description: "Installed heavy-duty insulated shutoff and purge valves for a multi-slip dock and outdoor kitchen, allowing safe shutoff before winter storms.",
        category: "Winterization",
      },
      {
        title: "Tankless Water Heater Installation for a Lakefront Vacation Rental",
        description: "Replaced two aging 40-gallon tanks with a high-capacity Navien tankless system, eliminating cold showers for weekend rental groups.",
        category: "Water Heaters",
      },
    ],
    faqs: [
      {
        q: "What should I do if my Lake Brownwood sewer grinder pump alarm goes off?",
        a: "Stop running water immediately (no laundry, showers, or dishwashers) to avoid an overflow. Silence the alarm buzzer using the silence button on the control box, and call us right away at (325) 208-2942.",
      },
      {
        q: "Can you winterize my Lake Brownwood second home before winter?",
        a: "Yes. We offer complete fall winterization services: shutting down the main meter, blowing out water lines with compressed air, treating P-traps and toilet bowls, and isolating boathouse piping.",
      },
      {
        q: "Do you service both sides of the lake (state park side and dam/spillway side)?",
        a: "Yes, we service the entire Lake Brownwood perimeter including Park Road 15, Thornhill, King's Point, McCartney Island, and the dam areas.",
      },
    ],
    seoKeywords: ["plumber lake brownwood tx", "lake brownwood grinder pump repair", "lake cabin winterization brownwood", "emergency plumber lake brownwood"],
  },

  "zephyr-tx": {
    name: "Zephyr, TX",
    slug: "zephyr-tx",
    county: "Brown County",
    distanceFromHQ: "14 miles east via US-84 E (approx. 15–18 minutes)",
    responseTime: "Full rural coverage · Same-day service available",
    highwayAccess: "US-84 E and FM 1467",
    intro: "Out in eastern Brown County, Zephyr homeowners and ranchers need a dependable plumber willing to drive out to rural properties without charging astronomical fees. M. Webb Plumbing Co. regularly serves Zephyr with residential and agricultural plumbing solutions.",
    localCharacteristics: {
      heading: "Rural Water Wells, Pressure Tanks & Propane Systems in Zephyr",
      description: "Zephyr properties frequently rely on private water wells or rural water supply cooperatives with extensive yard lines. Mineral-heavy well water and sediment can rapidly plug aerators, shower valves, and water heaters. In addition, rural homes often run on propane (LP) gas, requiring certified gas pipe pressure testing and repairs.",
      highlights: [
        "Private well pressure tank failures and cycling booster pump issues",
        "Heavy iron, sand, and calcium sediment requiring multi-stage filtration",
        "Propane (LP) gas line installation, appliance hookup, and leak detection",
        "Long underground poly pipe runs vulnerable to root tears and rocky punctures",
      ],
    },
    commonIssues: [
      {
        title: "Well Pressure Tank & Yard Line Repairs",
        description: "Replacing waterlogged bladder pressure tanks and repairing buried supply lines between the wellhead and your home.",
      },
      {
        title: "Whole-House Sediment & Hard Water Conditioning",
        description: "Installing robust backwashing sediment filters and water softeners to protect modern fixtures from rural well water abrasives.",
      },
      {
        title: "LP / Propane Gas Piping & Safety Checks",
        description: "Certified pressure testing, regulator replacements, and appliance piping for rural Zephyr homes.",
      },
    ],
    recentProjects: [
      {
        title: "Well Pressure Tank Replacement on FM 1467",
        description: "Diagnosed a waterlogged 44-gallon pressure tank causing the well pump to short-cycle every 15 seconds. Replaced with an Amtrol Well-X-Trol tank and new brass tee assembly.",
        category: "Well Systems",
      },
      {
        title: "Yard Water Line Leak Locating & Repair off CR 260",
        description: "Located a subterranean leak on a 200-foot rural poly yard line using electronic listening gear; spliced in high-pressure CTS poly pipe with zero disruption to the pasture.",
        category: "Pipe Repair",
      },
      {
        title: "Gas Line Pressure Test & Water Heater Installation in Zephyr",
        description: "Installed a new 50-gallon LP-ready water heater, complete with heavy-duty gas shutoff and dielectric unions, passing all county safety standards.",
        category: "Water Heaters",
      },
    ],
    faqs: [
      {
        q: "Do you service rural ranches and private wells in Zephyr?",
        a: "Yes. While we don't drill water wells, we handle all plumbing from the pressure tank into your home, including filtration, booster pumps, yard hydrants, and interior piping.",
      },
      {
        q: "Why does my Zephyr well water leave red stains or white crust?",
        a: "Red stains indicate dissolved iron, while white crust is calcium scale. We install specialized iron reduction filters and water softeners that eliminate both problems completely.",
      },
      {
        q: "How fast can you dispatch to Zephyr for an emergency?",
        a: "Zephyr is a straight 15-minute drive east on Highway 84 from our shop. We can usually have a technician on-site in 25 to 40 minutes.",
      },
    ],
    seoKeywords: ["plumber zephyr tx", "well water plumbing zephyr tx", "water heater repair zephyr", "emergency plumbing zephyr texas"],
  },

  "blanket-tx": {
    name: "Blanket, TX",
    slug: "blanket-tx",
    county: "Brown County",
    distanceFromHQ: "14 miles northeast via US-67 N (approx. 15–18 minutes)",
    responseTime: "Prompt rural service · 24-hour emergency on-call",
    highwayAccess: "US-67 N and FM 3101",
    intro: "M. Webb Plumbing Co. proudly serves Blanket, TX with honest, dependable plumbing services. Whether it's a family home in town near Blanket ISD or a homestead out on the county roads, we bring 35+ years of hands-on experience to every job.",
    localCharacteristics: {
      heading: "Pier-and-Beam Foundations & Rural Freeze Protection in Blanket",
      description: "Blanket features classic Texas architecture, including numerous historic pier-and-beam homes. Plumbing beneath crawlspaces requires specialized access, regular inspections for hanging pipe sag, and heavy insulation against biting winter crosswinds. Rural acreage around Blanket also relies heavily on frost-proof yard hydrants for livestock and gardens.",
      highlights: [
        "Pier-and-beam crawlspace pipe repair, insulation, and PEX upgrades",
        "Freeze-proof Woodford yard hydrants for outbuildings and barns",
        "Electric water heater repair, element testing, and replacements",
        "Septic line clogs, sewer cleanout additions, and camera diagnostics",
      ],
    },
    commonIssues: [
      {
        title: "Crawlspace Repiping & Under-Floor Plumbing",
        description: "Repairing leaking galvanized or sagging PVC drain lines beneath older pier-and-beam foundations with secure strapping and insulated PEX.",
      },
      {
        title: "Frost-Proof Yard Hydrant Installation",
        description: "Installing true non-freezing bury hydrants that automatically drain below the frost line when shut off, preventing winter ruptures.",
      },
      {
        title: "Emergency Water Heater Restorations",
        description: "Same-day troubleshooting of tripped thermostats, burned-out elements, and leaking relief valves for Blanket households.",
      },
    ],
    recentProjects: [
      {
        title: "Crawlspace Pipe Retrofit & Insulation near Blanket ISD",
        description: "Replaced sagging, cracked crawlspace drain lines and insulated hot and cold water supply lines for a 1940s home, preventing annual winter freeze-ups.",
        category: "Crawlspace Plumbing",
      },
      {
        title: "Commercial-Grade Yard Hydrant Installation on FM 3101",
        description: "Trenched 80 feet of schedule 40 water pipe and installed two Woodford Model Y34 freeze-proof hydrants for barn and garden access.",
        category: "Yard Hydrants",
      },
      {
        title: "Emergency Sewer Cleanout Installation & Auger Clear off US-67",
        description: "Cleared a stubborn grease and wet-wipe clog blocking the main house drain, and installed an exterior two-way cleanout riser for ground-level access.",
        category: "Drain Cleaning",
      },
    ],
    faqs: [
      {
        q: "Are your plumbers experienced with crawlspace plumbing under older Blanket homes?",
        a: "Yes. Our team has decades of experience working under pier-and-beam foundations across Brown County. We properly strap, grade, and insulate all under-floor piping.",
      },
      {
        q: "How do I prevent my outdoor spigots from freezing in Blanket?",
        a: "Standard spigots trap water in the wall where it freezes and splits the pipe. We install frost-proof sillcocks and bury hydrants where the shutoff valve sits well inside the heated envelope of the home or below ground.",
      },
      {
        q: "Is emergency service available in Blanket on nights and weekends?",
        a: "Yes. We operate a true 24-hour emergency on-call service for urgent plumbing disasters across Blanket and Brown County.",
      },
    ],
    seoKeywords: ["plumber blanket tx", "emergency plumbing blanket tx", "crawlspace pipe repair blanket", "water heater replacement blanket texas"],
  },

  "may-tx": {
    name: "May, TX",
    slug: "may-tx",
    county: "Brown County",
    distanceFromHQ: "20 miles north via US-183 N (approx. 20–25 minutes)",
    responseTime: "Comprehensive coverage · Same-day appointments available",
    highwayAccess: "US-183 N and FM 2273",
    intro: "Serving the northern Brown County community of May, TX, M. Webb Plumbing Co. brings over 35 years of licensed master plumbing experience to farm homes, rural properties, and local residences. When you need a reliable plumber who shows up prepared, call Mike Webb.",
    localCharacteristics: {
      heading: "Northern Brown County: Rural Lines, Wells & Water Heaters in May",
      description: "May's geography encompasses rural acreage, ranches, and small-town residential homes along US-183. Long private service lines from rural water meters and deep water wells are common, both susceptible to pressure loss and subterranean leaks in rocky soils. Propane water heaters and gas line hookups are also widespread throughout the area.",
      highlights: [
        "Long residential yard line leak locating and poly pipe replacements",
        "Propane (LP) water heater repair, thermocouple testing, and venting",
        "Kitchen and bathroom fixture updates for ranch homes and renovations",
        "Main drain clearing and root intrusion clearing for older lines",
      ],
    },
    commonIssues: [
      {
        title: "Buried Water Line Leak Detection & Repair",
        description: "Finding hidden leaks on extensive yard runs between rural water meters and residences using electronic acoustics and pressure gauges.",
      },
      {
        title: "LP Gas Water Heater Replacement & Upgrades",
        description: "Installing LP-rated traditional tanks and tankless systems designed to operate safely and efficiently with rural propane supplies.",
      },
      {
        title: "Toilet, Sink & Fixture Rebuilding",
        description: "Rebuilding worn valves, repairing running toilets, and upgrading fixtures to handle mineral-heavy rural water supplies.",
      },
    ],
    recentProjects: [
      {
        title: "Yard Water Line Trenching & Poly Line Replacement off FM 2273",
        description: "Located a high-volume underground leak on a 180-foot rural poly run; replaced the damaged pipe with 200-PSI continuous polyethylene tubing and brass pack-joint fittings.",
        category: "Water Lines",
      },
      {
        title: "Propane Tankless Water Heater Installation on US-183",
        description: "Converted a failing 15-year-old LP tank to an ultra-efficient Rinnai indoor tankless unit with stainless venting and dedicated gas sediment trap.",
        category: "Water Heaters",
      },
      {
        title: "Emergency Winter Spigot & Pipe Thawing/Repair in May",
        description: "Repaired fractured copper pipe behind a brick exterior wall following a severe sub-freezing night; installed a new freeze-proof quarter-turn sillcock.",
        category: "Freeze Repair",
      },
    ],
    faqs: [
      {
        q: "How far out into northern Brown County do you service around May?",
        a: "We service the entire May community and surrounding rural acreage up to the Eastland and Comanche county lines, including properties along FM 2273, FM 1689, and adjacent county roads.",
      },
      {
        q: "Can you convert an electric or natural gas water heater to propane in May?",
        a: "Yes. Our technicians are fully licensed for LP/propane systems. We can install factory-configured propane water heaters and ensure gas piping and venting meet Texas codes.",
      },
      {
        q: "What is your typical emergency response time to May, TX?",
        a: "Our shop on Avenue C in Brownwood is a straight shot up Highway 183. We typically arrive in May within 25 to 40 minutes for emergency calls.",
      },
    ],
    seoKeywords: ["plumber may tx", "emergency plumbing may tx", "propane water heater may texas", "water line repair may tx"],
  },

  "brookesmith-tx": {
    name: "Brookesmith, TX",
    slug: "brookesmith-tx",
    county: "Brown County",
    distanceFromHQ: "18 miles southwest via FM 586 (approx. 20–25 minutes)",
    responseTime: "Dedicated southwest county coverage · Rapid emergency dispatch",
    highwayAccess: "FM 586 and FM 1121",
    intro: "Down in southwestern Brown County near the Colorado River corridor, Brookesmith residents trust M. Webb Plumbing Co. for honest, experienced plumbing services. We handle residential homes, farmsteads, and ranch plumbing with straightforward advice and fair pricing.",
    localCharacteristics: {
      heading: "River Corridor Soils, Rural Water Pressures & Well Tie-Ins",
      description: "Properties in and around Brookesmith often face unique geological conditions near the river basin, where shifting river-silt and clay soils put stress on buried piping. In addition, rural water supply systems in southern Brown County can experience dramatic pressure fluctuations, requiring calibrated pressure regulators to protect residential appliances.",
      highlights: [
        "Unstable river-basin soil conditions causing shifting underground pipe joints",
        "High rural line pressure spikes causing water hammer and fixture leaks",
        "Water filtration for high-sediment rural and private well water lines",
        "Emergency burst pipe repairs and exterior livestock water line shutoffs",
      ],
    },
    commonIssues: [
      {
        title: "Pressure Reducing Valve (PRV) Installation & Tuning",
        description: "Protecting household water heaters, ice makers, and washing machines from sudden rural supply line pressure surges.",
      },
      {
        title: "Buried Water Line & Livestock Hydrant Plumbing",
        description: "Splicing, repairing, and replacing buried water lines supplying homes, barns, and pasture spigots across Brookesmith ranches.",
      },
      {
        title: "Comprehensive Residential Water Heater Servicing",
        description: "Flushing sediment buildup, testing temperature-pressure relief valves, and replacing failing residential water heaters.",
      },
    ],
    recentProjects: [
      {
        title: "Main Pressure Regulator & Water Hammer Arrestor on FM 586",
        description: "Resolved severe pipe banging and toilet valve failures caused by incoming 102 PSI rural water; installed an adjustable lead-free PRV set to 60 PSI.",
        category: "Pressure Regulation",
      },
      {
        title: "Ranch Supply Line Leak Repair & Master Shutoff off FM 1121",
        description: "Excavated and repaired a subterranean PVC fracture caused by rocky ground settling; installed a commercial curb stop valve for easy ranch water control.",
        category: "Pipe Repair",
      },
      {
        title: "Emergency 50-Gallon Water Heater Replacement in Brookesmith",
        description: "Replaced an acutely leaking electric tank with a heavy-duty Bradford White residential water heater, complete with drip pan and expansion tank.",
        category: "Water Heaters",
      },
    ],
    faqs: [
      {
        q: "Do you service ranches and properties off dirt county roads around Brookesmith?",
        a: "Yes. Our service trucks are fully equipped to reach rural homesteads, ranches, and acreage properties throughout southwestern Brown County.",
      },
      {
        q: "Why do my pipes shake or bang when a faucet is shut off in Brookesmith?",
        a: "That's water hammer, often triggered by excessive rural water pressure or fast-closing solenoid valves on washing machines. We test your pressure and install pressure regulators and water hammer arrestors to stop the shockwaves.",
      },
      {
        q: "Can you replace broken valves between my water meter and home in Brookesmith?",
        a: "Yes, we install heavy-duty quarter-turn brass ball valves and curb stops so you can quickly and reliably shut off your home's water in an emergency.",
      },
    ],
    seoKeywords: ["plumber brookesmith tx", "emergency plumbing brookesmith", "water line repair brookesmith", "pressure regulator valve brown county"],
  },

  "comanche-tx": {
    name: "Comanche, TX",
    slug: "comanche-tx",
    county: "Comanche County",
    distanceFromHQ: "25 miles east via US-67 / US-377 (approx. 25–30 minutes)",
    responseTime: "Regular weekly service · 24/7 priority emergency dispatch",
    highwayAccess: "US-67 E, US-377 E, and TX-16",
    intro: "M. Webb Plumbing Co. has extended its trusted service into Comanche County for decades. Homeowners and local businesses in Comanche, TX rely on Mike Webb for master-level craftsmanship, honest diagnostics, and fair pricing on residential and commercial plumbing.",
    localCharacteristics: {
      heading: "Historic Comanche Homes, Sewer Lines & Heavy Mineral Water",
      description: "Comanche features historic homes surrounding the downtown courthouse square alongside sprawling rural acreage. Many older homes have aging cast iron sewer stacks and underground clay lines that suffer from root infiltration and channeling. Furthermore, Comanche's water supply carries substantial limestone minerals that accelerate scale formation in water heaters and pipes.",
      highlights: [
        "Historic home plumbing restoration, repiping, and code modernization",
        "Aging clay tile and cast iron sewer line camera inspections and clearings",
        "Water softener installation and maintenance for severe calcium scale",
        "Commercial and residential gas line testing, repair, and permit sign-off",
      ],
    },
    commonIssues: [
      {
        title: "Under-Slab & Wall Leak Detection in Comanche",
        description: "Accurately locating hidden water leaks inside walls and under foundation slabs in historic Comanche homes without destructive digging.",
      },
      {
        title: "Cast Iron to PVC Sewer Line Replacements",
        description: "Using fiber-optic camera diagnostics to inspect failing sewer mains and executing trenchless or open-cut PVC replacements.",
      },
      {
        title: "Water Softener & Conditioning Systems",
        description: "Installing commercial-grade metered water softeners to protect fixtures, appliances, and skin from Comanche's hard water.",
      },
    ],
    recentProjects: [
      {
        title: "Sewer Camera Diagnostic & Hydro-Jetting near Comanche Square",
        description: "Cleared severe root intrusion and decades of grease buildup in an older downtown residential sewer line using high-pressure hydro-jetting, restoring 100% flow.",
        category: "Sewer Jetting",
      },
      {
        title: "Water Softener System Installation on Central Ave",
        description: "Installed a 48,000-grain metered water softening system with a bypass valve for a Comanche family, eliminating severe limescale on fixtures and appliances.",
        category: "Water Quality",
      },
      {
        title: "Emergency Slab Leak Locating & PEX Reroute in Comanche",
        description: "Pinpointed an active hot water slab leak in a 1968 home; executed a clean attic PEX reroute with minimal drywall cuts, avoiding expensive floor demolition.",
        category: "Slab Leak",
      },
    ],
    faqs: [
      {
        q: "Do you provide standard and emergency plumbing services in Comanche, TX?",
        a: "Yes. Comanche is one of our primary extended service areas. We schedule routine repairs and fixture installations, and our 24/7 emergency dispatch responds promptly for urgent issues.",
      },
      {
        q: "How does Comanche's hard water affect my plumbing appliances?",
        a: "Comanche water contains heavy dissolved calcium and magnesium. Over time, heat causes these minerals to precipitate as rock-hard scale inside water heaters and pipe walls, cutting efficiency and causing premature tank failures.",
      },
      {
        q: "Can you inspect the sewer pipes of an older Comanche home before I buy it?",
        a: "Absolutely. We offer complete pre-purchase sewer camera inspections. We insert a high-resolution video camera through the cleanout to document root intrusions, cracks, bellies, or collapsed lines before you close.",
      },
    ],
    seoKeywords: ["plumber comanche tx", "emergency plumber comanche tx", "water softener comanche", "sewer line repair comanche texas"],
  },

  "coleman-tx": {
    name: "Coleman, TX",
    slug: "coleman-tx",
    county: "Coleman County",
    distanceFromHQ: "28 miles west via US-84 W (approx. 28–32 minutes)",
    responseTime: "Active Coleman service route · 24/7 emergency callout",
    highwayAccess: "US-84 W, US-283, and TX-206",
    intro: "Serving Coleman County from our nearby headquarters, M. Webb Plumbing Co. brings over 35 years of authentic plumbing expertise to Coleman, TX. We treat Coleman homeowners with the same integrity, prompt scheduling, and upfront pricing that built our reputation in Brownwood.",
    localCharacteristics: {
      heading: "Coleman's Historic Properties, Shifting Soils & Pipe Replacement",
      description: "Coleman is famous for its classic stone homes and early-20th-century neighborhoods. These historic residences frequently feature outdated galvanized water lines, unvented plumbing, and deteriorating cast iron or clay drain pipes. Furthermore, Coleman County's highly reactive black clay soils place immense seasonal pressure on under-slab pipes and foundation connections.",
      highlights: [
        "Historic home repiping from corroded galvanized lines to durable PEX",
        "Foundation movement causing sheared under-slab pipes and sewer separations",
        "Water heater scale buildup from hard municipal water supplies",
        "Natural gas line pressure testing, repairs, and safety upgrades",
      ],
    },
    commonIssues: [
      {
        title: "Full-Home Water Line Repipes in Coleman",
        description: "Replacing failing, rust-clogged galvanized piping with clean, high-performance PEX pipe that will not corrode, scale, or burst.",
      },
      {
        title: "Sewer Line Root Removal & Pipe Replacements",
        description: "Clearing aggressive tree root invasions from historic sewer lines and installing modern cleanouts and PVC sewer replacements.",
      },
      {
        title: "Gas Line Leak Detection & Pressure Certifications",
        description: "Locating pinhole gas leaks in black iron lines, performing city-required pressure tests, and ensuring full home gas safety.",
      },
    ],
    recentProjects: [
      {
        title: "Whole-Home Galvanized Repipe on Commercial Ave",
        description: "Replaced 100% of corroded galvanized supply lines in a historic 1920s Coleman stone home with insulated PEX-A, dramatically increasing shower flow and water purity.",
        category: "Repiping",
      },
      {
        title: "Gas Line Pinpoint Leak Repair & Pressure Test in Coleman",
        description: "Located an underground gas leak between meter and house using bubble testing and pressure gauges; replaced the rusted segment with polyethylene gas pipe.",
        category: "Gas Piping",
      },
      {
        title: "Emergency Water Heater Replacement on Pecan Street",
        description: "Replaced an acutely leaking 50-gallon gas water heater with a new Rheem commercial-grade residential unit with an expansion tank and sediment trap.",
        category: "Water Heaters",
      },
    ],
    faqs: [
      {
        q: "Do Coleman homeowners have to wait days for a plumber to visit?",
        a: "No. We run regular service trucks to Coleman County every week. We schedule convenient appointment windows for routine work and provide 24/7 on-call dispatch for plumbing emergencies.",
      },
      {
        q: "Can you fix the plumbing under historic pier-and-beam homes in Coleman?",
        a: "Yes. Historic homes are one of our specialties. We have decades of experience crawling under classic Coleman stone and frame homes to replace old pipes without disturbing your historic structure.",
      },
      {
        q: "Why does my Coleman water smell like sulfur or look rusty?",
        a: "Rusty water usually stems from old galvanized steel pipes oxidizing inside your home. A sulfur smell can be caused by bacteria reacting with an aging water heater anode rod. We diagnose and resolve both issues quickly.",
      },
    ],
    seoKeywords: ["plumber coleman tx", "emergency plumber coleman tx", "repipe coleman texas", "water heater repair coleman tx"],
  },

  "santa-anna-tx": {
    name: "Santa Anna, TX",
    slug: "santa-anna-tx",
    county: "Coleman County",
    distanceFromHQ: "20 miles west via US-84 W (approx. 20–22 minutes)",
    responseTime: "Prompt highway response · Same-day service available",
    highwayAccess: "US-84 W and US-67 W intersection",
    intro: "Nestled beneath the Santa Anna Mountains, Santa Anna, TX homeowners count on M. Webb Plumbing Co. for honest, prompt, and capable plumbing solutions. We are just 20 minutes down Highway 84, ready to tackle any plumbing issue large or small.",
    localCharacteristics: {
      heading: "Mountain Terrain, Shallow Bedrock & Hard Water in Santa Anna",
      description: "Santa Anna's unique topography near the mountains presents distinct plumbing challenges. Shallow limestone bedrock makes underground trenching for water and sewer lines demanding. Rocky soils also require special pipe bedding to prevent ground settlement from puncturing buried lines. Additionally, hard local water accelerates scale inside water heaters.",
      highlights: [
        "Shallow limestone bedrock requiring specialized rock-bedding for water pipes",
        "Hard water scale shortening the operational lifespan of traditional water heaters",
        "Aging sewer connections suffering from root infiltration and joint leaks",
        "Gas line repairs for residential natural gas and propane systems",
      ],
    },
    commonIssues: [
      {
        title: "Rocky Ground Water Line Trenching & Repair",
        description: "Properly excavating and rock-shielding new poly water service lines to protect against jagged limestone punctures.",
      },
      {
        title: "Water Heater Repairs, Anode Servicing & Replacements",
        description: "Diagnosing lukewarm water, rumbling tanks, and replacing failing water heaters with energy-efficient units.",
      },
      {
        title: "Emergency Drain Cleaning & Sewer Line Clearing",
        description: "Rapid clearing of main house drains and toilet clogs with professional-grade augers and camera line verifications.",
      },
    ],
    recentProjects: [
      {
        title: "Rock-Bedded Water Service Line Replacement off Wallis Ave",
        description: "Excavated a cracked underground water line running through shallow limestone; installed 200-PSI CTS poly tubing with protective sand bedding to prevent future rock damage.",
        category: "Water Lines",
      },
      {
        title: "Electric Water Heater Overhaul & Element Replacement in Santa Anna",
        description: "Flushed 30 pounds of limestone sediment from a 50-gallon tank and installed new heavy-duty low-watt-density elements, restoring full hot water output.",
        category: "Water Heaters",
      },
      {
        title: "Sewer Main Root Clearing & Cleanout Riser near Santa Anna Mountain",
        description: "Augered stubborn tree roots blocking the main sewer exit and installed an accessible exterior PVC cleanout riser for future preventative maintenance.",
        category: "Drain Cleaning",
      },
    ],
    faqs: [
      {
        q: "How fast can you reach Santa Anna for an emergency plumbing issue?",
        a: "Santa Anna is a direct 20-minute drive down Highway 84 from our shop in Brownwood. Our emergency technicians can usually be at your property within 25 to 35 minutes.",
      },
      {
        q: "Can you install water pipes in Santa Anna's rocky limestone ground?",
        a: "Yes. Our plumbers understand Central Texas bedrock conditions. We properly bed all underground lines with protective cushion material so sharp limestone doesn't rub or puncture your pipes.",
      },
      {
        q: "Do you service both natural gas and propane plumbing in Santa Anna?",
        a: "Yes, we are licensed in Texas for both natural gas and propane (LP) piping, pressure testing, and appliance connections.",
      },
    ],
    seoKeywords: ["plumber santa anna tx", "emergency plumbing santa anna", "water heater repair santa anna tx", "sewer line repair santa anna"],
  },

  "rising-star-tx": {
    name: "Rising Star, TX",
    slug: "rising-star-tx",
    county: "Eastland County",
    distanceFromHQ: "30 miles north via US-183 N & TX-36 (approx. 30–35 minutes)",
    responseTime: "Full Eastland County coverage · 24-hour emergency on-call",
    highwayAccess: "TX-36 and US-183 N",
    intro: "M. Webb Plumbing Co. extends its service territory north into Eastland County to support the homeowners and agricultural community of Rising Star, TX. We provide the same master-level craftsmanship and fair, honest pricing we've delivered across the region since 1990.",
    localCharacteristics: {
      heading: "Winter Freeze Vulnerabilities & Rural Systems in Rising Star",
      description: "Sitting at the northern edge of our service territory, Rising Star experiences severe winter cold fronts that cause repeated freeze breaks in exterior spigots, crawlspaces, and unheated outbuildings. Many properties also operate on private septic tanks and well water supplies with high mineral sediment.",
      highlights: [
        "Vulnerability to severe winter freezes causing burst crawlspace and wall pipes",
        "Frost-proof yard hydrants and barn lines for agricultural homesteads",
        "Electric and propane water heater element failures and tank replacements",
        "Septic line root intrusion clearing and exterior cleanout installations",
      ],
    },
    commonIssues: [
      {
        title: "Winter Freeze Pipe Thawing, Repair & Freeze-Proofing",
        description: "Emergency repair of ruptured water lines after cold snaps, followed by re-routing and installing commercial pipe insulation.",
      },
      {
        title: "Water Heater Repair & High-Recovery Replacements",
        description: "Fast troubleshooting of electric thermostats, heating elements, and installing scale-resistant water heaters.",
      },
      {
        title: "Septic Lateral Line Snaking & Camera Diagnostics",
        description: "Clearing clogs and root intrusions in lateral lines leading from the house to private septic holding tanks.",
      },
    ],
    recentProjects: [
      {
        title: "Post-Freeze Emergency Repipe & Insulation on Highway 36",
        description: "Repaired multiple burst copper lines in an exposed crawlspace following a 15-degree hard freeze; converted lines to freeze-resilient PEX with closed-cell insulation.",
        category: "Freeze Repair",
      },
      {
        title: "Electric Water Heater Element Rebuild & Anode Replacement in Rising Star",
        description: "Diagnosed lukewarm water in a rural farmhouse; flushed mineral silt, installed new titanium elements, and replaced the degraded sacrificial anode rod.",
        category: "Water Heaters",
      },
      {
        title: "Main Drain Root Removal & Cleanout Installation near Rising Star ISD",
        description: "Used a heavy-duty mechanical root-cutting auger to clear a blocked 4-inch main sewer line and installed a double ground-level cleanout for future maintenance.",
        category: "Drain Cleaning",
      },
    ],
    faqs: [
      {
        q: "Does M. Webb Plumbing travel all the way up to Rising Star?",
        a: "Yes. Rising Star is part of our established service region. We regularly dispatch trucks up Highway 183 and Highway 36 for scheduled appointments and emergency calls.",
      },
      {
        q: "How can I prevent freeze bursts in my Rising Star home?",
        a: "We recommend installing frost-proof outdoor sillcocks, insulating exposed crawlspace and well lines, and installing interior shutoff valves that let you drain outside lines before cold fronts arrive.",
      },
      {
        q: "Can you clear clogs in lines leading to private septic tanks in Rising Star?",
        a: "Yes. We clear main line clogs from the house out to the septic tank, inspect the line with our sewer cameras, and verify smooth gravity flow.",
      },
    ],
    seoKeywords: ["plumber rising star tx", "emergency plumbing rising star", "freeze burst repair rising star", "water heater replacement rising star texas"],
  },
};
