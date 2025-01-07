# Kometa Brno - Swimming
Website for swimming club Kometa Brno. This website consists of frontend created in ```Next.js``` and headless CMS in ```Sanity.io```

> Repository for the CMS is located [here](https://github.com/Kapaak/kometa-sanity)

## 🚀 Project Structure

```text
├── public/
│   └── files
│   └── icons
│   └── images
│   └── sponsors
├── src/
│   ├── adapters
│   ├── components
│   ├── constants
│   ├── contexts
│   ├── domains
│   ├── hooks
│   ├── libs
│       └── posthog
│       └── sanity
│   ├── pages
│   ├── screens
│   ├── types
│   ├── ui/
│       └── components
│           └── atoms
│           └── molecules
│           └── organisms
│           └── templates
│       └── theme
│   ├── utils
└── package.json
```

## 🔌 Adapters
Hooks, that are used for direct communication with API. These hooks usually use ```@tanstack/react-query``` for fetching and caching the data.

## 🧱 Components
There are 2 types of components, first of them are without logic (located in ```src/ui/components/...```) and the rest are some reusable components with logic 
that are usually using some external libraries (located in ```src/components/...```).

Each item in components folder can be made of multiple parts, where these parts are used only in this particular place. For such subcomponents there is a ```parts``` folder.

## 📬 Contexts
Global state handled by ```Context API```.

## 📦 Domains and Types
```Domains``` folder holds all of the types, that are referencing APIs or external libraries. Whereas the ```Types``` folder keeps custom types and interfaces.


## 🖥️ Screens
Every page is made of multiple sections. In this folder we combine all of the necessary parts for the page, so that we can have cleaner page declarations.

## 🎉 UI
Containing dumb reusable components separated in [Atomic methodology](https://atomicdesign.bradfrost.com/chapter-2/). Styling is done using css-in-js library ```styled-components```. Most of the simplest components are just made from a single ```styled-components``` element.

Inside ```src/ui/theme``` we have initial setup for styles, fonts and style-reset. We also use ```font-size: 62.5%;``` so that ```1rem equals 10px```.

## 🖇️ Utils
Various functions that are shareable among components.

## 💡 Start the development
- Use yarn package manager.
- Development is in port 3000 and start it by typing ```yarn dev```.

## ❗️ Things to keep in mind
- Dont upgrade `vaul` package version unless 100% sure that it wont break the Drawer component (desired version is `"vaul": "0.9.2"`). Greater versions disables scroll animation due to some styles not disappearing from html / body component.

