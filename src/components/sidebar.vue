<template>
  <v-list dense>
    <v-list>
      <v-list-item v-for="item in items" :key="item.text" link :to="item.route">
        <v-list-item-avatar>
          <img :src="`https://${item.picture}`" alt="" />
        </v-list-item-avatar>
        <v-list-item-title v-text="item.text" />
      </v-list-item>
    </v-list>
    <v-select
      v-model="language"
      :items="languages"
      menu-props="auto"
      label="Change Language"
      hide-details
      prepend-icon="language"
      single-line
      outlined
      hide-selected
      v-on:change="changeLanguage"
    ></v-select>
  </v-list>
</template>

<script>
export default {
  name: "sidebar",
  props: ["items"],
  data() {
    return {
      language: "Russian",
      languages: [{ text: "Russian" }, { text: "English" }]
    };
  },
  methods: {
    changeLanguage() {
      if (this.language === "Russian") {
        this.$emit("changeRussian");
      } else if (this.language === "English") {
        this.$emit("changeEnglish");
      }
    }
  }
};
</script>
<style scoped lang="sass">
div.v-avatar.v-list-item__avatar
  border-radius: 0 !important
.v-text-field.v-text-field--single-line.v-text-field--is-booted.v-select
  padding: 10px
</style>
