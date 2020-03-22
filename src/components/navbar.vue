<template>
  <v-app-bar app clipped-left color="red" dense>
    <v-app-bar-nav-icon @click.stop="$emit('toggle-sidebar')" />
    <v-toolbar-title class="mr-12 align-center">
      <span class="title">Vue Stack Technologies API</span>
    </v-toolbar-title>
    <v-spacer />
    <v-row align="center" style="max-width: 800px" class="d-none d-md-block">
      <v-btn v-for="item in items" :key="item.text" link :to="item.route"
        ><img :src="`https://${item.picture}`" alt="" />{{ item.text }}</v-btn
      >
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "navbar",
  props: ["items"]
};
</script>
<style scoped lang="sass">
a.v-btn
  margin-right: 5px
  padding: 0 5px !important
img
  height: 22px
  margin-right: 3px
header.v-sheet
  .v-toolbar__title
    margin-right: 40px !important
    span.title
      font-size: 18px !important
</style>
