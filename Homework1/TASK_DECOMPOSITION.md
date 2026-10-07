# HW1 — Production Portfolio

## M1 — Accessibility
- [x] Audit accessibility against WCAG 2.2 AA.
- [x] Improve text contrast and HTML landmarks.
- [x] Review the results and commit:
  `fix(a11y): contrast & landmarks`

## M2 — Keyboard Navigation
- [x] Test keyboard navigation.
- [x] Ensure users can navigate without keyboard traps.
- [x] Review the results and commit:
  `fix(nav): keyboard trap prevention`

## M3 — Content Security Policy
- [x] Configure a strict Content Security Policy.
- [x] Ensure there are no inline event handlers such as onclick.
- [x] Review the results and commit:
  `fix(security): strict CSP & remove inline handlers`

## M4 — Lighthouse
- [x] Run a Lighthouse audit.
- [x] Optimize assets to achieve the required score of 100.
- [x] Review the results and commit:
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
## M2 — Test Results
- Tab selects the skip link, About, Projects, and Contact in order.
- Shift + Tab navigates in reverse order.
- All focused links have a visible focus indicator.
- Enter activates the Projects link and navigates to its section.
- Focus can leave the page links and return without becoming trapped.
- No keyboard traps were found in the current page.
## M3 — Test Results
- A restrictive CSP is configured using a meta tag.
- JavaScript is blocked by script-src 'none'.
- Stylesheets and images are allowed only from the same origin.
- style.css returned HTTP 304 and the page remained styled correctly.
- Chrome DevTools' automatic workspace request was blocked by CSP.
- No inline event handlers were found in the reviewed HTML.
## M4 — Test Results
- Lighthouse mode: Navigation.
- Device: Mobile.
- Tested at http://127.0.0.1:8000/index.html.
- Performance: 100/100.
- Accessibility: 100/100.
- Best Practices: 100/100.
- SEO: 100/100.
- Added a valid robots.txt file.
- Added connect-src 'self' to allow same-origin requests.
- JavaScript remains blocked by script-src 'none'.
- Performance was already 100 before these changes.