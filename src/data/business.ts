export const business = {
  name: "M. Webb Plumbing Co. LLC",
  shortName: "M. Webb Plumbing",
  owner: "Mike Webb",
  tagline: "Brownwood's Trusted Plumber Since 1990",
  address: "2214 Ave C, Brownwood, TX 76801",
  street: "2214 Ave C",
  city: "Brownwood",
  state: "TX",
  zip: "76801",
  phone: "(325) 328-0435",
  phoneRaw: "+13256412662",
  email: "webbplumbing@verizon.net",
  website: "mwebbplumbingco.com",
  hours: "Mon–Fri 8:00 AM – 5:00 PM · 24-Hour Emergency On-Call",
  experience: "35+ Years",
  foundedYear: 1990,
  licenseNumber: "RMP-12345",
  areas: ["Brownwood, TX", "Early, TX", "Bangs, TX", "Lake Brownwood, TX", "Zephyr, TX", "Blanket, TX", "May, TX", "Brookesmith, TX", "Comanche, TX", "Santa Anna, TX", "Coleman, TX", "Rising Star, TX"],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6788.95463056734!2d-98.990455!3d31.702853999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8650c7bf59886c0b%3A0x7e0e0df5e983720e!2sM%20Webb%20Plumbing%20Co!5e0!3m2!1sen!2sin!4v1781774262533!5m2!1sen!2sin",
  googleBusinessUrl: "https://www.google.com/maps/place/M+Webb+Plumbing+Co",
  socialLinks: {
    google: "https://www.google.com/maps/place/M+Webb+Plumbing+Co",
    facebook: "https://www.facebook.com/mwebbplumbing",
  },
};

export const services = [
  { slug: "emergency-plumbing", title: "Emergency Plumbing", icon: "Siren", blurb: "24-hour urgent response for burst pipes, major leaks and plumbing disasters across Brownwood, TX.", category: "emergency" },
  { slug: "residential-plumbing", title: "Residential Plumbing", icon: "Home", blurb: "Trusted home plumbing for repairs, replacements, fixtures and full-house service.", category: "residential" },
  { slug: "commercial-plumbing", title: "Commercial Plumbing", icon: "Building2", blurb: "Reliable plumbing for offices, restaurants, retail and industrial properties.", category: "commercial" },
  { slug: "water-heater-repair", title: "Water Heater Repair", icon: "Flame", blurb: "Fast water heater repairs and installations to restore hot water to your home.", category: "residential" },
  { slug: "tankless-water-heater", title: "Tankless Water Heater", icon: "Zap", blurb: "Energy-efficient tankless water heater installation and service for endless hot water.", category: "residential" },
  { slug: "drain-cleaning", title: "Drain Cleaning", icon: "Drill", blurb: "Professional drain cleaning to clear clogs and restore proper flow throughout your plumbing.", category: "residential" },
  { slug: "drain-camera-inspection", title: "Drain Camera Inspection", icon: "Video", blurb: "Video inspection technology to diagnose drain problems without excavation.", category: "inspection" },
  { slug: "leak-detection", title: "Leak Detection", icon: "Droplets", blurb: "Non-invasive leak location to stop hidden water damage before it spreads.", category: "inspection" },
  { slug: "pipe-repair", title: "Pipe Repair", icon: "GitBranch", blurb: "Expert pipe repair services for leaks, corrosion, and damaged plumbing lines.", category: "repair" },
  { slug: "pipe-replacement", title: "Pipe Replacement", icon: "Replace", blurb: "Complete pipe replacement and repiping services for aging plumbing systems.", category: "replacement" },
  { slug: "sewer-line-repair", title: "Sewer Line Repair", icon: "ArrowDownToLine", blurb: "Sewer line repair and replacement to fix blockages, breaks, and aging infrastructure.", category: "repair" },
  { slug: "toilet-repair", title: "Toilet Repair", icon: "Toilet", blurb: "Toilet repairs, installations, and replacements to restore proper function.", category: "residential" },
  { slug: "faucet-repair", title: "Faucet Repair & Replacement", icon: "Wrench", blurb: "Stop drips, swap fixtures and upgrade faucets with professional results.", category: "residential" },
  { slug: "garbage-disposal", title: "Garbage Disposal", icon: "Recycle", blurb: "Garbage disposal installation, repair and replacement for your kitchen.", category: "residential" },
  { slug: "kitchen-plumbing", title: "Kitchen Plumbing", icon: "ChefHat", blurb: "Complete kitchen plumbing services from sink installation to drain cleaning.", category: "residential" },
  { slug: "bathroom-plumbing", title: "Bathroom Plumbing", icon: "Bath", blurb: "Full bathroom plumbing services including fixtures, drains, and repairs.", category: "residential" },
  { slug: "gas-line-repair", title: "Gas Line Repair", icon: "AlertTriangle", blurb: "Gas line repair and installation services with safety as the top priority.", category: "repair" },
  { slug: "water-softener", title: "Water Softener", icon: "Droplet", blurb: "Water softener installation and service to address hard water issues.", category: "residential" },
  { slug: "water-line-repair", title: "Water Line Repair", icon: "Pipette", blurb: "Diagnosis and repair of damaged, leaking or aging main water lines.", category: "repair" },
  { slug: "plumbing-inspections", title: "Plumbing Inspections", icon: "ClipboardCheck", blurb: "Pre-purchase and preventive inspections that catch problems early.", category: "inspection" },
  { slug: "plumbing-system-replacement", title: "Plumbing System Replacement", icon: "Hammer", blurb: "Full repipes and system upgrades for older homes and aging infrastructure.", category: "replacement" },
  { slug: "hot-water-recirculation-pumps", title: "Hot Water Recirculation Pumps", icon: "Flame", blurb: "Instant hot water at every faucet with energy-efficient recirculation systems.", category: "residential" },
];

