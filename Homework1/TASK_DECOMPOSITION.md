# HW1 — Production Portfolio

## M1 — Accessibility
- [ ] Audit accessibility against WCAG 2.2 AA.
- [x] Improve text contrast and HTML landmarks.
- [ ] Review the results and commit:
  `fix(a11y): contrast & landmarks`

## M2 — Keyboard Navigation
- [ ] Test keyboard navigation.
- [ ] Ensure users can navigate without keyboard traps.
- [ ] Review the results and commit:
  `fix(nav): keyboard trap prevention`

## M3 — Content Security Policy
- [ ] Configure a strict Content Security Policy.
- [ ] Ensure there are no inline event handlers such as onclick.
- [ ] Review the results and commit:
  `fix(security): strict CSP & remove inline handlers`

## M4 — Lighthouse
- [ ] Run a Lighthouse audit.
- [ ] Optimize assets to achieve the required score of 100.
- [ ] Review the results and commit:
  `perf: optimize assets`

## M1 — Test Results
- Content remains readable at 200% zoom.
- HTML landmarks include header, nav, main, and footer.
- The page contains one main element and one h1 heading.
- Text contrast ratios:
  - #1f2937 on #ffffff: 14.68:1.
  - #1f2937 on #f3f4f6: 13.34:1.
  - #ffffff on #111827: 17.74:1.
- All listed text color pairs meet the WCAG AA contrast requirement.
- The skip link works with Tab and Enter.
- Lighthouse Accessibility score: 100/100.
- Tested at http://127.0.0.1:8000/index.html.
- Full WCAG 2.2 AA compliance has not yet been verified.