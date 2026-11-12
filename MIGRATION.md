# Gottman Terapija 2.0 — SEO/LLM and release checklist

## Repository and current status
- Working branch: `rebuild/staging-v1` (PR #1 to `main`).
- Domain: https://gottmanterapija.lv/ — production is **not** updated by staging commits alone.
- Previous known-good staging baseline: `a50bc4cd57249df9036ca2275cfa96d39ed3db85`.

## Canonical practice facts
- Psychologist: Ksenija Bodrihina (Ksēnija Bodrihina / Ксения Бодрихина).
- Latvian psychologist professional certification: 1300777; RSU education.
- Gottman training: Method Couples Therapy Level 1, Level 2 and Treating Affairs and Trauma; NOT Certified Gottman Therapist.
- Couples online: EUR 90 / 90 min. Couples in person: EUR 100 / 90 min by appointment.
- Individual online: EUR 50 / 60 min. Young couples where both are under 24: EUR 80 / 90 min in person by appointment.
- Practice address: Krišjāņa Barona iela 63, Rīga.
- Consultation languages: Russian, Latvian. Main profile URL: /psiholog; Latvian profile: /lv/psihologs.

## 2026-11-06 changes and why
- Replaced unsupported exclusivity and precise 4–8-session performance claims on main landing pages.
- Added people-first copy on helping couples improve relations, clarify choices, or separate with more respectful communication.
- Added a standalone article about separation and an entry in the article catalog, sitemap and LLM content.
- Replaced the Russian duplicate at /lv/Psihologs.html with a genuinely Latvian-language profile, accurate service prices and local image.
- Made website-person/service links more coherent, including reciprocal profile hreflang and no irrelevant Latvian method-page alternate.
- Removed /privacy.html from sitemap because its page carries noindex; canonical/description added to two previously weak article pages.
- robots.txt allows crawling including OAI-SearchBot. llms.txt is supportive context, not a search ranking mechanism.
- Kept all 30 lessons in /game/, with optional 3-question route and WhatsApp contact.

## Release prerequisites (not completed automatically)
1. Deploy an isolated Netlify preview, inspect RU/LV pages on mobile and desktop, test all forms, links and CTA actions.
2. Manually review the Latvian-language page and the new article with the psychologist before publishing.
3. Verify owner approval, actual source, privacy consent and accuracy of every testimonial currently visible on the site (including claims like "6 sessions").
4. Review privacy.html: it describes cookies/analytics and third-party processors; ensure wording matches the actual scripts and current legal requirements.
5. Verify legacy redirects, image loading, canonical routes and working HTML/static files after build.
6. Google Search Console: verify site ownership, submit /sitemap.xml and monitor indexed pages, canonical reports, queries and Core Web Vitals after release.
7. Google Business Profile: complete and verify address/category/hours, and seek voluntary genuine reviews without pressure or incentives.
8. Validate structured data with https://validator.schema.org/; do not add self-serving aggregate rating rich-result markup.
9. Inspect residual CDN dependencies in older profile/article pages. The obsolete /intensiv.html shell (missing built assets) was removed; forced Netlify redirect to /#services is retained.

No SEO edits can guarantee ranking #1 or make an AI assistant recommend a practice.
