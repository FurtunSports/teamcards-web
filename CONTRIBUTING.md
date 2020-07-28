# Contribution Guide

Any contribution across all Furtun open-source projects are more than welcome.

## Reporting Issues

A great way to contribute to the project is to send a detailed report when you encounter and open an issue under the "Issues" tab.

If you magically include a reproduction repository or CodeSandBox so that bugs can be reproduced without great efforts, it would help speed up the process. The better a bug can be reproduced, the faster we can start fixing it!

## Pull Requests

We'd love to see your pull requests, even if it's just to fix a typo!

However, any significant improvement should be associated to an existing feature request or bug report.

## Getting Started

Fork the repository or if you are a member of the team, create a new branch with the name of the bug/feature.

Follow the instructions in README.md to run the project.

Start your contribution

Keep in mind to follow the rules in .eslintrc.js and .prettierrc when you add your code to the project. Linting will throw errors and stop your process on hot-reload, so be aware to follow the style enforced. If you want to suggest new linting rules, feel free to open an issue under the tab.

## Architecture

All projects have a specific way of organizing code.

Below you will find a way to cope with the existing work and add additional code seamlessly.

### Services

All outgoing requests are managed by axios and furtun-team has created separate services to list all the API requests by domain. The services are injected in the Vue app inside the plugins.

### Components

We have various types of components:

Layout Components - all components that carry a design separation, i.e. navigation, buttons etc.
Sectional Components - longer pages are suggested to be encapsulated into smaller sections and be imported separately into pages.
Dumb Components - usually skeletons; rarely contain any functionality other than visual containers such as: containers, wrappers, holders, cards, headers etc. Mainly created to encapsulate styles.
Global Components - TBD
Note: components should be used as: <Primary-Button />

Note: always use @ import instead of relative imports ../../

### Store

Vuex functionality is encapsulated by modules by domain and usually you will find them already created. Continue working on existing store modules, otherwise open a request for the creation of a new one its necessity.

### Assets vs Static

Images can go into both directories. However, due to easier usage of svg images from assets directory in src, svgs are advised to be kept under the assets directory whereas other image types should be located inside static directory.

### Sass/Scss

We <3 Sass. Its variable creation, reusability, readability in nested styles helps us write better styled components. We keep 5 main global scss files:

settings.scss - all colors, radiuses, font families, and other design rules are saved as variables in this file and it can be imported in the appropriate component. We are strong believers that the styles that are not found in the variable list are probably a design mishap that needs to be corrected. In such cases, open questions under the "Issues" tab.
fonts.scss - the necessary code to import the selected fonts for the right job.
generics.scss - the code that fixes all whats wrong with HTML5 defaults.
tools.scss - mixins, formulae functions, responsive breakpoints etc. We have ONE rule: if it's listed in the tools, you can't use it otherwise. Note: if you find the need to add new tools, you are most welcome to create a suggestion under the "Issues" tab.
bundle.scss - this file is created to simplify the import of all the above in a Vue component.
Note: always use ~/ import instead of relative imports ../../

### Helpers

The folder of global functions. We usually like to keep a mini-library with the most-used javascript functions like, decoding a jwt, creating uuids, mapping certain objects, and so on. When you add new functions inside helpers, make sure to write a code comment on its usage.

### Files & Folders naming convention

Keep in mind that all folder names are camelCase and all file names are PascalCase.

## Config

--- Coming Soon ---

## Docs

--- Coming Soon ---

## Tests

--- Coming Soon ---

Final Remark: Any contribution, suggestion whatsoever are always very welcome and gets us closer to an understanding and one-step further to a better product. Thank you
