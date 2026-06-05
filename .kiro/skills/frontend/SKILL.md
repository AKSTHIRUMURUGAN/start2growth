# Additional Enterprise-Level Skill Extensions

---

# Updated Tech Stack Extensions

## Advanced UI Systems

| Library              | Purpose                         | Usage Rule                                                       |
| -------------------- | ------------------------------- | ---------------------------------------------------------------- |
| Motion Primitives    | Premium interactive UI patterns | Use only for advanced luxury interactions and immersive sections |
| Framer Motion        | Core animation engine           | Primary animation system                                         |
| GSAP + ScrollTrigger | Complex scroll choreography     | Use only for cinematic scroll storytelling                       |

---

## Media & CDN Pipeline

| Service       | Purpose                                    | Usage Rule                                                          |
| ------------- | ------------------------------------------ | ------------------------------------------------------------------- |
| Cloudinary    | CDN image optimization and transformations | Use for responsive image delivery, compression, format optimization |
| Cloudflare R2 | File attachment and media storage          | Use for uploads, inquiry attachments, admin media handling          |

### File Handling Rules

* Store uploaded media in Cloudflare R2
* Never store raw uploads directly inside project
* Generate signed upload URLs when possible
* Optimize all uploaded assets before delivery
* Use CDN caching aggressively

---

## Forms & Validation

| Library         | Purpose                       | Usage Rule                         |
| --------------- | ----------------------------- | ---------------------------------- |
| React Hook Form | Form state management         | Use for all production forms       |
| Zod             | Validation and schema parsing | Use for client + server validation |

### Form Standards

* Validate both client and server side
* Show elegant inline validation states
* Never allow layout shift during errors
* Use optimistic loading states
* Forms must feel premium and frictionless

---

## Email System

| Service                   | Purpose             | Usage Rule                              |
| ------------------------- | ------------------- | --------------------------------------- |
| Nodemailer                | SMTP email delivery | Use for inquiry forms and notifications |
| Gmail SMTP + App Password | Authentication      | Use secure environment variables only   |

### Email Rules

* Use branded HTML templates
* Elegant typography and spacing
* Mobile responsive email layouts
* Include inquiry summary cards
* Add anti-spam protection

---

## Payment Integration

| Service  | Purpose                                         |
| -------- | ----------------------------------------------- |
| Razorpay | Secure payments, booking advances, reservations |

### Payment UX Rules

* Payment flow must feel premium and trustworthy
* Use clean minimal checkout UI
* Never overwhelm users with technical payment details
* Include elegant success/failure states
* Mobile payment experience must be seamless

---

## State & Data Management

| Library        | Purpose                       | Usage Rule                                    |
| -------------- | ----------------------------- | --------------------------------------------- |
| Zustand        | Lightweight global state      | Use only when shared state is truly required  |
| TanStack Query | Async server state management | Use only for API caching, fetching, mutations |

### Important Rule

Do NOT use every library everywhere.

Always:

* prefer native React state first
* keep architecture minimal
* introduce libraries only when complexity genuinely requires them

---

# Luxury Experience Engineering Principles

Every interaction must communicate craftsmanship.

Users should feel:

* calm
* trust
* anticipation
* elegance
* celebration

The interface should never feel:

* rushed
* loud
* template-generated
* overly technical
* crowded

Motion should feel:

* cinematic
* physically believable
* emotionally timed

Spacing should create:

* breathing room
* premium perception
* visual confidence

Typography should:

* guide emotional pacing
* create atmosphere
* enhance storytelling

---

# Enterprise Animation Principles

## Motion Budget Rules

* Maximum 2-3 major animations visible per viewport
* Avoid constant competing motion
* Motion should support hierarchy, not distract

---

## Animation Priority Hierarchy

### Priority Levels

| Priority | Purpose                  |
| -------- | ------------------------ |
| Level 1  | Navigation clarity       |
| Level 2  | User feedback            |
| Level 3  | Storytelling enhancement |
| Level 4  | Decorative ambiance      |

Higher-priority animations must always remain visually dominant.

---

## Interaction Latency Targets

| Interaction           | Target        |
| --------------------- | ------------- |
| Hover response        | under 100ms   |
| Button feedback       | under 80ms    |
| Page transitions      | 300ms-600ms   |
| Scroll animation sync | 60fps minimum |

---

## GPU Compositing Rules

Always animate:

* transform
* opacity
* filter (sparingly)

Never animate:

* width
* height
* left
* top
* margin

Use:

```css id="f2m1cd"
transform: translate3d(0,0,0);
will-change: transform;
```

only during active animation periods.

---

# Premium Mobile UX Rules

Mobile experience must feel intentionally designed — not compressed desktop UI.

---

## Thumb-Zone Navigation

* Critical interactions must remain reachable within natural thumb zones
* Primary CTA placement should prioritize one-hand usage
* Avoid placing critical actions in unreachable corners

