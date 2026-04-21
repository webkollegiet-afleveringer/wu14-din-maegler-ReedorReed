# Din Mægler - Implementation Plan

## Project Overview

Build a pixel-accurate, UI-first Danish real estate website from the design mockups using reusable components first, then page assembly.

## Delivery Scope

1. Include:

- Full UI for all identified pages
- Static/local mock data
- Core UI interactions needed for design parity (modal open/close, filter UI state, form UI state)

2. Exclude for now:

- Real backend/API integration
- Production authentication
- Persistent favorites and server-side filtering

## Design System

### Color Tokens (From styles.css)

| Token          | Hex     | Usage                    |
| -------------- | ------- | ------------------------ |
| general-color1 | #ffffff | Base white surfaces      |
| general-color2 | #000000 | Base black text/icons    |
| general-color3 | #f21515 | Error/destructive accent |
| general-color4 | #15f26e | Success accent           |

| primary-color1 | #162a41 | Main brand navy (header/footer/buttons) |
| primary-color2 | #fa983a | Main orange CTA/accent |
| primary-color3 | #a3cb38 | Secondary accent (status/tag) |
| primary-color4 | #10ac84 | Secondary accent (status/tag) |

| heading-color1 | #263048 | Primary heading color |
| heading-color2 | #2a2c30 | Secondary heading color |

| paragraph-color1 | #333333 | Primary paragraph text |
| paragraph-color2 | #7b7b7b | Secondary paragraph text |
| paragraph-color3 | #d5e0ea | Light paragraph text on dark surfaces |

| background-color1 | #f8f8fb | Main page background |
| background-color2 | #f9fcff | Alternate section background |
| background-color3 | #25517a | Dark/brand background section |

| shape-color1 | #d3dee8 | Borders/dividers |
| shape-color2 | #eef7ff | Soft UI fills |
| shape-color3 | #33628d | Dark shape accents |

| multiply-color1 | #33485c | Overlay/deep accent tone |
| multiply-color2 | #51789d | Overlay/deep accent tone |
| multiply-color3 | #465f78 | Overlay/deep accent tone |
| multiply-color4 | #444444 | Neutral dark UI element |
| multiply-color5 | #455463 | Neutral dark UI element |

### Semantic Mapping

| Semantic Token       | Base Token       |
| -------------------- | ---------------- |
| color-bg-page        | surface-page     |
| color-bg-card        | surface-card     |
| color-bg-alt         | surface-alt      |
| color-text-primary   | text-primary     |
| color-text-secondary | text-secondary   |
| color-text-muted     | text-muted       |
| color-border         | border-default   |
| color-border-strong  | border-strong    |
| color-action-primary | brand-orange-500 |
| color-action-dark    | brand-navy-700   |
| color-link           | brand-blue-500   |
| color-overlay        | overlay-dark     |

### Typography

1. Font family: Inter, sans-serif
2. Heading style: bold, navy scale
3. Body style: regular, text-secondary
4. Suggested scale:

- H1: 48
- H2: 36
- H3: 28
- H4: 22
- Body: 16
- Small: 14
- Caption: 12

### Spacing and Layout

1. Base spacing unit: 16
2. Spacing scale:

- 4, 8, 12, 16, 24, 32, 48, 64, 96

3. Card padding: 16 to 24
4. Max content width: 1280
5. Breakpoints:

- Mobile: 0 to 767
- Tablet: 768 to 1023
- Desktop: 1024+

---

## Pages (11 Total)

| #   | Page             | Description                                                                               |
| --- | ---------------- | ----------------------------------------------------------------------------------------- |
| 1   | Home             | Hero search, highlights, stats, selected properties, newsletter, employee preview, footer |
| 2   | Property List    | Filter bar, sorting, property grid, pagination                                            |
| 3   | Property Details | Gallery, property facts, description, responsible agent                                   |
| 4   | Gallery Overlay  | Full-screen modal for image/floorplan/map states                                          |
| 5   | Agents           | Agent cards in grid                                                                       |
| 6   | Agent Details    | Agent profile + listings + contact form section                                           |
| 7   | Favorites        | Saved properties with remove actions and empty state                                      |
| 8   | Contact Us       | Contact form + company info + map                                                         |
| 9   | Login            | Auth card form with action buttons                                                        |
| 10  | Register         | Account creation form                                                                     |
| 11  | Error            | 404 page                                                                                  |

---

## Reusable Components (Build Order + Estimated Effort)

### Tier A: Foundation Primitives

