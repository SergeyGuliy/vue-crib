<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <sidebar
        v-bind:items="items"
        v-on:changeRussian="changeRussian"
        v-on:changeEnglish="changeEnglish"
      />
    </v-navigation-drawer>
    <navbar v-on:toggle-sidebar="drawer = !drawer" v-bind:items="items" />

    <v-content>
      <v-container>
        <router-view v-bind:lang="languageKey" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import sidebar from "./components/sidebar";
import navbar from "./components/navbar";
import "material-icons/iconfont/material-icons.scss";
export default {
  name: "App",
  components: { sidebar, navbar },
  data: () => ({
    drawer: true,
    languageKey: "ru",
    items: [
      {
        picture: "ru.vuejs.org//images/logo.png",
        text: "Vue.js",
        route: "/"
      },
      {
        picture: "ru.vuejs.org//images/logo.png",
        text: "Vuex",
        route: "/vuex"
      },
      {
        picture: "ru.vuejs.org//images/logo.png",
        text: "Vue Router",
        route: "/vue-router"
      }
    ]
  }),
  methods: {
    changeEnglish() {
      this.languageKey = "en";
    },
    changeRussian() {
      this.languageKey = "ru";
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
<style lang="sass">

.material-icons
  margin-right: 5px
</style>
