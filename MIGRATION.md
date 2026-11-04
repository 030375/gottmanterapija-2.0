# Gottman Terapija 2.0 — staging notes

Source project: https://github.com/030375/new-gotmansait

## Status

This is an isolated work-in-progress rebuild. Production Netlify and the live domain remain connected to the old repository. The `rebuild/staging-v1` branch contains a responsive Russian and Latvian landing page, a clean stylesheet, local optimized portrait image, four imported articles, an existing psychologist profile and privacy page, plus SEO metadata.

## Confirmed updates

- Online couples consultation: EUR 90 per 90 minutes.
- Address: Krišjāņa Barona iela 63, Rīga.
- Removed unverified claims of unique Gottman professional status from new homepage.
- Avoided representing Gottman Level 1 and 2 training as Certified Gottman Therapist accreditation.
- Kept other prices unpublished until confirmed because the legacy language versions disagree.

## Known limitations before any launch

- Some imported legacy articles, privacy and psychologist profile still have legacy styling and may link to missing files. They require redesign/QA.
- Some historical URLs are not migrated yet; preserve these with content or appropriate redirects before the production domain changes.
- Check the accuracy and consent for diplomas and testimonials; do not publish unverified success claims.
- Verify responsive rendering, link integrity, accessibility, privacy compliance, indexing and structured data in an isolated Netlify preview.
- Do not merge this staging branch to production or switch the live domain until reviewed.
