<template>
  <div>
    <div class="cont">
      <v-card
        v-for="data in dataTechnology"
        v-bind:key="data.name"
        class="mx-auto"
        max-width="300"
        tile
      >
        <v-list dense flat>
          <v-subheader v-if="lang === 'en'">{{ data.name }} </v-subheader>
          <v-subheader v-else-if="lang === 'ru'"
            >{{ data.nameRu }}
          </v-subheader>
          <v-divider></v-divider>

          <v-list-item-group color="primary">
            <v-list-item
              v-for="subCat in data.subCategories"
              v-bind:key="subCat.name"
            >
              <v-list-item-content>
                <v-list-item-title
                  v-if="lang === 'ru'"
                  v-text="subCat.nameRu"
                  v-on:click.prevent="openModal(subCat)"
                ></v-list-item-title>
                <v-list-item-title
                  v-else-if="lang === 'en'"
                  v-text="subCat.name"
                  v-on:click.prevent="openModal(subCat)"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
    <modalIframe
      v-if="dialog"
      v-on:close="closeModal"
      v-bind:linkForFrame="linkForFrame"
      v-bind:name="name"
    />
  </div>
</template>

<script>
import modalIframe from "../components/modalIframe";
export default {
  name: "bodyForData",
  components: { modalIframe },
  props: ["dataTechnology", "lang", "linkType"],
  data() {
    return {
      name: "",
      linkForFrame: "",
      dialog: false
    };
  },
  methods: {
    openModal(subCat) {
      this.name = subCat.name;
      if (this.linkType === "vue-js") {
        if (this.lang === "en") {
          this.linkForFrame = `https://${subCat.link}${subCat.key}`;
        } else if (this.lang === "ru") {
          this.linkForFrame = `https://${this.lang}.${subCat.link}${subCat.key}`;
        }
      } else if (this.linkType === "vuex") {
        if (this.lang === "en") {
          this.linkForFrame = `https://${subCat.link}${subCat.key}`;
        } else if (this.lang === "ru") {
          this.linkForFrame = `https://${subCat.link}${this.lang}/${subCat.keyRu}`;
        }
      } else if (this.linkType === "vue-router") {
        if (this.lang === "en") {
          this.linkForFrame = `https://${subCat.link}${subCat.key}`;
        } else if (this.lang === "ru") {
          this.linkForFrame = `https://${subCat.link}${this.lang}/${subCat.keyRu}`;
        }
      } else if (this.linkType === "js") {
        if (this.lang === "en") {
          this.linkForFrame = `https://${subCat.link}${subCat.key}`;
        } else if (this.lang === "ru") {
          this.linkForFrame = `https://${subCat.link}${this.lang}/${subCat.keyRu}`;
        }
      }
      this.dialog = true;
    },
    closeModal() {
      this.name = "";
      this.linkForFrame = "";
      this.dialog = false;
    }
  }
};
</script>

<style scoped lang="sass">
.v-list-item
  min-height: 32px !important
.v-list-item__content
  padding: 2px 0 !important
.v-subheader
  font-size: 14px
  font-weight: bold
  color: aquamarine
.cont
  padding: 10px
  column-gap: 3px
  column-count: 8
  @media (max-width : 480px)
    column-count: 2
  @media (min-width : 481px) and (max-width : 867px)
    column-count: 3
  @media (min-width : 868px) and (max-width : 1223px)
    column-count: 4
  @media (min-width : 1224px) and (max-width : 1579px)
    column-count: 5
  @media (min-width : 1580px) and (max-width : 1839px)
    column-count: 6
  @media (min-width : 1840px) and (max-width : 3000px)
    column-count: 6
  > div
    width: 100%
    margin-bottom: 5px
    border-radius: 7px
    display: block
    break-inside: avoid
    overflow: hidden
.v-list-item--link
  padding: 0 0 0 4px
.v-list-item--link .v-list-item__content .v-list-item__title
  font-size: 12.5px !important
  text-overflow: clip
.v-list-item--link:hover
  background-color: darkgray
  padding: 0 5px
  .v-list-item__title
    color: #424242
    .primary--text
      color: #424242
</style>