export const serviceAreas = [
  { slug: "brownwood-tx", name: "Brownwood, TX", lat: 31.7029, lng: -98.9905, population: "18,000+", isPrimary: true, description: "Headquarters location serving as the main hub for all Brown County plumbing services." },
  { slug: "early-tx", name: "Early, TX", lat: 31.8533, lng: -98.7725, population: "2,900+", isPrimary: false, description: "Just 10 minutes from Brownwood, Early residents receive fast same-day plumbing service." },
  { slug: "bangs-tx", name: "Bangs, TX", lat: 31.7522, lng: -99.0089, population: "1,600+", isPrimary: false, description: "Serving Bangs with reliable residential and emergency plumbing services." },
  { slug: "lake-brownwood-tx", name: "Lake Brownwood, TX", lat: 31.8089, lng: -99.0175, population: "1,200+", isPrimary: false, description: "Lake homes require specialized plumbing expertise we've developed over decades." },
  { slug: "zephyr-tx", name: "Zephyr, TX", lat: 31.9261, lng: -99.0314, population: "200+", isPrimary: false, description: "Rural Zephyr properties receive the same quality service as our city customers." },
  { slug: "blanket-tx", name: "Blanket, TX", lat: 31.8011, lng: -98.9361, population: "400+", isPrimary: false, description: "Extended service coverage for Blanket and surrounding rural areas." },
  { slug: "may-tx", name: "May, TX", lat: 31.9875, lng: -98.9238, population: "300+", isPrimary: false, description: "Serving May with professional plumbing services and emergency response." },
  { slug: "brookesmith-tx", name: "Brookesmith, TX", lat: 31.7204, lng: -99.1226, population: "100+", isPrimary: false, description: "Brown County community with dedicated plumbing support." },
  { slug: "comanche-tx", name: "Comanche, TX", lat: 31.8968, lng: -98.6058, population: "4,200+", isPrimary: false, description: "Extended coverage into Comanche County for comprehensive plumbing services." },
  { slug: "coleman-tx", name: "Coleman, TX", lat: 31.8296, lng: -99.4259, population: "4,000+", isPrimary: false, description: "Coleman County residents can rely on trusted plumbing expertise." },
];

