<template>
  <bodyForData
    v-bind:dataTechnology="dataTechnology"
    v-bind:lang="lang"
    v-bind:linkType="linkType"
  />
</template>

<script>
import bodyForData from "../components/bodyForData";
export default {
  name: "Vuex",
  components: { bodyForData },
  props: ["lang"],
  data() {
    return {
      linkType: "vuex",
      dataTechnology: [
        {
          name: "Core Concepts",
          nameRu: "Основные понятия",
          subCategories: [
            {
              name: "Installation",
              nameRu: "Установка",
              link: "vuex.vuejs.org/",
              key: "installation.html",
              keyRu: "installation.html"
            },
            {
              name: "State",
              nameRu: "Состояние",
              link: "vuex.vuejs.org/",
              key: "guide/state.html",
              keyRu: "guide/state.html"
            },
            {
              name: "Getters",
              nameRu: "Геттеры",
              link: "vuex.vuejs.org/",
              key: "guide/getters.html",
              keyRu: "guide/getters.html"
            },
            {
              name: "Mutations",
              nameRu: "Мутации",
              link: "vuex.vuejs.org/",
              key: "guide/mutations.html",
              keyRu: "guide/mutations.html"
            },
            {
              name: "Actions",
              nameRu: "Действия",
              link: "vuex.vuejs.org/",
              key: "guide/actions.html",
              keyRu: "guide/actions.html"
            },
            {
              name: "Modules",
              nameRu: "Модули",
              link: "vuex.vuejs.org/",
              key: "guide/modules.html",
              keyRu: "guide/modules.html"
            },
            {
              name: "Application Structure",
              nameRu: "Структура приложения",
              link: "vuex.vuejs.org/",
              key: "guide/structure.html",
              keyRu: "guide/structure.html"
            }
          ]
        },
        {
          name: "Constructor Options",
          nameRu: "Опции конструктора Vuex.Store",
          subCategories: [
            {
              name: "state",
              nameRu: "state",
              link: "vuex.vuejs.org/",
              key: "api/#state",
              keyRu: "api/#state"
            },
            {
              name: "mutations",
              nameRu: "mutations",
              link: "vuex.vuejs.org/",
              key: "api/#mutations",
              keyRu: "api/#mutations"
            },
            {
              name: "actions",
              nameRu: "actions",
              link: "vuex.vuejs.org/",
              key: "api/#actions",
              keyRu: "api/#actions"
            },
            {
              name: "getters",
              nameRu: "getters",
              link: "vuex.vuejs.org/",
              key: "api/#getters",
              keyRu: "api/#getters"
            },
            {
              name: "modules",
              nameRu: "modules",
              link: "vuex.vuejs.org/",
              key: "api/#modules",
              keyRu: "api/#modules"
            },
            {
              name: "plugins",
              nameRu: "plugins",
              link: "vuex.vuejs.org/",
              key: "api/#plugins",
              keyRu: "api/#plugins"
            },
            {
              name: "strict",
              nameRu: "strict",
              link: "vuex.vuejs.org/",
              key: "api/#strict",
              keyRu: "api/#strict"
            },
            {
              name: "devtools",
              nameRu: "devtools",
              link: "vuex.vuejs.org/",
              key: "api/#devtools",
              keyRu: "api/#devtools"
            }
          ]
        },
        {
          name: "Instance Properties",
          nameRu: "Свойства экземпляра Vuex.Store",
          subCategories: [
            {
              name: "state",
              nameRu: "state",
              link: "vuex.vuejs.org/",
              key: "api/#vuex-store-instance-properties",
              keyRu: "api/#vuex-store-instance-properties"
            },
            {
              name: "getters",
              nameRu: "getters",
              link: "vuex.vuejs.org/",
              key: "api/#getters-2",
              keyRu: "api/#getters-2"
            }
          ]
        },
        {
          name: "Instance Methods",
          nameRu: "Методы экземпляра Vuex.Store",
          subCategories: [
            {
              name: "commit",
              nameRu: "commit",
              link: "vuex.vuejs.org/",
              key: "api/#commit",
              keyRu: "api/#commit"
            },
            {
              name: "dispatch",
              nameRu: "dispatch",
              link: "vuex.vuejs.org/",
              key: "api/#dispatch",
              keyRu: "api/#dispatch"
            },
            {
              name: "replaceState",
              nameRu: "replaceState",
              link: "vuex.vuejs.org/",
              key: "api/#replacestate",
              keyRu: "api/#replacestate"
            },
            {
              name: "watch",
              nameRu: "watch",
              link: "vuex.vuejs.org/",
              key: "api/#watch",
              keyRu: "api/#watch"
            },
            {
              name: "subscribe",
              nameRu: "subscribe",
              link: "vuex.vuejs.org/",
              key: "api/#subscribe",
              keyRu: "api/#subscribe"
            },
            {
              name: "subscribeAction",
              nameRu: "subscribeAction",
              link: "vuex.vuejs.org/",
              key: "api/#subscribeaction",
              keyRu: "api/#subscribeaction"
            },
            {
              name: "registerModule",
              nameRu: "registerModule",
              link: "vuex.vuejs.org/",
              key: "api/#registermodule",
              keyRu: "api/#registermodule"
            },
            {
              name: "unregisterModule",
              nameRu: "unregisterModule",
              link: "vuex.vuejs.org/",
              key: "api/#unregistermodule",
              keyRu: "api/#unregistermodule"
            },
            {
              name: "hotUpdate",
              nameRu: "hotUpdate",
              link: "vuex.vuejs.org/",
              key: "api/#hotupdate",
              keyRu: "api/#hotupdate"
            }
          ]
        },
        {
          name: "Component Binding Helpers",
          nameRu: "Вспомогательные функции для компонентов",
          subCategories: [
            {
              name: "mapState",
              nameRu: "mapState",
              link: "vuex.vuejs.org/",
              key: "api/#mapstate",
              keyRu: "api/#mapstate"
            },
            {
              name: "mapGetters",
              nameRu: "mapGetters",
              link: "vuex.vuejs.org/",
              key: "api/#mapgetters",
              keyRu: "api/#mapgetters"
            },
            {
              name: "mapActions",
              nameRu: "mapActions",
              link: "vuex.vuejs.org/",
              key: "api/#mapactions",
              keyRu: "api/#mapactions"
            },
            {
              name: "mapMutations",
              nameRu: "mapMutations",
              link: "vuex.vuejs.org/",
              key: "api/#mapmutations",
              keyRu: "api/#mapmutations"
            },
            {
              name: "createNamespacedHelpers",
              nameRu: "createNamespacedHelpers",
              link: "vuex.vuejs.org/",
              key: "api/#createnamespacedhelpers",
              keyRu: "api/#createnamespacedhelpers"
            }
          ]
        }
      ]
    };
  }
};
</script>
