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
  phone: "(325) 728-4690",
  phoneRaw: "+13257284690",
  email: "webbplumbing@verizon.net",
  website: "www.mwebbplumbingco.com",
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
  { slug: "emergency-plumbing-brownwood-tx", title: "Emergency Plumbing", icon: "Siren", blurb: "24-hour urgent response for burst pipes, major leaks and plumbing disasters across Brownwood, TX.", category: "emergency" },
  { slug: "residential-plumbing-brownwood-tx", title: "Residential Plumbing", icon: "Home", blurb: "Trusted home plumbing for repairs, replacements, fixtures and full-house service.", category: "residential" },
  { slug: "water-heaters-brownwood-tx", title: "Water Heaters", icon: "Flame", blurb: "Fast repairs, tankless upgrades, and recirculation pumps to restore your hot water.", category: "residential" },
  { slug: "drain-and-sewer-brownwood-tx", title: "Drain & Sewer Services", icon: "Drill", blurb: "Professional drain cleaning, camera inspections, and sewer line repair.", category: "residential" },
  { slug: "piping-and-leaks-brownwood-tx", title: "Piping & Leak Services", icon: "Droplets", blurb: "Non-invasive leak detection, pipe repair, and full system replacement.", category: "repair" },
  { slug: "kitchen-and-bathroom-brownwood-tx", title: "Kitchen & Bathroom Plumbing", icon: "Bath", blurb: "Complete service for faucets, toilets, garbage disposals, and fixtures.", category: "residential" },
  { slug: "gas-line-repair-brownwood-tx", title: "Gas Line Repair", icon: "AlertTriangle", blurb: "Gas line repair and installation services with safety as the top priority.", category: "repair" },
  { slug: "water-softener-brownwood-tx", title: "Water Softeners", icon: "Droplet", blurb: "Water softener installation and service to address hard water issues.", category: "residential" },
  { slug: "plumbing-inspections-brownwood-tx", title: "Plumbing Inspections", icon: "ClipboardCheck", blurb: "Pre-purchase and preventive inspections that catch problems early.", category: "inspection" },
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
  { slug: "santa-anna-tx", name: "Santa Anna, TX", lat: 31.7388, lng: -99.4595, population: "1,100+", isPrimary: false, description: "Serving Santa Anna and Coleman County with trusted plumbing expertise." },
  { slug: "rising-star-tx", name: "Rising Star, TX", lat: 32.0965, lng: -98.9656, population: "800+", isPrimary: false, description: "Rising Star homeowners receive reliable residential and emergency plumbing services." },
];

export const testimonials = [
  { name: "Jeff Calhoun", city: "Brownwood, TX", rating: 5, text: "Very proficient with utmost integrity. Mike Webb runs a tight and respectable business. Highly recommended.", date: "2018-06-15", service: "Plumbing Service" },
  { name: "Becky Diehl", city: "Brownwood, TX", rating: 5, text: "Real professional.  Good experience.", date: "2019-06-15", service: "Plumbing Service" },
  { name: "Cain Chesnut", city: "Brownwood, TX", rating: 5, text: "Great group to work with.", date: "2019-06-15", service: "Plumbing Service" },
  { name: "Emily Bilbrey", city: "Brownwood, TX", rating: 5, text: "", date: "2019-06-15", service: "Plumbing Service" },
];

export const faqs = [
  {
    question: "Do you offer 24-hour emergency plumbing in Brownwood, TX?",
    answer: "Yes. We provide 24-hour emergency plumbing services for burst pipes, major leaks, overflowing fixtures and other urgent issues across Brownwood, Early, Bangs, Lake Brownwood, Zephyr and all of Brown County, TX. Call (325) 728-4690 anytime.",
    category: "Emergency",
  },
  {
    question: "What should I do during a plumbing emergency?",
    answer: "The first step during any plumbing emergency is to shut off the main water valve to prevent further flooding or water damage. Once the water is shut off, call an emergency plumber immediately.",
    category: "Emergency",
  },
  {
    question: "Does M. Webb Plumbing provide residential plumbing?",
    answer: "Yes, we specialize in residential plumbing services. From routine maintenance, sink repair, and toilet installation to full house pipe repair and plumbing inspections, we handle all homeowner plumbing needs.",
    category: "Service",
  },
  {
    question: "What are the signs of a failing water heater?",
    answer: "Signs that you need water heater repair include rusty or discolored water, strange rumbling noises from the tank, leaking around the base, or simply having no hot water. Contact us for a quick diagnosis.",
    category: "Service",
  },
  {
    question: "How do I know if I have a hidden water leak?",
    answer: "Unexplained increases in your water bill, damp spots on walls or ceilings, warm spots on your floor (a sign of a slab leak), or a constantly running water meter are strong indicators. We provide professional water leak detection.",
    category: "Service",
  },
  {
    question: "How quickly can a plumber arrive at my home?",
    answer: "We pride ourselves on fast response times. Most emergency calls in Brownwood and surrounding areas are answered the same day, with many serviced within the hour. For scheduled appointments, convenient time windows are often available.",
    category: "Service",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, M. Webb Plumbing Co. is fully licensed and insured for residential plumbing work in Texas.",
    category: "Company",
  },
  {
    question: "How much does a plumbing repair cost?",
    answer: "Pricing depends on the type of plumbing problem, materials, accessibility, and work required. We give honest, upfront estimates before any work begins — no surprises. Call (325) 728-4690 to request an assessment.",
    category: "Pricing",
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Brownwood, Early, Bangs, Lake Brownwood, Zephyr, Blanket, May, Brookesmith, Comanche, Coleman, and surrounding communities. If you're unsure if we are available in your area, give us a call at (325) 728-4690.",
    category: "Service Areas",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, checks, and major credit cards. We will provide a clear estimate before starting any work.",
    category: "Payment",
  },
];

export const blogCategories = [
  { slug: "emergency-plumbing", name: "Emergency Plumbing", description: "Tips and advice for handling plumbing emergencies before help arrives." },
  { slug: "water-heaters", name: "Water Heaters", description: "Everything you need to know about water heater maintenance, repair, and replacement." },
  { slug: "drain-cleaning", name: "Drain Cleaning", description: "Prevent clogs and keep your drains flowing smoothly with these helpful tips." },
  { slug: "home-plumbing-tips", name: "Home Plumbing Tips", description: "Practical advice for maintaining your home's plumbing system." },
  { slug: "texas-plumbing", name: "Texas Plumbing Tips", description: "Region-specific plumbing advice for Texas homeowners." },
];