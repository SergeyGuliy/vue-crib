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
  name: "VueRouter",
  props: ["lang"],
  components: { bodyForData },
  data() {
    return {
      linkType: "vue-router",
      dataTechnology: [
        {
          name: "Essentials",
          nameRu: "Основы",
          subCategories: [
            {
              name: "Installation",
              nameRu: "Установка",
              link: "router.vuejs.org/",
              key: "installation.html",
              keyRu: "installation.html"
            },
            {
              name: "Dynamic Route Matching",
              nameRu: "Динамические пути",
              link: "router.vuejs.org/",
              key: "guide/essentials/dynamic-matching.html",
              keyRu: "guide/essentials/dynamic-matching.html"
            },
            {
              name: "Nested Routes",
              nameRu: "Вложенные маршруты",
              link: "router.vuejs.org/",
              key: "guide/essentials/nested-routes.html",
              keyRu: "guide/essentials/nested-routes.html"
            },
            {
              name: "Programmatic Navigation",
              nameRu: "Программная навигация",
              link: "router.vuejs.org/",
              key: "guide/essentials/navigation.html",
              keyRu: "guide/essentials/navigation.html"
            },
            {
              name: "Named Routes",
              nameRu: "Именованные маршруты",
              link: "router.vuejs.org/",
              key: "guide/essentials/named-routes.html",
              keyRu: "guide/essentials/named-routes.html"
            },
            {
              name: "Named Views",
              nameRu: "Именованные представления",
              link: "router.vuejs.org/",
              key: "guide/essentials/named-views.html",
              keyRu: "guide/essentials/named-views.html"
            },
            {
              name: "Redirect and Alias",
              nameRu: "Перенаправления и псевдонимы",
              link: "router.vuejs.org/",
              key: "guide/essentials/redirect-and-alias.html",
              keyRu: "guide/essentials/redirect-and-alias.html"
            },
            {
              name: "Passing Props to Route Components",
              nameRu: "Передача параметров в маршрут",
              link: "router.vuejs.org/",
              key: "guide/essentials/passing-props.html",
              keyRu: "guide/essentials/passing-props.html"
            },
            {
              name: "HTML5 History Mode",
              nameRu: "Режим HTML5 History",
              link: "router.vuejs.org/",
              key: "guide/essentials/history-mode.html",
              keyRu: "guide/essentials/history-mode.html"
            }
          ]
        },
        {
          name: "Advanced",
          nameRu: "Продвинутые темы",
          subCategories: [
            {
              name: "Navigation Guards",
              nameRu: "Навигационные хуки",
              link: "router.vuejs.org/",
              key: "guide/advanced/navigation-guards.html",
              keyRu: "guide/advanced/navigation-guards.html"
            },
            {
              name: "Route Meta Fields",
              nameRu: "Метаданные маршрутов",
              link: "router.vuejs.org/",
              key: "guide/advanced/meta.html",
              keyRu: "guide/advanced/meta.html"
            },
            {
              name: "Transitions",
              nameRu: "Анимация переходов",
              link: "router.vuejs.org/",
              key: "guide/advanced/transitions.html",
              keyRu: "guide/advanced/transitions.html"
            },
            {
              name: "Data Fetching",
              nameRu: "Загрузка данных",
              link: "router.vuejs.org/",
              key: "guide/advanced/data-fetching.html",
              keyRu: "guide/advanced/data-fetching.html"
            },
            {
              name: "Scroll Behavior",
              nameRu: "Поведение прокрутки страницы",
              link: "router.vuejs.org/",
              key: "guide/advanced/scroll-behavior.html",
              keyRu: "guide/advanced/scroll-behavior.html"
            },
            {
              name: "Lazy Loading Routes",
              nameRu: "Ленивая загрузка маршрутов",
              link: "router.vuejs.org/",
              key: "guide/advanced/lazy-loading.html",
              keyRu: "guide/advanced/lazy-loading.html"
            }
          ]
        },
        {
          name: "router-link",
          nameRu: "router-link",
          subCategories: [
            {
              name: "v-slot",
              nameRu: "v-slot",
              link: "router.vuejs.org/",
              key: "api/#v-slot-api-3-1-0",
              keyRu: "api/#v-slot-api-3-1-0"
            },
            {
              name: "to",
              nameRu: "to",
              link: "router.vuejs.org/",
              key: "api/#to",
              keyRu: "api/#to"
            },
            {
              name: "replace",
              nameRu: "replace",
              link: "router.vuejs.org/",
              key: "api/#replace",
              keyRu: "api/#replace"
            },
            {
              name: "append",
              nameRu: "append",
              link: "router.vuejs.org/",
              key: "api/#append",
              keyRu: "api/#append"
            },
            {
              name: "tag",
              nameRu: "tag",
              link: "router.vuejs.org/",
              key: "api/#tag",
              keyRu: "api/#tag"
            },
            {
              name: "active-class",
              nameRu: "active-class",
              link: "router.vuejs.org/",
              key: "api/#active-class",
              keyRu: "api/#active-class"
            },
            {
              name: "exact",
              nameRu: "exact",
              link: "router.vuejs.org/",
              key: "api/#exact",
              keyRu: "api/#exact"
            },
            {
              name: "event",
              nameRu: "event",
              link: "router.vuejs.org/",
              key: "api/#event",
              keyRu: "api/#event"
            },
            {
              name: "exact-active-class",
              nameRu: "exact-active-class",
              link: "router.vuejs.org/",
              key: "api/#exact-active-class",
              keyRu: "api/#exact-active-class"
            }
          ]
        },
        {
          name: "Router Construction Options",
          nameRu: "Опции конструктора Router",
          subCategories: [
            {
              name: "routes",
              nameRu: "routes",
              link: "router.vuejs.org/",
              key: "api/#routes",
              keyRu: "api/#routes"
            },
            {
              name: "mode",
              nameRu: "mode",
              link: "router.vuejs.org/",
              key: "api/#mode",
              keyRu: "api/#mode"
            },
            {
              name: "base",
              nameRu: "base",
              link: "router.vuejs.org/",
              key: "api/#base",
              keyRu: "api/#base"
            },
            {
              name: "linkActiveClass",
              nameRu: "linkActiveClass",
              link: "router.vuejs.org/",
              key: "api/#linkactiveclass",
              keyRu: "api/#linkactiveclass"
            },
            {
              name: "linkExactActiveClass",
              nameRu: "linkExactActiveClass",
              link: "router.vuejs.org/",
              key: "api/#linkexactactiveclass",
              keyRu: "api/#linkexactactiveclass"
            },
            {
              name: "scrollBehavior",
              nameRu: "scrollBehavior",
              link: "router.vuejs.org/",
              key: "api/#scrollbehavior",
              keyRu: "api/#scrollbehavior"
            },
            {
              name: "parseQuery / stringifyQuery",
              nameRu: "parseQuery / stringifyQuery",
              link: "router.vuejs.org/",
              key: "api/#parsequery-stringifyquery",
              keyRu: "api/#parsequery-stringifyquery"
            },
            {
              name: "fallback",
              nameRu: "fallback",
              link: "router.vuejs.org/",
              key: "api/#fallback",
              keyRu: "api/#fallback"
            }
          ]
        },
        {
          name: "Router Instance Properties",
          nameRu: "Свойства экземпляра Router",
          subCategories: [
            {
              name: "router.app",
              nameRu: "router.app",
              link: "router.vuejs.org/",
              key: "api/#router-app",
              keyRu: "api/#router-app"
            },
            {
              name: "router.mode",
              nameRu: "router.mode",
              link: "router.vuejs.org/",
              key: "api/#router-mode",
              keyRu: "api/#router-mode"
            },
            {
              name: "router.currentRoute",
              nameRu: "router.currentRoute",
              link: "router.vuejs.org/",
              key: "api/#router-currentroute",
              keyRu: "api/#router-currentroute"
            }
          ]
        },
        {
          name: "Router Instance Methods",
          nameRu: "Методы экземпляра Router",
          subCategories: [
            {
              name: "router.beforeEach",
              nameRu: "router.beforeEach",
              link: "router.vuejs.org/",
              key: "api/#router-beforeeach",
              keyRu: "api/#router-beforeeach"
            },
            {
              name: "router.beforeResolve",
              nameRu: "router.beforeResolve",
              link: "router.vuejs.org/",
              key: "api/#router-beforeeach",
              keyRu: "api/#router-beforeeach"
            },
            {
              name: "router.afterEach",
              nameRu: "router.afterEach",
              link: "router.vuejs.org/",
              key: "api/#router-beforeeach",
              keyRu: "api/#router-beforeeach"
            },
            {
              name: "router.push",
              nameRu: "router.push",
              link: "router.vuejs.org/",
              key: "api/#router-push",
              keyRu: "api/#router-push"
            },
            {
              name: "router.replace",
              nameRu: "router.replace",
              link: "router.vuejs.org/",
              key: "api/#router-push",
              keyRu: "api/#router-push"
            },
            {
              name: "router.go",
              nameRu: "router.go",
              link: "router.vuejs.org/",
              key: "api/#router-push",
              keyRu: "api/#router-push"
            },
            {
              name: "router.back",
              nameRu: "router.back",
              link: "router.vuejs.org/",
              key: "api/#router-push",
              keyRu: "api/#router-push"
            },
            {
              name: "router.forward",
              nameRu: "router.forward",
              link: "router.vuejs.org/",
              key: "api/#router-push",
              keyRu: "api/#router-push"
            },
            {
              name: "router.getMatchedComponents",
              nameRu: "router.getMatchedComponents",
              link: "router.vuejs.org/",
              key: "api/#router-getmatchedcomponents",
              keyRu: "api/#router-getmatchedcomponents"
            },
            {
              name: "router.resolve",
              nameRu: "router.resolve",
              link: "router.vuejs.org/",
              key: "api/#router-resolve",
              keyRu: "api/#router-resolve"
            },
            {
              name: "router.addRoutes",
              nameRu: "router.addRoutes",
              link: "router.vuejs.org/",
              key: "api/#router-addroutes",
              keyRu: "api/#router-addroutes"
            },
            {
              name: "router.onReady",
              nameRu: "router.onReady",
              link: "router.vuejs.org/",
              key: "api/#router-onready",
              keyRu: "api/#router-onready"
            },
            {
              name: "router.onError",
              nameRu: "router.onError",
              link: "router.vuejs.org/",
              key: "api/#router-onerror",
              keyRu: "api/#router-onerror"
            }
          ]
        },
        {
          name: "Route Object Properties",
          nameRu: "Свойства объекта Route",
          subCategories: [
            {
              name: "$route.path",
              nameRu: "$route.path",
              link: "router.vuejs.org/",
              key: "api/#route-object-properties",
              keyRu: "api/#свойства-объекта-route"
            },
            {
              name: "$route.params",
              nameRu: "$route.params",
              link: "router.vuejs.org/",
              key: "api/#route-object-properties",
              keyRu: "api/#свойства-объекта-route"
            },
            {
              name: "$route.query",
              nameRu: "$route.query",
              link: "router.vuejs.org/",
              key: "api/#route-object-properties",
              keyRu: "api/#свойства-объекта-route"
            },
            {
              name: "$route.hash",
              nameRu: "$route.hash",
              link: "router.vuejs.org/",
              key: "api/#route-object-properties",
              keyRu: "api/#свойства-объекта-route"
            },
            {
              name: "$route.fullPath",
              nameRu: "$route.fullPath",
              link: "router.vuejs.org/",
              key: "api/#route-object-properties",
              keyRu: "api/#свойства-объекта-route"
            },
            {
              name: "$route.matched",
              nameRu: "$route.matched",
              link: "router.vuejs.org/",
              key: "api/#route-object-properties",
              keyRu: "api/#свойства-объекта-route"
            },
            {
              name: "$route.name",
              nameRu: "$route.name",
              link: "router.vuejs.org/",
              key: "api/#route-object-properties",
              keyRu: "api/#свойства-объекта-route"
            },
            {
              name: "$route.redirectedFrom",
              nameRu: "$route.redirectedFrom",
              link: "router.vuejs.org/",
              key: "api/#route-object-properties",
              keyRu: "api/#свойства-объекта-route"
            }
          ]
        },
        {
          name: "Component Injected Properties",
          nameRu: "Внедряемые в компоненты свойства",
          subCategories: [
            {
              name: "this.$router",
              nameRu: "this.$router",
              link: "router.vuejs.org/",
              key: "api/#component-injected-properties",
              keyRu: "api/#внедряемые-в-компоненты-свойства"
            },
            {
              name: "this.route",
              nameRu: "this.route",
              link: "router.vuejs.org/",
              key: "api/#component-injected-properties",
              keyRu: "api/#внедряемые-в-компоненты-свойства"
            }
          ]
        }
      ]
    };
  }
};
</script>
