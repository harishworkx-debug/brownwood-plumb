# 🚀 SEO & Lead Generation Optimization Guide

## Overview
This website has been optimized for **local search ranking** and **lead generation** for M. Webb Plumbing Co. The focus is on making the site rank at the top for local plumbing searches in Brownwood, TX and nearby areas.

---

## ✅ Implemented Optimizations

### 1. **Local Business Schema Markup**
- Added `locationBusinessSchema()` function in `/src/lib/seo.ts`
- Each service area page now includes structured data with:
  - Business name and location details
  - Phone number and email
  - Operating hours (including 24/7 emergency)
  - Geographic coordinates for geo-targeting
  - Area served information
  
**Impact**: Google can now better understand the business details and show them in local search results and Google Maps.

### 2. **Service Area Page Optimization**
- Location-specific pages at `/service-areas/$slug` now include:
  - **Title tags** with "Plumber in [City], TX" format
  - **Meta descriptions** with local keywords and phone number
  - **Keywords** targeting: "plumber [city]", "emergency plumber", "24 hour", "local"
  - **Geographic coordinates** for each location
  - **LocalBusiness schema** with location data
  
**Coverage**: Brownwood, Early, Bangs, Lake Brownwood, Zephyr

### 3. **Homepage Keyword Optimization**
- Added keywords: "plumber brownwood tx", "emergency plumber", "24 hour plumber", "near me"
- Clear messaging about 35+ years of experience
- Multiple CTAs (Call Now, Free Estimate)
- Marquee strip showing all service areas

### 4. **Service Page Optimization**
Updated pages with local keywords:
- **Emergency Plumbing**: "24 hour emergency plumber", "burst pipe", "emergency service"
- **Residential Plumbing**: "home plumber", "water heater repair", "drain cleaning"
- **Commercial Plumbing**: "restaurant plumber", "office plumbing", "commercial service"

### 5. **Contact & Lead Capture**
- Contact page title includes "FREE Estimate" for click-through rates
- Large visible phone number and CTA buttons
- Contact form captures: Name, Phone, Email, Service Type, Message
- Form integrates with lead management system

### 6. **Call-to-Action (CTA) Strategy**
**Floating CTA** (always visible):
- Mobile: Two buttons at bottom (Call Now, Free Estimate)
- Desktop: Floating buttons on right side

**Hero Section CTAs**:
- Prominent "Call Now" button with phone number
- Secondary "Free Estimate" button
- Phone number clickable via `tel:` link

**Service Area Cards**:
- Location name now clickable as internal link
- Direct call button
- Free estimate button

### 7. **SEO Technical Setup**

#### Robots.txt
- Added sitemap reference
- Proper crawl-delay settings
- Special rules for Google bots (no delay)
- Disallow rules for API endpoints

#### Sitemap
- Auto-generated at `/sitemap.xml`
- Includes all pages with proper priority:
  - Homepage: 1.0
  - All other pages: 0.8
- Weekly change frequency
- Cache control headers set

#### Canonical Tags
- Every page has canonical URL
- Prevents duplicate content issues

#### Schema Markup
- LocalBusiness schema on homepage
- LocalBusiness schema with location details on service area pages
- FAQPage schema on relevant pages
- Review/Rating schema from testimonials

### 8. **Internal Linking**
- Service area cards link to service-areas/$slug pages
- Service area pages link to individual service pages
- Navigation menu links to all main service categories
- Footer has links to all service areas
- Breadcrumb structure in content

---

## 📱 Lead Generation Features

### 1. **Multiple Contact Methods**
- **Phone**: (325) 328-0435 (clickable everywhere)
- **Form**: Online free estimate form
- **Email**: webbplumbing@verizon.net
- **Map**: Embedded Google Map on contact page

### 2. **Lead Capture Form**
Located on:
- `/contact` page (full form)
- Service area pages (compact form in hero)
- Floating CTA links to `/contact`

Form captures:
- Full Name (required)
- Phone Number (required)
- Email (optional)
- Service Type (dropdown)
- Message (optional)

### 3. **Urgency & Trust Signals**
- "24-Hour Emergency Service" prominently displayed
- "35+ Years Experience" badge on header and pages
- Five-star reviews/testimonials on homepage
- "Licensed & Insured" messaging
- "Same-Day Service" availability mentioned

---

## 🎯 Keyword Strategy

