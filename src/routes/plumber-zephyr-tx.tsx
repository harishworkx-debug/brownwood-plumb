import { createFileRoute } from "@tanstack/react-router";
import { AreaPageShell } from "@/components/site/AreaPageShell";
import { business, serviceAreas } from "@/data/business";

const BASE_URL = `https://${business.website}`;

const areaContent: Record<string, { intro: string; long: string }> = {
  "brownwood-tx": {
    intro: "M. Webb Plumbing Co. is headquartered in Brownwood and has been the local plumber families and businesses count on for over 35 years.",
    long: "As your hometown plumber, we know Brownwood's older neighborhoods, newer developments, and everything in between. From slab leaks in homes near Coggin Park to commercial plumbing for downtown businesses, we've worked on practically every type of property in the city. When you call us, you get a true local — same-day service whenever possible, fair pricing, and work that holds up.",
  },
  "early-tx": {
    intro: "Early is right next door, and we treat it like our own backyard. Trusted residential and commercial plumbing service throughout Early, TX.",
    long: "We service homes and businesses across Early, TX with the same care and quality we bring to every Brownwood call. Whether you need a fast emergency response, a faucet replaced, or a full plumbing system upgrade, our crew is just minutes away.",
  },
  "bangs-tx": {
    intro: "Reliable plumbing service for Bangs, TX homeowners and businesses — fast response, fair prices, real local experience.",
    long: "Bangs deserves a plumber who actually shows up. We've been serving Bangs and the surrounding Brown County communities for decades, with the same honest workmanship locals have come to expect from M. Webb Plumbing Co.",
  },
  "lake-brownwood-tx": {
    intro: "Lake Brownwood properties come with their own plumbing challenges — long supply lines, well systems, lake homes. We know them all.",
    long: "From year-round residences to weekend lake houses, Lake Brownwood properties often need a plumber who understands their unique systems. We service the entire Lake Brownwood area with everything from routine repairs to full system replacements.",
  },
  "zephyr-tx": {
    intro: "Zephyr, TX residents trust M. Webb Plumbing Co. for prompt, professional plumbing service — rural, residential, or commercial.",
    long: "Out in Zephyr, having a plumber willing to come to you matters. We proudly serve Zephyr homes and properties with the full range of plumbing services — including 24-hour emergency response when you really need it.",
  },
  "blanket-tx": {
    intro: "Blanket, TX homeowners receive the same reliable plumbing service we've provided across Brown County for over 35 years.",
    long: "We've extended our service coverage to include Blanket and surrounding rural areas. Whether you need emergency repairs, routine maintenance, or new installations, our experienced team brings professional plumbing services right to your door.",
  },
  "may-tx": {
    intro: "Serving May, TX with professional plumbing services and emergency response for homes and businesses.",
    long: "Our experienced plumbers service the May area with everything from fixing drips and clearing drains to full system installations. We understand rural Texas properties and provide dependable plumbing solutions.",
  },
  "brookesmith-tx": {
    intro: "Brookesmith, TX receives dedicated plumbing support from M. Webb Plumbing Co.'s experienced team.",
    long: "As part of the Brown County community, Brookesmith residents can rely on us for all their plumbing needs. We provide prompt service, fair pricing, and quality workmanship on every job.",
  },
  "comanche-tx": {
    intro: "Comanche, TX residents receive trusted plumbing services from the team that's served Central Texas for over 35 years.",
    long: "We've expanded our service area to include Comanche County, bringing the same quality workmanship and honest service to more Central Texas homes and businesses. From water heater repairs to commercial plumbing, we're here when you need us.",
  },
  "coleman-tx": {
    intro: "Coleman, TX homeowners and businesses get reliable plumbing service from a company with 35+ years of experience.",
    long: "Serving Coleman County, we handle residential and commercial plumbing with the same care and professionalism we've brought to every job since 1990. Emergency service, repairs, and installations are all part of what we do.",
  },
  "santa-anna-tx": {
    intro: "Santa Anna, TX residents receive trusted plumbing services from the team that's served Central Texas for over 35 years.",
    long: "We've expanded our service coverage to Santa Anna and throughout Coleman County, bringing the same honest workmanship and reliable service to every call. Whether you need emergency repairs, drain cleaning, or water heater service, we're here when you need us.",
  },
  "rising-star-tx": {
    intro: "Rising Star, TX homeowners receive the same reliable plumbing service we've provided across Central Texas for over 35 years.",
    long: "Serving Rising Star and Eastland County, we bring professional plumbing expertise to rural Texas properties. From emergency repairs to routine maintenance, our experienced team provides the same quality workmanship and fair pricing we're known for throughout the region.",
  },
};

const defaultContent = {
  intro: "Trusted plumbing services for homes and businesses from M. Webb Plumbing Co. — over 35 years serving Central Texas.",
  long: "We're proud to extend our professional plumbing services throughout Central Texas. Whether you need emergency repairs, routine maintenance, or new installations, our experienced team brings the same quality workmanship and fair pricing to every job.",
};

const area = serviceAreas.find(a => a.slug === "zephyr-tx")!;
const content = areaContent["zephyr-tx"] || defaultContent;

export const Route = createFileRoute("/plumber-zephyr-tx")({
  head: () => {
    const title = `Plumber in ${area.name} | M. Webb Plumbing Co.`;
    const desc = `Expert plumbers serving ${area.name}, TX. 35+ years. Residential & 24-hour emergency plumbing company. Fast response, fair prices. Call (855) 321-3189 now.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: `plumber ${area.name}, plumbing services ${area.name}, emergency plumber ${area.name}, local plumber ${area.name} tx` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `${BASE_URL}/plumber-zephyr-tx` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `${BASE_URL}/plumber-zephyr-tx` }],
    };
  },
  component: () => <AreaPageShell area={area} content={content} />,
});
