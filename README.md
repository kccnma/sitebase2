# [SiteBase2](https://kccnma.github.io/sitebase2/ "SiteBase2 Demo and Docs")

Latest development version of SiteBase (Version #2), an ongoing, work-in-progress minimal HTML + CSS + JS base front-end framework for simple web site projects. This is the full dev version that contains the uncompiled source files, documentation, lessons, and post-build pre-compiled static-rendered files in multiple variations for different users and development environments.

## Download
- [Download SiteBase2 .Zip](https://kccnma.github.io/sitebase2/docs/variations/sitebase2.static "Download SiteBase2 .zip file")

## Lessons
- [SiteBase2 Step-by-Step Lessons](https://kccnma.github.io/sitebase2/docs/lessons.html "SiteBase Lessons (incomplete)")

## Documentation
- [SiteBase2 Docs](https://kccnma.github.io/sitebase2/docs/documentation.html "SiteBase Docs (incomplete)")

## Demos
- [SiteBase2 Demo Site](https://kccnma.github.io/sitebase2/docs/variations/sitebase2-static/ "SiteBase Website")

## Looking for the original SiteBase (version #1)?
- [SiteBase1](https://kccnma.github.io/sitebase1/ "SiteBase1 Demo and Docs")

## To Run the full dev version locally
- WARNING: please note that this source develpment repository is currently under construction and may not install without manually updating multiple dependencies. This is a known issue and on the list of future project plans/goals.
- this source development version requires [node](https://nodejs.org/en/) and [gulp](https://gulpjs.com/) 
```
$ npm install
$ npm run dev
```

## Updates
- 10-02-25
  - ran npm audit fix --force and addressed all dependency warnings and errors
  - updated gulp and removed imagemin due to not able to fix it (simply piping/copying images from src to dist instead)
  - increased the navicon size 
- 02-12-25
  - refactored all css (removed redundacies, fixed variable usage, updated margin left/right to inline)
- 01-27-25
  - updated lessons 1b-6
  - added a new globals step (1b)
  - added a starter set of variables via css custom properties
  - updated the flexbox grid system using gap and a css custom property for the grid gap
- 01-24-25
  - initital migration of source code from SiteBase1

## Known Issues
- Legacy SiteBase1 Accordion UI components are dated (need to be updated to details summary elements)
- Legacy SiteBase1 sass variables need to be converted to css custom properties

## Road Map
- Add SiteBase2 Logo as an Image/SVG to the Main/Docs Site Header
- Convert all sass variables > css custom properties