| Component     | Purpose                           | Estimate |
| ------------- | --------------------------------- | -------- |
| PageContainer | Shared width and side padding     | 0.5h     |
| Button        | Primary, secondary, text variants | 1h       |
| Input         | Text/email/password variants      | 1h       |
| Textarea      | Multi-line input                  | 0.5h     |
| Select        | Dropdown control                  | 0.75h    |
| Checkbox      | Boolean input with label          | 0.5h     |
| IconButton    | Heart/close/phone/mail actions    | 0.75h    |
| SectionHeader | Shared section title block        | 0.5h     |

Tier A total: 5.5h

### Tier B: Shared Layout

| Component       | Purpose                     | Estimate |
| --------------- | --------------------------- | -------- |
| TopBar          | Contact strip at top        | 0.75h    |
| Header          | Main nav and logo area      | 2h       |
| MobileNav       | Mobile navigation behavior  | 1.5h     |
| HeroBanner      | Reusable title/banner strip | 1h       |
| Footer          | Multi-column footer         | 2h       |
| TwoColumnLayout | Main + sidebar page layout  | 0.75h    |

Tier B total: 8h

### Tier C: Domain Cards and Blocks

| Component        | Purpose                      | Estimate |
| ---------------- | ---------------------------- | -------- |
| PropertyCard     | Property preview card        | 2h       |
| AgentCard        | Agent profile card           | 1.5h     |
| FeatureCard      | Service/info card            | 0.75h    |
| FormCard         | Auth/contact form container  | 0.75h    |
| StatsCounter     | Numeric KPI block            | 0.5h     |
| PropertyFeatures | Facts row/list               | 1h       |
| FeatureList      | Bullet/check feature list    | 0.75h    |
| AgentContactCard | Sidebar agent contact module | 1h       |

Tier C total: 8.25h

### Tier D: Navigation and Specialized

| Component       | Purpose                   | Estimate |
| --------------- | ------------------------- | -------- |
| Breadcrumb      | Route hierarchy trail     | 0.75h    |
| Pagination      | Page controls for listing | 1h       |
| SearchBar       | Search control row        | 1h       |
| PropertyFilters | Listing filter controls   | 1.5h     |
| SortDropdown    | Sorting options           | 0.5h     |
| ImageGallery    | Main gallery with thumbs  | 2h       |
| GalleryModal    | Overlay media viewer      | 2.5h     |
| LoadingState    | Skeleton/spinner state    | 0.5h     |
| EmptyState      | Favorites/no data state   | 0.75h    |
| ErrorState      | 404 reusable block        | 0.75h    |

Tier D total: 12.25h

---

## Step-by-Step Implementation Plan

### Phase 1: Design Tokens and Base Styles

Goal: lock visual consistency before component work.

1. Define all color tokens and semantic aliases in global styles.
2. Define typography scale and spacing scale.
3. Define radius, shadow, border token values.
4. Add reset/base element rules and default text colors.
5. Add a color validation checklist:

- Top bar
- Hero strip
- Primary button
- Card surface and borders
- Footer background

6. Rule: no hardcoded hex values inside components after this phase.

### Phase 2: App Shell and Shared Layout

Goal: shared frame for all routes.

1. Build TopBar.
2. Build Header desktop version with active nav styles.
3. Build MobileNav and integrate with Header.
4. Build HeroBanner variant.
5. Build Footer.
6. Build PageContainer and TwoColumnLayout wrappers.
7. Wire shell into root route so all pages inherit structure.

### Phase 3: Core Primitives

Goal: eliminate repeated one-off UI controls.

1. Build Button with three variants and disabled/loading styles.
2. Build Input, Textarea, Select, Checkbox with labels and error state.
3. Build IconButton and SectionHeader.
4. Verify focus-visible style and keyboard usability.
5. Confirm primitives are reusable and not page-coupled.

### Phase 4: Home Components and Home Page

Goal: complete the main landing page first.

1. Build FeatureCard, StatsCounter, PropertyCard, AgentCard.
2. Build SearchBar for hero section.
3. Assemble full Home sections in sequence:

- Hero + search
- Trust/stats section
- Selected properties grid
- Newsletter strip
- Employee preview section
- App promotion section
- Footer

4. Compare against mockup for spacing and hierarchy.

### Phase 5: Property Listing Page

Goal: deliver listing browse experience.

1. Build PropertyFilters.
2. Build SortDropdown.
3. Build Pagination.
4. Assemble Property List with filter row, result count, card grid, pagination.
5. Ensure responsive card grid behavior at all breakpoints.

### Phase 6: Property Details and Media Overlay

Goal: complete details flow with modal interactions.

1. Build Breadcrumb.
2. Build PropertyFeatures and FeatureList.
3. Build AgentContactCard.
4. Build ImageGallery.
5. Build GalleryModal with close, next/prev, keyboard escape, overlay click close.
6. Integrate modal states for image, floorplan, and map variants.

### Phase 7: Agents, Contact, Favorites

Goal: complete informational and utility flows.

1. Assemble Agents listing page with AgentCard grid.
2. Assemble Agent Details page with profile + related listings.
3. Assemble Contact page with TwoColumnLayout, form block, company info, map block.
4. Assemble Favorites page with row/card variant and EmptyState.

### Phase 8: Authentication and Error

Goal: finish account and fallback routes.

1. Build FormCard.
2. Build Login page using primitives.
3. Build Register page using primitives.
4. Build ErrorState and 404 route page.

### Phase 9: Responsive and Accessibility Pass

Goal: production-quality UI behavior.

1. Validate all pages on mobile, tablet, desktop.
2. Validate keyboard tab order and visible focus rings.
3. Validate labels and input associations.
4. Validate contrast in hero/footer/card/button contexts.
5. Fix overflow, clipping, and spacing edge cases.

### Phase 10: Polish and QA

Goal: visual parity and maintainability.

1. Add LoadingState where needed.
2. Add hover, pressed, and transition states.
3. Remove duplicated UI markup by extracting repeated patterns.
4. Run visual parity pass against each design screen.
5. Final cleanup and documentation update.

---

## Page Build Order and Estimated Effort

| Page                   | Dependencies                                  | Estimate |
| ---------------------- | --------------------------------------------- | -------- |
| Home                   | Tier A + Tier B + Tier C core cards           | 6h       |
| Property List          | PropertyCard + filters + sort + pagination    | 4h       |
| Property Details       | Breadcrumb + features + gallery + agent card  | 5h       |
| Gallery Overlay States | GalleryModal + ImageGallery integration       | 3h       |
| Agents                 | AgentCard + shared shell                      | 2h       |
| Agent Details          | Agent profile modules + property cards        | 3h       |
| Favorites              | Card row variant + EmptyState                 | 2.5h     |
| Contact Us             | TwoColumnLayout + form primitives + map block | 3h       |
| Login                  | FormCard + form primitives                    | 1.5h     |
| Register               | FormCard + form primitives                    | 1.5h     |
| Error 404              | ErrorState + route shell                      | 1h       |

Page total: about 32.5h

---

## Sprint-Style Task Board (10 Days, about 6h/day)

| Day    | Focus                    | Tasks                                                                       | Estimate |
| ------ | ------------------------ | --------------------------------------------------------------------------- | -------- |
| Day 1  | Token foundation         | Colors, semantic aliases, typography, spacing, base styles, token checklist | 6h       |
| Day 2  | Layout shell             | PageContainer, TopBar, Header desktop, Footer, root shell wiring            | 6h       |
| Day 3  | Primitive inputs/actions | Button, Input, Textarea, Select, Checkbox, IconButton, SectionHeader        | 6h       |
| Day 4  | Home modules             | PropertyCard, AgentCard, FeatureCard, StatsCounter, SearchBar               | 6h       |
| Day 5  | Home assembly            | Full Home page composition and responsive tuning                            | 6h       |
| Day 6  | Listing flow             | PropertyFilters, SortDropdown, Pagination, Property List assembly           | 6h       |
| Day 7  | Detail flow core         | Breadcrumb, PropertyFeatures, FeatureList, AgentContactCard, details layout | 6h       |
| Day 8  | Media overlay            | ImageGallery, GalleryModal, keyboard interactions, overlay states           | 6h       |
| Day 9  | Utility pages            | Agents, Agent details, Contact, Favorites + EmptyState                      | 6h       |
| Day 10 | Final routes and QA      | Login, Register, Error page, LoadingState, responsive + accessibility pass  | 6h       |

Sprint total: about 60h

---

## Daily Definition of Done

1. Components are reusable and not hardcoded to one page.
2. No hardcoded hex colors in components.
3. Desktop and mobile behavior verified.
4. Keyboard and focus-visible behavior verified.
5. Page visual parity checked against design mockup.

---

## Navigation Flow

Home  
Property List  
Property Details  
Gallery Overlay  
Agents  
Agent Details  
Favorites  
Contact Us  
Login  
Register  
Error 404

---

## Quick Reference

- Total pages: 11
- Total reusable components: 28
- Phases: 10
- Suggested sprint length: 10 days
- Main accent: #F97316
- Main dark scale: #0B2A4A, #102F4A, #1E293B
