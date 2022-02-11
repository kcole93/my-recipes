# Good Eating - A Personal Recipe Collection

This personal project links two things I'm (embarassingly) passionate about: [Airtable](https://airtable.com) and cooking.

## Structure of the Project
Harnessing the power of low-overhead personal project tools, the [Good Eating website](https://good-eating.netlify.app) is built on an Airtable backend which stores the recipe content, and uses [Gridsome](https://gridsome.org/), Vue.js & the [Bulma CSS framework](https://bulma.io/) for its frontend, hosted via [Netlify](https://netlify.com/).

This lightweight project scaffolding means that adding or editing recipes can all be done inside of an Airtable base. 
- :zap: For added convenience, I use the Airtable Web Clipper extension to add recipes from my favorite websites without leaving my browser tab!
- Updates to the underlying data in Airtable can trigger an automatic Netlify deployment via a Webhook and Airtable Automations, or manually triggered via a Custom Script block.

The frontend is built in Vue.js and leverages Gridsome/GraphQL for static site generation:
- [Bulma CSS framework](https://bulma.io/) & [Buefy](https://buefy.org/)'s Bulma-based UI components were used to quickly build out this personal project.
- Uses the [Gridsome FlexSearch Plugin](https://gridsome.org/plugins/gridsome-plugin-flexsearch) for search-by-title functionality and the official [Gridsome Airtable Source Plugin](https://gridsome.org/plugins/@gridsome/source-airtable) to handle fetching of data via the Airtable API.
