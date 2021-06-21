#  NextJS Template
### Get Started

- Install: `yarn`
- (If not) Run in terminal `yarn dev`
- Navigate to https://localhost:3000
- Check more about [Tailwind CSS](https://tailwindcss.com)

### Storybook

- `yarn storybook`

### Cypress

- `yarn cypress:open`

### Docker

Local development on port 80:
- `yarn docker:dev`

Local production build on port 80:
- `yarn docker:prod`
### Fully Coded Components

Notus NextJS is built with over frontend 120 components, giving you the freedom of choosing and combining. All components can take variations in colors, that you can easily modify using Tailwind CSS classes 

This project has TailwindCSS 2.2.x installed with Just In Time mode enabled. This means that all new classes being added during development time will automatically be built, including all classes with custom arbitrary values.

You will save a lot of time going from prototyping to full-functional code, because all elements are implemented.
This Free Tailwind CSS Template is coming with prebuilt examples, so the development process is seamless, switching from our pages to the real website is very easy to be done.

Every element has multiple states for colors, styles, hover, focus, that you can easily access and use.


### CSS Components

120 Fully Coded CSS elements, such as [Alerts](https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-github-readme), [Buttons](https://www.creative-tim.com/learning-lab/tailwind/nextjs/buttons/notus?ref=nnjs-github-readme), [Inputs](https://www.creative-tim.com/learning-lab/tailwind/nextjs/inputs/notus?ref=nnjs-github-readme) and many more.

Please [check all of them here](https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-github-readme).

### NextJS Components

We also feature the following dynamic components:
- [Alerts](https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-github-readme)
- [Popper for Menus](https://www.creative-tim.com/learning-lab/tailwind/nextjs/dropdowns/notus?ref=nnjs-github-readme)
- [Menus](https://www.creative-tim.com/learning-lab/tailwind/nextjs/menus/notus?ref=nnjs-github-readme)
- [Modals](https://www.creative-tim.com/learning-lab/tailwind/nextjs/modals/notus?ref=nnjs-github-readme)
- [Navbars](https://www.creative-tim.com/learning-lab/tailwind/nextjs/navbar/notus?ref=nnjs-github-readme)
- [Popper for popover content](https://www.creative-tim.com/learning-lab/tailwind/nextjs/popovers/notus?ref=nnjs-github-readme)
- [Tabs](https://www.creative-tim.com/learning-lab/tailwind/nextjs/tabs/notus?ref=nnjs-github-readme)
- [Popper for tooltips content](https://www.creative-tim.com/learning-lab/tailwind/nextjs/tooltips/notus?ref=nnjs-github-readme)


## Table of Contents

* [Files and folders](#files-and-folders)
* [Browser Support](#browser-support)
* [Resources](#resources)

## Files and Folder
Project Initial State
```
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── .storybook
├── config
│   ├── index.ts
│   └── constants
│   │   ├── index.ts
│   │   └── SERVICES.ts
├── src
│   └──styles
│   │   ├── index.css
│   │   └── tailwind.css
│   ├── @types
│   ├── stories
│   ├── services
│   ├── components
│   │   ├── Cards
│   │   │   ├── CardBarChart.tsx
│   │   │   ├── CardLineChart.tsx
│   │   │   ├── CardPageVisits.tsx
│   │   │   ├── CardProfile.tsx
│   │   │   ├── CardSettings.tsx
│   │   │   ├── CardSocialTraffic.tsx
│   │   │   ├── CardStats.tsx
│   │   │   └── CardTable.tsx
│   │   ├── Dropdowns
│   │   │   ├── IndexDropdown.tsx
│   │   │   ├── NotificationDropdown.tsx
│   │   │   ├── PagesDropdown.tsx
│   │   │   ├── TableDropdown.tsx
│   │   │   └── UserDropdown.tsx
│   │   ├── Footers
│   │   │   ├── Footer.tsx
│   │   │   ├── FooterAdmin.tsx
│   │   │   └── FooterSmall.tsx
│   │   ├── Headers
│   │   │   └── HeaderStats.tsx
│   │   ├── Maps
│   │   │   └── MapExample.tsx
│   │   ├── Navbars
│   │   │   ├── AdminNavbar.tsx
│   │   │   ├── AuthNavbar.tsx
│   │   │   └── IndexNavbar.tsx
│   │   ├── PageChange
│   │   │   └── PageChange.tsx
│   │   └── Sidebar
│   │       └── Sidebar.tsx
│   ├── layouts
│   │   ├── Admin.tsx
│   │   └── Auth.tsx
│   ├── pages
│   │   ├── 404.tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── _error.tsx
│   │   ├── [user]
│   │   │   └── profile.tsx
│   │   ├── admin
│   │   │   ├── dashboard.tsx
│   │   │   ├── maps.tsx
│   │   │   ├── settings.tsx
│   │   │   └── tables.tsx
│   │   ├── auth
│   │   │   ├── login.tsx
│   │   │   └── register.tsx
│   │   ├── index.tsx
│   │   └── landing.tsx
├── public
│   ├── img
│   │   ├── brand
│   │   │   └── favicon.ico
│   │   ├── github.svg
│   │   └── google.svg
├── .gitignore
├── .env.local
├── .env.production
├── package.json
├── .eslintrc.js
├── .nvmrc
├── .prettierignore
├── .prettierrc
├── Dockerfile.dev
├── Dockerfile.prod
├── docker-compose.dev.yaml
├── docker-compose.prod.yaml
├── next-env.d.ts
├── cypress.json
├── tsconfig.json
├── postcss.config.js
└── tailwind.config.js
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

| Chrome | Firefox | Edge | Safari | Opera |
|:---:|:---:|:---:|:---:|:---:|
| <img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64"> |
