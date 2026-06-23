# Pavithran's House Requirements Presentation

This repo contains a static builder-facing requirements presentation.

## Owner Contact

- Pavithran
- +91 99409 90428
- pavithranvnktsh@gmail.com

## Open the presentation

Open `index.html` in a browser.

The page includes animated section reveals, a cropped half-side elevation hero, real-time-rendering inspired concept board, animated 2D plan sketch, theme switcher, notebook-style Page Flip presentation mode, floor-by-floor requirement blocks, coordination notes, system requirements, budget controls and a filterable reference gallery.

## Builder scope controls

The presentation now calls out:

- Biometric access control
- Unique elevation and pattern management
- Theme board and material sample approval
- 2D plans, 3D views and detailed sketch deliverables
- Exact line-item quote before starting work
- Furniture cost included in the budget plan
- Material schedule before procurement
- Stage-wise payment and progress checkpoints
- Cost variation approval process
- Quality inspection checkpoints

## Send as a document

Use the `Print / Save PDF` button in the top-right corner of the presentation, then save it as a PDF.

## Host as a website

This is a static site, so it can be hosted with GitHub Pages or any static hosting service by publishing the repository root.

## Deploy on AWS S3 + CloudFront

This repo now includes a GitHub Actions deployment pipeline in `.github/workflows/deploy-aws-static-site.yml`.

The action uses the IAM role `arn:aws:iam::182460208211:role/pavithran-personal-github-actions`, creates the Terraform state bucket, provisions a private S3 website bucket, attaches it to CloudFront through Origin Access Control, uploads the website files and invalidates the CloudFront cache.

AWS resources can create charges. S3 and CloudFront are normally low cost for a small static website, but they are not guaranteed free like GitHub Pages. Check AWS Billing and set a billing alert before running production traffic.

See `infra/README.md` for the required GitHub OIDC trust policy and role permissions.

## Files

- `index.html` - presentation structure
- `styles.css` - presentation styling and print layout
- `script.js` - floor sections, requirements and image gallery data
- `assets/references/` - copied reference images grouped into the presentation

All images are visual references only. The final design must be checked by the architect, structural engineer and builder against site measurements, local approvals, budget and services routing.
