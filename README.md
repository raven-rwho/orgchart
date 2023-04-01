# Mind Map of the Organization

This is a Next.js project that reads in Markdown files from a given folder and uses the markmap library to visualize it as a mind map. The use case is to visualize the structure of your organization.d

## Getting Started
### Prerequisites

* Node.js (version 14 or later)
* Yarn (or npm)

### Installing

1. Clone this repository to your local machine.
2. Run `yarn` install to install the dependencies.

### Usage

1. Add the desired structure to the file `./map/org.md`, using Markdown syntax.
2. run `yarn dev` to test the project on [localhost](http://localhost:3000)
3. Via regex the amount of people and different professions (in our case it is Product, Data Science, developers, working students and externals) is counted and visualized - to change them (can be found in `./utils/stringUtils.ts`) you also need to refactor the corresponding tests.
The following list shows you the patterns how the different professions are labeled
   - Product - `(P)`
   - Working Student - `(WS)`
   - Data Scientists - `(DS)`
   - Developers - `(Dev)`
   - Externals - `(F)`
4. Commit and push the changes to your repository.
5. A GitHub Action will run and generate a new version in the history mind maps (stored in the `_maps`folder)
6. deploy the project to what ever provider that you want to use - in this case it is deployed to vercel

### Built With

* Next.js
* [Markmap](https://markmap.js.org/)
* Jest
* Tailwind

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.