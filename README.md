# Personal Portfolio — Thomas Tu

Personal portfolio website built with a **Tech-focused & Cyberpunk Minimalist** design, showcasing backend and cloud engineering projects. Live at [tooltu.io.vn](https://tooltu.io.vn).

---

## Tech Stack

### Frontend
| Technology | Usage |
|---|---|
| Next.js 16 (App Router) | Framework, static export |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icons |

### Infrastructure (AWS)
| Service | Usage |
|---|---|
| S3 | Static file hosting (origin) |
| CloudFront | CDN, HTTPS termination, edge caching |
| ACM | SSL/TLS certificate (us-east-1) |
| Route53 | DNS management |
| IAM | Least-privilege access for CI/CD |

### CI/CD
| Tool | Usage |
|---|---|
| GitHub Actions | Automated build & deploy pipeline |
| AWS CLI | S3 sync + CloudFront invalidation |

---

## Architecture

```
GitHub (push to main)
        │
        ▼
GitHub Actions
  ├── npm ci && npm run build   → generates out/
  ├── aws s3 sync out/ → S3     → upload static files
  └── CloudFront invalidation   → clear CDN cache
        │
        ▼
S3 Bucket (private, OAC)
        │
        ▼
CloudFront Distribution (HTTPS, global CDN)
        │
        ▼
Route53 (DNS) → tooltu.io.vn
```

**Security model:** S3 bucket is fully private. CloudFront accesses S3 via **Origin Access Control (OAC)** — no public bucket policy required.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css         # Dark theme, JetBrains Mono, grid/glow effects
│   ├── layout.tsx          # Root layout, SEO metadata
│   └── page.tsx            # Home page — assembles all sections
└── components/
    ├── Navigation.tsx      # Sticky header, active section tracking
    ├── HeroSection.tsx     # Typewriter effect, CTA buttons
    ├── AboutSection.tsx    # 2-column: personal intro + career objectives
    ├── SkillsSection.tsx   # Skill cards grouped by category
    ├── ProjectsSection.tsx # Project cards with tech tags + links
    ├── ContactSection.tsx  # Quick links: GitHub, LinkedIn, Email
    ├── Footer.tsx
    └── ui/
        └── SectionHeader.tsx
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Build for production (static export)
npm run build
# → output in out/
```

---

## Deployment

The site is deployed as a **static website** on AWS using the following setup:

### 1. Next.js Static Export

`next.config.ts` is configured to output static HTML/CSS/JS:

```ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};
```

### 2. S3 Bucket

- Private bucket (no public access)
- CloudFront connects via **OAC** — bucket policy grants access only to the specific CloudFront distribution

### 3. CloudFront

- Origin: S3 bucket (REST endpoint, not website endpoint)
- HTTPS enforced (HTTP → HTTPS redirect)
- Custom error pages: 403/404 → `/index.html` with status 200 (required for SPA routing)
- Alternate domain: `tooltu.io.vn`
- SSL certificate from ACM (us-east-1)

### 4. Route53

- Public hosted zone for `tooltu.io.vn`
- A record (Alias) → CloudFront distribution

### 5. CI/CD Pipeline

On every push to `main`, GitHub Actions:

1. Builds the project (`npm run build`)
2. Syncs static assets to S3 with **split cache strategy**:
   - JS/CSS files → `cache-control: max-age=31536000, immutable` (1 year, safe due to content hash in filenames)
   - HTML files → `cache-control: no-cache` (always revalidate to pick up latest version)
3. Invalidates CloudFront cache (`/*`) so users get the new version immediately

### Required GitHub Secrets

| Secret | Description |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret key |
| `AWS_REGION` | AWS region (e.g. `ap-southeast-1`) |
| `S3_BUCKET` | S3 bucket name |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID |

