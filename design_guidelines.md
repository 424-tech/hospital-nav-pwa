# Design Guidelines: Minimal Hospital Navigation PWA

## Design Approach: Brutalist Utility-First
This is a **utility-focused, speed-first application**. Following the user's explicit requirements for brutal minimalism - think calculator or terminal interface, not polished healthcare app.

## Core Design Principles
1. **Speed over polish** - Instant load, zero friction
2. **Clarity over beauty** - Function visible at a glance
3. **Accessibility through simplicity** - High contrast, large targets
4. **Game board aesthetic** - Grid-based, color-coded clarity

---

## Color Palette

**Base Colors:**
- Background: Pure white (#FFFFFF)
- Text: Pure black (#000000)
- Borders: Black or dark gray (0 0% 20%)

**Functional Color Coding (Grid Cells):**
- Labs: 210 100% 85% (light blue)
- Wards: 120 60% 85% (light green)
- OPD: 45 100% 85% (light yellow)
- Pharmacy: 280 60% 85% (light purple)
- Emergency/ICU: 0 70% 85% (light red)
- General/Corridors: 0 0% 95% (light gray)

**Interactive Accent:**
- Primary Blue: 210 100% 50% (for buttons, active states)
- Hover State: 210 100% 40% (darker blue)
- Path Highlight: 210 100% 70% with 40% opacity overlay

---

## Typography

**System Font Stack Only:**
```
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif
```

**Type Scale:**
- Page Title: 32px, bold, black
- Section Headers: 20px, bold, black
- Body Text: 16px, normal, black
- Grid Labels: 14px, medium, black
- Small Meta: 12px, normal, gray

**Line Height:** 1.4 for all text (tight, compact)

---

## Layout System

**Spacing Units (Tailwind):** Use units of 2, 4, 8, 12, 16 only
- Tight spacing: p-2, gap-2
- Standard spacing: p-4, gap-4, m-8
- Section spacing: py-8, py-12

**Grid Structure:**
- Desktop-first: Single column, max-width 1200px centered
- Mobile: Stack everything, full-width grid
- No multi-column layouts except the 5×5 grid map itself

**Container:**
- Max width: 1200px
- Padding: px-4 (mobile), px-8 (desktop)
- Center aligned

---

## Component Library

### 1. Hospital Floor Grid (Primary Component)
- 5×5 CSS Grid, equal-sized cells
- Cell size: 80px × 80px (desktop), 60px × 60px (mobile)
- Grid gap: 2px black borders
- Each cell:
  - Background: Color-coded by room type
  - Border: 2px solid black
  - Text: Room label centered, 12px, bold
  - Hover: Subtle darkening (10%)
  - Selected: 3px black border
  - Path highlight: Blue overlay with 40% opacity

### 2. Floor Selector
- Three large pill buttons side-by-side
- Style: Black border, white background, 16px text
- Active floor: Blue background, white text
- Size: 120px × 48px each, gap-4

### 3. Dropdowns (Location Selection)
- Native `<select>` elements styled
- Height: 48px
- Border: 2px solid black
- Font: 16px system font
- Full width on mobile, 300px on desktop

### 4. Path Display
- Simple text output: "Route: Reception → Stairs → Ward-A"
- Estimated time in bold: "~5 minutes"
- Black text on white, no special styling

### 5. Help Request Cards
- White background with 2px black border
- Padding: p-4
- Stack: Location (bold), Time (gray), Button
- Button: Blue background, white text, 40px height, full-width

### 6. Notice Board
- Simple list with black borders between items
- Each item: Title (bold), Message, Timestamp (gray)
- No cards, just divider lines

### 7. Buttons
**Primary Action (Offer Help, Navigate):**
- Background: 210 100% 50% (blue)
- Text: White, 16px, bold
- Height: 48px
- Border radius: 0 (sharp corners)
- Hover: Darken 10%
- No shadows, no gradients

**Secondary (Floor selector):**
- Background: White
- Border: 2px solid black
- Text: Black
- Active state: Blue background, white text

---

## Navigation & Information Architecture

**Single Page Layout:**
1. Header: App title "Hospital Navigator" (32px, bold)
2. Floor selector tabs
3. 5×5 Grid map (dominant element)
4. Location selectors (Current → Destination)
5. Route display
6. "Need Help" section (list of 5 cards)
7. Notice board (3 announcements)

**Spacing:** 12-16px between major sections

---

## Interactive States

**Grid Cells:**
- Default: Color-coded background, black border
- Hover: Darken 10%
- Selected (Current/Destination): Bold 3px border
- In Path: Blue overlay at 40% opacity

**Buttons:**
- Default: Blue background
- Hover: Darker blue (no transition)
- Active/Click: Scale down slightly (transform: scale(0.98))

**No Animations:** Zero transitions, instant state changes for speed

---

## Mobile Responsiveness

**Breakpoint:** 768px
- Below 768px: Stack everything, smaller grid cells (60px)
- Above 768px: Centered layout, larger grid (80px)
- Touch targets: Minimum 48px × 48px

---

## Accessibility

- High contrast: Black on white throughout
- Large click areas: Minimum 48px
- Clear focus indicators: 3px blue outline on keyboard focus
- Semantic HTML: Proper heading hierarchy
- Screen reader labels for grid cells

---

## Images
**No images required.** This is a purely functional, grid-based interface. The visual appeal comes from the color-coded grid layout, not imagery.

---

## Key Implementation Notes

1. **Grid First:** The 5×5 floor plan is the hero element - make it prominent, centered, and immediately visible
2. **No Flourishes:** No shadows, gradients, animations, or decorative elements
3. **Instant Feedback:** State changes happen immediately (no loading states needed)
4. **Compact UI:** Tight spacing, minimal whitespace - prioritize information density
5. **System Colors Only:** Use the functional color coding, no brand colors beyond blue accent