### Primary Keywords
- "plumber brownwood tx"
- "emergency plumber"
- "24 hour plumber"
- "local plumber near me"
- "residential plumber"
- "commercial plumber"

### Location-Based Keywords
- "plumber in [City], TX" (for each service area)
- "emergency plumber [City], TX"
- "[City] plumbing service"

### Service-Based Keywords
- "emergency plumbing"
- "leak detection"
- "water line repair"
- "faucet repair"
- "plumbing inspections"
- "plumbing system replacement"
- "hot water recirculation pump"

---

## 📊 Performance Metrics to Track

### SEO Metrics
1. **Google Rankings**
   - Track position for target keywords
   - Monitor local pack presence (Google Maps)

2. **Organic Traffic**
   - Monthly visitors to the site
   - Traffic by service area pages
   - Bounce rate by page type

3. **Search Console Data**
   - Impressions (how often you appear in search)
   - CTR (click-through rate from search results)
   - Position (average ranking)

### Lead Metrics
1. **Form Submissions**
   - Total monthly submissions
   - By service type
   - By source page

2. **Phone Calls**
   - Track with call tracking number
   - Peak hours/days
   - Conversion to actual jobs

3. **Lead Quality**
   - Local leads vs. out-of-area
   - Service type distribution
   - Conversion rate to bookings

---

## 🔧 Maintenance & Updates

### Monthly Tasks
- [ ] Check Google Search Console for new keywords
- [ ] Monitor competitor rankings
- [ ] Review new testimonials and add to site
- [ ] Check for broken links

### Quarterly Tasks
- [ ] Update meta descriptions with seasonal keywords
- [ ] Add new service area content if expanding
- [ ] Review and update testimonials
- [ ] Check page speed with PageSpeed Insights
- [ ] Verify all CTAs are working

### As Needed
- [ ] Add new service offerings
- [ ] Update pricing if changed
- [ ] Add seasonal promotions
- [ ] Expand to new service areas

---

## 📈 Next Steps (Future Enhancements)

### 1. **Google My Business Optimization**
- Complete GMB profile with photos
- Regular posts about services
- Respond to reviews
- Add service photos

### 2. **Local Citations**
- List on:
  - Yelp
  - Angie's List
  - Better Business Bureau (BBB)
  - Local business directories
  - HomeAdvisor

### 3. **Review Management**
- Encourage customers to leave reviews
- Respond to all reviews
- Feature best reviews on website

### 4. **Local Content**
- Blog posts about local neighborhoods
- "Plumbing Tips for [City]" type content
- Case studies from local projects

### 5. **Call Tracking**
- Implement call tracking number
- Track which keywords/pages drive calls
- Measure call duration and outcomes

### 6. **Advanced Analytics**
- Implement Google Analytics 4
- Set up conversion tracking
- Create custom reports for leads

---

## 🔍 SEO File Structure

```
src/
├── lib/
│   └── seo.ts                    # Schema markup functions
├── routes/
│   ├── __root.tsx               # Root layout + global schema
│   ├── index.tsx                # Homepage + FAQ schema
│   ├── contact.tsx              # Contact form + CTA
│   ├── service-areas.tsx        # All service areas
│   ├── service-areas.$slug.tsx  # Individual area pages
│   ├── emergency-plumbing.tsx   # Service page example
│   ├── residential-plumbing.tsx # Service page example
│   └── [other service pages]
├── components/
│   └── site/
│       ├── FloatingCTA.tsx      # Always-visible CTA
│       ├── CTABanner.tsx        # Section CTA
│       ├── JsonLd.tsx           # Schema rendering
│       └── Header.tsx           # Navigation + logo
├── data/
│   └── business.ts              # Business info + service areas
└── styles.css

public/
├── robots.txt                    # SEO crawling rules
└── google9c5e75eb680fa2cb.html   # Google verification
```

---

## 💡 Key Takeaways

1. **Local SEO is Critical** - Every page targets local keywords and includes location-specific schema
2. **Multiple CTAs** - Phone, form, and location-based options everywhere
3. **Trust Signals** - 35+ years, reviews, 24-hour service all prominent
4. **Mobile First** - Floating CTA and simplified forms for mobile users
5. **Schema Markup** - Helps Google understand business details and show in rich snippets
6. **Internal Linking** - Service areas link to services, services link back
7. **Lead Capture** - Multiple touchpoints for lead generation (phone, form, direct contact)

---

**Last Updated**: 2026-06-24
**Status**: Fully Optimized ✅
