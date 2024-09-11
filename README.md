# Main page for swimming school in Brno

## Connected to Sanity.io - Headless CMS
https://github.com/Kapaak/kometa-sanity

## Code structure

public
|
src
&nbsp;&nbsp;|
&nbsp;&nbsp;adapters
&nbsp;&nbsp;|
&nbsp;&nbsp;components
&nbsp;&nbsp;|
&nbsp;&nbsp;constants
&nbsp;&nbsp;|
&nbsp;&nbsp;contexts
&nbsp;&nbsp;|
&nbsp;&nbsp;domains
&nbsp;&nbsp;|
&nbsp;&nbsp;hooks
&nbsp;&nbsp;|
&nbsp;&nbsp;libs
&nbsp;&nbsp;|
&nbsp;&nbsp;pages
&nbsp;&nbsp;|
&nbsp;&nbsp;screens
&nbsp;&nbsp;|
&nbsp;&nbsp;ui
&nbsp;&nbsp;|
&nbsp;&nbsp;utils

### Adapters

- for direct communication with API

### Components

- building blocks that are not reusable (e.g. contain hardcoded data, bound with specific screen)

### Contexts

- global state components

### Domains

- types for all components for the application

### Hooks

- combining or altering functionality of Adapter

### Libs

- similar to Adapter but for working with various libraries that are fetching data

### Pages

- folder structure containing page urls

### Screens

- each page has its own screen

### UI

- containing UI shareable components in Atomic methodology
- setup files for styling via styled-components

### Utils

- various functions that are shareable among components
