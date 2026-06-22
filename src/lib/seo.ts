import { business } from "@/data/business";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: business.name,
  image: `https://${business.website}/og.jpg`,
  "@id": `https://${business.website}`,
  url: `https://${business.website}`,
  telephone: business.phone,
  email: business.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.zip,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 31.702854, longitude: -98.990455 },
  areaServed: business.areas.map((a) => ({ "@type": "City", name: a })),
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" },
  ],
};

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function reviewSchema(reviews: { name: string; rating: number; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(reviews.length),
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };
}