<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" class="is-family-secondary is-1 is-warning">{{ $static.metadata.siteName }}</g-link>
      </strong>
    </header>
    <header class="subheader">
      <b-button type="is-secondary" rounded icon-pack="fas" icon-left="search" @click="openSearch"></b-button>
    </header>
    <slot/>
    <GlobalEvents
      @keyup.prevent.ctrl.space="openSearch"/>
  <b-modal v-model="isCardModalActive" full-screen>
      <div class="card ">
        <div class="card-content">
          <div class="content">
            <h3>Search:</h3>
            <b-field aria-autocomplete="false">
              <b-input
                v-model="searchTerm"
                type="text"
                ref="search"
                icon="search"
                icon-pack="fa"
                placeholder="Enter your search term here..."
                icon-right="fas fa-times-circle"
                icon-right-clickable
                @icon-right-click="clearIconClick"
                rounded
              />
            </b-field>
            <div v-if="searchResults.length > 0" class="is-size-4 has-text-weight-bold">Results:</div>
            <div v-for="result in searchResults"
            :key="result.id">
                <a
                :href="result.path"
                class="navbar-item is-family-secondary"
                @click="isCardModalActive = false"
              >
                {{ result.recipeName }}
              </a>
                  <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Search from "gridsome-plugin-flexsearch/SearchMixin";
export default {
  data: () => ({
    isCardModalActive: false,
  }),
  mixins: [Search],
  methods: {
    openSearch() {
      // Open the modal on click
      this.isCardModalActive = !this.isCardModalActive;
      // Give focus to the search input form after waiting a split second for it to be rendered in the DOM
      this.$nextTick(() => this.$refs.search.focus());
    },
    clearIconClick() {
      this.searchTerm = "";
    },
  },
};
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.recipe-body {
  padding-left: 40px;
  padding-right: 40px;
  background-color: white;
  border-radius: 6px;
  font-size: 1rem;
}

.layout {
  max-width: 100vw;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
  padding-left: 40px;
  padding-right: 40px;
  height: 80px;
  font-size: xxx-large;
  text-decoration-line: underline;
  text-decoration-color: #333333;
}

.subheader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
  padding-left: 40px;
  padding-right: 40px;
  height: 80px;
  font-size: xxx-large;
}

</style>