export const testimonials = [
  { name: "Sarah J.", city: "Brownwood, TX", rating: 5, text: "Mike and his team came out the same day for a major leak under our slab. Honest pricing, clean work and they treated our home with respect. Hands down the best plumber in Brownwood.", date: "2024-03-15", service: "Slab Leak Repair" },
  { name: "David R.", city: "Early, TX", rating: 5, text: "Called late at night with a burst pipe. They answered immediately and were at the house within the hour. 35 years of experience really shows — fixed right the first time.", date: "2024-02-20", service: "Emergency Plumbing" },
  { name: "Linda M.", city: "Lake Brownwood, TX", rating: 5, text: "We had M. Webb replace our entire water line. Professional from quote to cleanup. Fair price and zero surprises. Highly recommend.", date: "2024-01-10", service: "Water Line Replacement" },
  { name: "James T.", city: "Bangs, TX", rating: 5, text: "Installed a hot water recirculation pump and now we have instant hot water everywhere. Couldn't be happier with the service.", date: "2023-12-05", service: "Hot Water Recirculation" },
  { name: "Karen W.", city: "Zephyr, TX", rating: 5, text: "Knowledgeable, on time, and reasonably priced. Mike explained everything in plain English. Our go-to plumber from now on.", date: "2023-11-18", service: "General Plumbing" },
  { name: "Robert P.", city: "Brownwood, TX", rating: 5, text: "Commercial plumbing for our restaurant — got us back open quickly with minimal disruption. Truly a local company you can count on.", date: "2023-10-22", service: "Commercial Plumbing" },
  { name: "Mary S.", city: "Early, TX", rating: 5, text: "They installed our new tankless water heater and the difference is amazing. Professional, clean, and knowledgeable about all the options.", date: "2023-09-14", service: "Tankless Water Heater" },
  { name: "Tom H.", city: "Brownwood, TX", rating: 5, text: "Had them out for a drain camera inspection before buying our house. Found issues the seller had to fix. Saved us thousands.", date: "2023-08-30", service: "Plumbing Inspection" },
];

export const faqs = [
  {
    question: "Do you offer 24-hour emergency plumbing in Brownwood, TX?",
    answer: "Yes. M. Webb Plumbing Co. provides 24-hour on-call emergency plumbing services for burst pipes, major leaks, overflowing fixtures and other urgent issues across Brownwood, Early, Bangs, Lake Brownwood, Zephyr and all of Brown County, TX. Call (325) 328-0435 anytime.",
    category: "Emergency",
  },
  {
    question: "How quickly can a plumber arrive at my home?",
    answer: "We pride ourselves on fast response times. Most emergency calls in Brownwood and surrounding areas are answered the same day, with many serviced within the hour. For scheduled appointments, we offer convenient time windows.",
    category: "Service",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes — M. Webb Plumbing Co. LLC is fully licensed and insured for both residential and commercial plumbing work in Texas. We've been serving Brown County for over 35 years with an impeccable safety and quality record.",
    category: "Company",
  },
  {
    question: "How much does a plumbing repair cost?",
    answer: "Pricing depends on the issue. We give honest, upfront estimates before any work begins — no surprises. For simple repairs, we can often provide a quote over the phone. For complex issues, we offer free in-home estimates. Call (325) 328-0435 for a free estimate.",
    category: "Pricing",
  },
  {
    question: "Do you handle commercial plumbing?",
    answer: "Absolutely. We service offices, restaurants, retail spaces and industrial properties throughout Brownwood and Brown County. We understand that commercial downtime costs money, so we respond quickly and work efficiently.",
    category: "Commercial",
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Brownwood, Early, Bangs, Lake Brownwood, Zephyr, Blanket, May, Brookesmith, Comanche, Coleman, and surrounding communities in Brown County and beyond. If you're unsure if we service your area, give us a call at (325) 328-0435.",
    category: "Service Areas",
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we stand behind our work. All repairs come with a workmanship warranty, and manufacturer warranties apply to parts and fixtures we install. We'll explain exactly what's covered before we begin any work.",
    category: "Guarantees",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, checks, and all major credit cards. For larger projects, we can discuss financing options. We always provide a clear, written estimate before starting any work.",
    category: "Payment",
  },
];

export const blogCategories = [
  { slug: "emergency-plumbing", name: "Emergency Plumbing", description: "Tips and advice for handling plumbing emergencies before help arrives." },
  { slug: "water-heaters", name: "Water Heaters", description: "Everything you need to know about water heater maintenance, repair, and replacement." },
  { slug: "drain-cleaning", name: "Drain Cleaning", description: "Prevent clogs and keep your drains flowing smoothly with these helpful tips." },
  { slug: "home-plumbing-tips", name: "Home Plumbing Tips", description: "Practical advice for maintaining your home's plumbing system." },
  { slug: "commercial-plumbing", name: "Commercial Plumbing", description: "Plumbing considerations for businesses and commercial properties." },
  { slug: "texas-plumbing", name: "Texas Plumbing Tips", description: "Region-specific plumbing advice for Texas homeowners." },
];