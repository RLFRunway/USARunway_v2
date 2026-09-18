USARunway2 - Static Public Marketing Site

This is the plain HTML/CSS/JavaScript version of the public-facing USARunway marketing site.

GitHub Pages deployment
1. Create a public GitHub repository named USARunway2.
2. Upload ALL files and folders in this directory to the repository root.
3. Commit to the main branch.
4. In GitHub: Settings > Pages > Build and deployment > Deploy from a branch.
5. Select branch: main, folder: /(root), then Save.
6. The included CNAME file requests the custom domain USARunway2.com.
7. Do not change DNS for USARunway2.com until GitHub Pages is enabled and you are ready to point the domain.

Editing
- Home page: index.html
- About: about/index.html
- Contact: contact/index.html
- Service pages: each service folder/index.html
- Shared styling: assets/site.css and assets/static-overrides.css
- Shared JavaScript: js/site.js

Notes
- Navigation and local assets now use relative paths so the site works both on GitHub Pages and under the USARunway2.com custom domain.
- The three founding-team photos on About still load from the existing usarunway.com site for now. They should be copied into assets/img before the old host is retired.
- Hero/background photographs currently load from Unsplash.

Temporary launch page
- The home page currently displays four full-screen image panels taken from the approved launch-page PDF.
- Scrolling snaps from one panel to the next.
- Navigation and call-to-action areas on the first two panels remain clickable through transparent link overlays.
- The panel images are stored in assets/launch and the launch-page styling is in assets/launch.css.
- When the original photographs and editable wording become available, replace this temporary screenshot implementation with responsive HTML text and background images.
