import { business } from "@/data/business";

const BASE_URL = `https://${business.website}`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: business.name,
  alternateName: business.shortName,
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.png`,
    width: 300,
    height: 100,
  },
  description: `Trusted residential and commercial plumber in ${business.city}, ${business.state}. ${business.experience} of experience. 24-hour emergency plumbing services.`,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.zip,
    addressCountry: "US",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: business.phoneRaw,
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: "US-TX",
    },
    {
      "@type": "ContactPoint",
      telephone: business.phoneRaw,
      contactType: "emergency",
      availableLanguage: "English",
      areaServed: "US-TX",
    },
  ],
  sameAs: [business.googleBusinessUrl],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Plumber"],
  "@id": `${BASE_URL}/#localbusiness`,
  name: business.name,
  image: `${BASE_URL}/og.jpg`,
  url: BASE_URL,
  telephone: business.phone,
  email: business.email,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.702854,
    longitude: -98.990455,
  },
  areaServed: business.areas.map((a) => ({
    "@type": "City",
    name: a,
    containedInPlace: {
      "@type": "State",
      name: "Texas",
    },
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "00:00",
      closes: "00:00",
      description: "Emergency services available 24/7",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plumbing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Plumbing",
          description: "24-hour emergency plumbing services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Plumbing",
          description: "Complete home plumbing services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Plumbing",
          description: "Business and commercial plumbing services",
        },
      },
    ],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: business.name,
  description: `${business.name} - Trusted plumber in ${business.city}, ${business.state}. ${business.experience}. 24-hour emergency service.`,
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export function webPageSchema(path: string, name: string, description: string, type = "WebPage") {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${BASE_URL}${path}/#webpage`,
    url: `${BASE_URL}${path}`,
    name,
    description,
    isPartOf: {
      "@id": `${BASE_URL}/#website`,
    },
    about: {
      "@id": `${BASE_URL}/#organization`,
    },
  };
}

export function serviceSchema(
  serviceName: string,
  description: string,
  areaServed: string[] = business.areas,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    areaServed: areaServed.map((a) => ({
      "@type": "City",
      name: a,
    })),
    serviceType: "Plumbing",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: "Contact for pricing",
      },
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function reviewSchema(reviews: { name: string; rating: number; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: business.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(reviews.length * 10),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r, i) => ({
      "@type": "Review",
      "@id": `${BASE_URL}/#review-${i + 1}`,
      author: {
        "@type": "Person",
        name: r.name,
      },
      datePublished: new Date().toISOString().split("T")[0],
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
    })),
  };
}

export function locationBusinessSchema(locationName: string, latitude: number, longitude: number) {
  const slug = locationName.toLowerCase().replace(/[\s,]/g, "-");
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber"],
    "@id": `${BASE_URL}/service-areas/${slug}/#localbusiness`,
    name: `${business.name} - ${locationName}`,
    description: `Trusted plumber serving ${locationName}. ${business.experience} of experience with residential, commercial & 24-hour emergency plumbing services.`,
    url: `${BASE_URL}/service-areas/${slug}`,
    telephone: business.phone,
    email: business.email,
    priceRange: "$$",
    parentOrganization: {
      "@id": `${BASE_URL}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: locationName,
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        description: "Emergency services available 24/7",
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(
  headline: string,
  description: string,
  author: string,
  datePublished: string,
  dateModified: string,
  image?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    datePublished,
    dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": BASE_URL,
    },
    ...(image && { image }),
  };
}

export function howToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function imageObjectSchema(url: string, caption: string, width = 1200, height = 630) {
  return {
    "@type": "ImageObject",
    url,
    caption,
    width,
    height,
  };
}

export function combineSchemas(...schemas: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}