---

## Reduced Motion Handling

* Automatically reduce heavy effects on low-power devices
* Respect:

```css id="97mv5v"
prefers-reduced-motion
```

* Disable excessive parallax on mobile

---

## Mobile-First Cinematic Sections

* Hero sections must retain cinematic quality on mobile
* Prioritize vertical storytelling layouts
* Use immersive typography scaling
* Maintain luxury spacing even on smaller screens

---

## Gesture Interactions

Use subtle:

* swipe galleries
* drag interactions
* momentum scrolling
* touch feedback

Avoid:

* gimmicky gestures
* excessive swipe dependencies

---

## Bottom Sheet Interactions

Use bottom-sheet UX for:

* inquiry forms
* booking flows
* mobile navigation
* quick actions

Bottom sheets should feel:

* smooth
* layered
* premium
* native-like

---

# Advanced SEO / GEO / AEO

This architecture must be optimized for:

* search engines
* AI retrieval systems
* answer engines
* generative AI crawlers

---

## llms.txt Support

Create:

```bash id="j7g2uv"
/public/llms.txt
```

Include:

* business summary
* service structure
* crawl-friendly references
* AI-readable architecture

---

## AI Crawler Optimization

Allow:

* GPTBot
* ClaudeBot
* PerplexityBot
* Google Extended
* Amazonbot
* Applebot

Optimize:

* robots.txt
* sitemap.xml
* semantic page structure

---

## Semantic Chunking

Content must be chunked into:

* clearly titled sections
* scannable semantic blocks
* retrieval-friendly layouts

Every section should answer:

* what
* why
* how

clearly.

---

## Retrieval-Friendly Content

Use:

* semantic HTML
* structured headings
* FAQ sections
* concise answer blocks
* structured lists

Avoid:

* giant text walls
* vague sections
* poor heading structure

---

## FAQ Embeddings

Create rich FAQ sections targeting:

* conversational search
* AI answer retrieval
* voice search
* local intent queries

Use:

* FAQ schema
* concise direct answers
* semantic question structures

---

## Knowledge Graph Structure

Implement:

* Organization schema
* LocalBusiness schema
* Service schema
* Breadcrumb schema
* FAQ schema

Maintain consistent:

* business naming
* service naming
* location references

across the entire site.

---

# Image Direction Rules

Extremely important for luxury hospitality brands.

---

## Visual Direction Principles

Images must feel:

* cinematic
* emotional
* authentic
* editorial
* luxurious

Avoid:

* generic stock feeling
* fake AI aesthetics
* oversaturated colors
* unrealistic food textures
* cheap commercial visuals

---

## Required Visual Characteristics

### Warm Cinematic Color Grading

Use:

* warm highlights
* deep shadows
* soft contrast
* subtle golden ambience

Avoid:

* cold corporate tones
* oversaturated neon palettes

---

## 35mm Depth-of-Field References

Images should emulate:

* 35mm cinematic photography
* shallow depth of field
* premium lens compression
* natural focus falloff

---

## Human Emotion Framing

Focus on:

* genuine smiles
* celebration moments
* hospitality interactions
* emotional storytelling

Images should feel lived-in and real.

---

## Authentic Indian Luxury Aesthetic

Include:

* elegant Indian wedding styling
* premium cultural authenticity
* luxury hospitality presentation
* realistic decor materials
* refined traditional-modern fusion

Avoid:

* stereotypical visuals
* exaggerated cultural styling
* artificial AI-generated faces

---

## Real-Event Storytelling

Visuals should resemble:

* documentary photography
* editorial luxury magazines
* cinematic event storytelling

Never feel like:

* stock catalog imagery
* fake staged renders
* generic AI outputs

---

# AI Media Resource Pipeline

Whenever an image or video is needed:

1. Use placeholders during development
2. Generate professional prompts
3. Store prompts in:

```bash id="3n30wz"
/resources/resource.txt
```

4. User generates assets
5. Assets added into `/public`
6. UI automatically upgrades from placeholder to final asset

---

## Placeholder Logic

Always support:

```tsx id="t1kof0"
src={
  imageExists
    ? "/images/luxury-catering-hero.webp"
    : "/placeholders/hero-placeholder.webp"
}
```

Never block UI development waiting for assets.

---

## Prompt Standards

Every generated prompt must include:

* cinematic lighting
* emotional atmosphere
* luxury composition
* realistic materials
* 35mm photography style
* depth of field
* Indian luxury hospitality aesthetic
* premium editorial look

---

## Resource File Rules

Every asset entry must contain:

* file name
* dimensions
* background type
* usage location
* AI generation prompt
* optimization notes

---

# Final Philosophy

The website should never feel:

* AI-template generated
* generic
* visually crowded
* motion overloaded
* technically cold

The experience must feel:

* handcrafted
* cinematic
* emotionally premium
* luxury branded
* performance optimized
* world-class
