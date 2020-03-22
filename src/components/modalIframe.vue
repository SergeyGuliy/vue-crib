<template>
  <v-card>
    <v-toolbar dark color="primary" height="40px">
      <v-btn icon dark @click="closeModal">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>{{ name }}</v-toolbar-title>
    </v-toolbar>
    <iframe id="iframe" :src="linkForFrame"></iframe>
  </v-card>
</template>

<script>
export default {
  name: "modalIframe",
  props: ["linkForFrame", "name"],
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped lang="sass">
.v-card
  position: fixed !important
  z-index: 10
  top: 0
  right: 0
  width: 100%
  height: 100%
iframe
  height: calc(100% - 40px)
  width: 100%
  border: 0px
  background-color: #ffffff
</style>
