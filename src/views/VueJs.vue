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
  name: "VueJs",
  components: { bodyForData },
  props: ["lang"],
  data() {
    return {
      linkType: "vue-js",
      dataTechnology: [
        {
          name: "Essentials",
          nameRu: "Основы",
          subCategories: [
            {
              name: "Installation",
              nameRu: "Установка",
              link: "vuejs.org/v2/",
              key: "guide/installation.html",
              keyRu: "guide/installation.html"
            },
            {
              name: "The Vue Instance",
              nameRu: "Экземпляр Vue",
              link: "vuejs.org/v2/",
              key: "guide/instance.html",
              keyRu: "guide/instance.html"
            },
            {
              name: "Template Syntax",
              nameRu: "Синтаксис шаблонов",
              link: "vuejs.org/v2/",
              key: "guide/syntax.html",
              keyRu: "guide/syntax.html"
            },
            {
              name: "Computed Properties and Watchers",
              nameRu: "Вычисляемые свойства и слежение",
              link: "vuejs.org/v2/",
              key: "guide/computed.html",
              keyRu: "guide/computed.html"
            },
            {
              name: "Class and Style Bindings",
              nameRu: "Работа с классами и стилями",
              link: "vuejs.org/v2/",
              key: "guide/class-and-style.html",
              keyRu: "guide/class-and-style.html"
            },
            {
              name: "Conditional Rendering",
              nameRu: "Условная отрисовка",
              link: "vuejs.org/v2/",
              key: "guide/conditional.html",
              keyRu: "guide/conditional.html"
            },
            {
              name: "List Rendering",
              nameRu: "Отрисовка списков",
              link: "vuejs.org/v2/",
              key: "guide/list.html",
              keyRu: "guide/list.html"
            },
            {
              name: "Event Handling",
              nameRu: "Обработка событий",
              link: "vuejs.org/v2/",
              key: "guide/events.html",
              keyRu: "guide/events.html"
            },
            {
              name: "Form Input Bindings",
              nameRu: "Работа с формами",
              link: "vuejs.org/v2/",
              key: "guide/forms.html",
              keyRu: "guide/forms.html"
            },
            {
              name: "Components Basics",
              nameRu: "Основы компонентов",
              link: "vuejs.org/v2/",
              key: "guide/components.html",
              keyRu: "guide/components.html"
            }
          ]
        },
        {
          name: "Components In-Depth",
          nameRu: "Продвинутые компоненты",
          subCategories: [
            {
              name: "Component Registration",
              nameRu: "Регистрация компонентов",
              link: "vuejs.org/v2/",
              key: "guide/components-registration.html",
              keyRu: "guide/components-registration.html"
            },
            {
              name: "Props",
              nameRu: "Входные параметры",
              link: "vuejs.org/v2/",
              key: "guide/components-props.html",
              keyRu: "guide/components-props.html"
            },
            {
              name: "Custom Events",
              nameRu: "Пользовательские события",
              link: "vuejs.org/v2/",
              key: "guide/components-custom-events.html",
              keyRu: "guide/components-custom-events.html"
            },
            {
              name: "Slots",
              nameRu: "Слоты",
              link: "vuejs.org/v2/",
              key: "guide/components-slots.html",
              keyRu: "guide/components-slots.html"
            },
            {
              name: "Dynamic & Async Components",
              nameRu: "Динамические и асинхронные компоненты",
              link: "vuejs.org/v2/",
              key: "guide/components-dynamic-async.html",
              keyRu: "guide/components-dynamic-async.html"
            },
            {
              name: "Handling Edge Cases",
              nameRu: "Обработка крайних случаев",
              link: "vuejs.org/v2/",
              key: "guide/components-edge-cases.html",
              keyRu: "guide/components-edge-cases.html"
            }
          ]
        },
        {
          name: "Config",
          nameRu: "Глобальные параметры",
          subCategories: [
            {
              name: "silent",
              nameRu: "silent",
              link: "vuejs.org/v2/api/",
              key: "#silent",
              keyRu: "#silent"
            },
            {
              name: "optionMergeStrategies",
              nameRu: "optionMergeStrategies",
              link: "vuejs.org/v2/api/",
              key: "#optionMergeStrategies",
              keyRu: "#optionMergeStrategies"
            },
            {
              name: "errorHandler",
              nameRu: "errorHandler",
              link: "vuejs.org/v2/api/",
              key: "#errorHandler",
              keyRu: "#errorHandler"
            },
            {
              name: "ignoredElements",
              nameRu: "ignoredElements",
              link: "vuejs.org/v2/api/",
              key: "#ignoredElements",
              keyRu: "#ignoredElements"
            },
            {
              name: "keyCodes",
              nameRu: "keyCodes",
              link: "vuejs.org/v2/api/",
              key: "#keyCodes",
              keyRu: "#keyCodes"
            },
            {
              name: "performance",
              nameRu: "performance",
              link: "vuejs.org/v2/api/",
              key: "#performance",
              keyRu: "#performance"
            },
            {
              name: "productionTip",
              nameRu: "productionTip",
              link: "vuejs.org/v2/api/",
              key: "#productionTip",
              keyRu: "#productionTip"
            }
          ]
        },
        {
          name: "API",
          nameRu: "API",
          subCategories: [
            {
              name: "Vue.extend",
              nameRu: "Vue.extend",
              link: "vuejs.org/v2/api/",
              key: "#Vue-extend",
              keyRu: "#Vue-extend"
            },
            {
              name: "Vue.nextTick",
              nameRu: "Vue.nextTick",
              link: "vuejs.org/v2/api/",
              key: "#Vue-nextTick",
              keyRu: "#Vue-nextTick"
            },
            {
              name: "Vue.set",
              nameRu: "Vue.set",
              link: "vuejs.org/v2/api/",
              key: "#Vue-set",
              keyRu: "#Vue-set"
            },
            {
              name: "Vue.delete",
              nameRu: "Vue.delete",
              link: "vuejs.org/v2/api/",
              key: "#Vue-delete",
              keyRu: "#Vue-delete"
            },
            {
              name: "Vue.directive",
              nameRu: "Vue.directive",
              link: "vuejs.org/v2/api/",
              key: "#Vue-directive",
              keyRu: "#Vue-directive"
            },
            {
              name: "Vue.filter",
              nameRu: "Vue.filter",
              link: "vuejs.org/v2/api/",
              key: "#Vue-filter",
              keyRu: "#Vue-filter"
            },
            {
              name: "Vue.component",
              nameRu: "Vue.component",
              link: "vuejs.org/v2/api/",
              key: "#Vue-component",
              keyRu: "#Vue-component"
            },
            {
              name: "Vue.use",
              nameRu: "Vue.use",
              link: "vuejs.org/v2/api/",
              key: "#Vue-use",
              keyRu: "#Vue-use"
            },
            {
              name: "Vue.mixin",
              nameRu: "Vue.mixin",
              link: "vuejs.org/v2/api/",
              key: "#Vue-mixin",
              keyRu: "#Vue-mixin"
            },
            {
              name: "Vue.compile",
              nameRu: "Vue.compile",
              link: "vuejs.org/v2/api/",
              key: "#Vue-compile",
              keyRu: "#Vue-compile"
            },
            {
              name: "Vue.version",
              nameRu: "Vue.version",
              link: "vuejs.org/v2/api/",
              key: "#Vue-version",
              keyRu: "#Vue-version"
            }
          ]
        },
        {
          name: "Lifecycle Hooks",
          nameRu: "Опции — хуки жизненного цикла",
          subCategories: [
            {
              name: "beforeCreate",
              nameRu: "beforeCreate",
              link: "vuejs.org/v2/api/",
              key: "#beforeCreate",
              keyRu: "#beforeCreate"
            },
            {
              name: "created",
              nameRu: "created",
              link: "vuejs.org/v2/api/",
              key: "#created",
              keyRu: "#created"
            },
            {
              name: "beforeMount",
              nameRu: "beforeMount",
              link: "vuejs.org/v2/api/",
              key: "#beforeMount",
              keyRu: "#beforeMount"
            },
            {
              name: "mounted",
              nameRu: "mounted",
              link: "vuejs.org/v2/api/",
              key: "#mounted",
              keyRu: "#mounted"
            },
            {
              name: "beforeUpdate",
              nameRu: "beforeUpdate",
              link: "vuejs.org/v2/api/",
              key: "#beforeUpdate",
              keyRu: "#beforeUpdate"
            },
            {
              name: "updated",
              nameRu: "updated",
              link: "vuejs.org/v2/api/",
              key: "#updated",
              keyRu: "#updated"
            },
            {
              name: "activated",
              nameRu: "activated",
              link: "vuejs.org/v2/api/",
              key: "#activated",
              keyRu: "#activated"
            },
            {
              name: "deactivated",
              nameRu: "deactivated",
              link: "vuejs.org/v2/api/",
              key: "#deactivated",
              keyRu: "#deactivated"
            },
            {
              name: "beforeDestroy",
              nameRu: "beforeDestroy",
              link: "vuejs.org/v2/api/",
              key: "#beforeDestroy",
              keyRu: "#beforeDestroy"
            },
            {
              name: "destroyed",
              nameRu: "destroyed",
              link: "vuejs.org/v2/api/",
              key: "#destroyed",
              keyRu: "#destroyed"
            }
          ]
        },
        {
          name: "Data",
          nameRu: "Опции — данные",
          subCategories: [
            {
              name: "data",
              nameRu: "data",
              link: "vuejs.org/v2/api/",
              key: "#data",
              keyRu: "#data"
            },
            {
              name: "props",
              nameRu: "props",
              link: "vuejs.org/v2/api/",
              key: "#props",
              keyRu: "#props"
            },
            {
              name: "propsData",
              nameRu: "propsData",
              link: "vuejs.org/v2/api/",
              key: "#propsData",
              keyRu: "#propsData"
            },
            {
              name: "computed",
              nameRu: "computed",
              link: "vuejs.org/v2/api/",
              key: "#computed",
              keyRu: "#computed"
            },
            {
              name: "methods",
              nameRu: "methods",
              link: "vuejs.org/v2/api/",
              key: "#methods",
              keyRu: "#methods"
            },
            {
              name: "watch",
              nameRu: "watch",
              link: "vuejs.org/v2/api/",
              key: "#watch",
              keyRu: "#watch"
            }
          ]
        },
        {
          name: "DOM",
          nameRu: "DOM",
          subCategories: [
            {
              name: "el",
              nameRu: "el",
              link: "vuejs.org/v2/api/",
              key: "#el",
              keyRu: "#el"
            },
            {
              name: "template",
              nameRu: "template",
              link: "vuejs.org/v2/api/",
              key: "#template",
              keyRu: "#template"
            },
            {
              name: "render",
              nameRu: "render",
              link: "vuejs.org/v2/api/",
              key: "#render",
              keyRu: "#render"
            },
            {
              name: "renderError",
              nameRu: "renderError",
              link: "vuejs.org/v2/api/",
              key: "#renderError",
              keyRu: "#renderError"
            }
          ]
        },
        {
          name: "Assets",
          nameRu: "Опции — ресурсы",
          subCategories: [
            {
              name: "directives",
              nameRu: "directives",
              link: "vuejs.org/v2/api/",
              key: "#directives",
              keyRu: "#directives"
            },
            {
              name: "filters",
              nameRu: "filters",
              link: "vuejs.org/v2/api/",
              key: "#filters",
              keyRu: "#filters"
            },
            {
              name: "components",
              nameRu: "components",
              link: "vuejs.org/v2/api/",
              key: "#components",
              keyRu: "#components"
            }
          ]
        },
        {
          name: "Composition",
          nameRu: "Опции — композиция",
          subCategories: [
            {
              name: "parent",
              nameRu: "parent",
              link: "vuejs.org/v2/api/",
              key: "#parent",
              keyRu: "#parent"
            },
            {
              name: "mixins",
              nameRu: "mixins",
              link: "vuejs.org/v2/api/",
              key: "#mixins",
              keyRu: "#mixins"
            },
            {
              name: "extends",
              nameRu: "extends",
              link: "vuejs.org/v2/api/",
              key: "#extends",
              keyRu: "#extends"
            },
            {
              name: "provide / inject",
              nameRu: "provide / inject",
              link: "vuejs.org/v2/api/",
              key: "#provide-inject",
              keyRu: "#provide-inject"
            }
          ]
        },
        {
          name: "Misc",
          nameRu: "Опции — разное",
          subCategories: [
            {
              name: "name",
              nameRu: "name",
              link: "vuejs.org/v2/api/",
              key: "#name",
              keyRu: "#name"
            },
            {
              name: "delimiters",
              nameRu: "delimiters",
              link: "vuejs.org/v2/api/",
              key: "#delimiters",
              keyRu: "#delimiters"
            },
            {
              name: "functional",
              nameRu: "functional",
              link: "vuejs.org/v2/api/",
              key: "#functional",
              keyRu: "#functional"
            },
            {
              name: "model",
              nameRu: "model",
              link: "vuejs.org/v2/api/",
              key: "#model",
              keyRu: "#model"
            }
          ]
        },
        {
          name: "Instance Methods",
          nameRu: "Методы экземпляра — данные",
          subCategories: [
            {
              name: "vm.$watch",
              nameRu: "vm.$watch",
              link: "vuejs.org/v2/api/",
              key: "#vm-watch",
              keyRu: "#vm-watch"
            },
            {
              name: "vm.$set",
              nameRu: "vm.$set",
              link: "vuejs.org/v2/api/",
              key: "#vm-set",
              keyRu: "#vm-set"
            },
            {
              name: "vm.$delete",
              nameRu: "vm.$delete",
              link: "vuejs.org/v2/api/",
              key: "#vm-delete",
              keyRu: "#vm-delete"
            }
          ]
        },
        {
          name: "Events",
          nameRu: "Методы экземпляра — события",
          subCategories: [
            {
              name: "vm.$on",
              nameRu: "vm.$on",
              link: "vuejs.org/v2/api/",
              key: "#vm-on",
              keyRu: "#vm-on"
            },
            {
              name: "vm.$once",
              nameRu: "vm.$once",
              link: "vuejs.org/v2/api/",
              key: "#vm-once",
              keyRu: "#vm-once"
            },
            {
              name: "vm.$off",
              nameRu: "vm.$off",
              link: "vuejs.org/v2/api/",
              key: "#vm-off",
              keyRu: "#vm-off"
            },
            {
              name: "vm.$emit",
              nameRu: "vm.$emit",
              link: "vuejs.org/v2/api/",
              key: "#vm-emit",
              keyRu: "#vm-emit"
            }
          ]
        },
        {
          name: "Lifecycle",
          nameRu: "Методы экземпляра — жизненный цикл",
          subCategories: [
            {
              name: "vm.$mount",
              nameRu: "vm.$mount",
              link: "vuejs.org/v2/api/",
              key: "#vm-mount",
              keyRu: "#vm-mount"
            },
            {
              name: "vm.$forceUpdate",
              nameRu: "vm.$forceUpdate",
              link: "vuejs.org/v2/api/",
              key: "#vm-forceUpdate",
              keyRu: "#vm-forceUpdate"
            },
            {
              name: "vm.$nextTick",
              nameRu: "vm.$nextTick",
              link: "vuejs.org/v2/api/",
              key: "#vm-nextTick",
              keyRu: "#vm-nextTick"
            },
            {
              name: "vm.$destroy",
              nameRu: "vm.$destroy",
              link: "vuejs.org/v2/api/",
              key: "#vm-destroy",
              keyRu: "#vm-destroy"
            }
          ]
        },
        {
          name: "Properties",
          nameRu: "Свойства экземпляра",
          subCategories: [
            {
              name: "vm.$data",
              nameRu: "vm.$data",
              link: "vuejs.org/v2/api/",
              key: "#vm-data",
              keyRu: "#vm-data"
            },
            {
              name: "vm.$props",
              nameRu: "vm.$props",
              link: "vuejs.org/v2/api/",
              key: "#vm-props",
              keyRu: "#vm-props"
            },
            {
              name: "vm.$el",
              nameRu: "vm.$el",
              link: "vuejs.org/v2/api/",
              key: "#vm-el",
              keyRu: "#vm-el"
            },
            {
              name: "vm.$options",
              nameRu: "vm.$options",
              link: "vuejs.org/v2/api/",
              key: "#vm-options",
              keyRu: "#vm-options"
            },
            {
              name: "vm.$parent",
              nameRu: "vm.$parent",
              link: "vuejs.org/v2/api/",
              key: "#vm-parent",
              keyRu: "#vm-parent"
            },
            {
              name: "vm.$root",
              nameRu: "vm.$root",
              link: "vuejs.org/v2/api/",
              key: "#vm-root",
              keyRu: "#vm-root"
            },
            {
              name: "vm.$children",
              nameRu: "vm.$children",
              link: "vuejs.org/v2/api/",
              key: "#vm-children",
              keyRu: "#vm-children"
            },
            {
              name: "vm.$slots",
              nameRu: "vm.$slots",
              link: "vuejs.org/v2/api/",
              key: "#vm-slots",
              keyRu: "#vm-slots"
            },
            {
              name: "vm.$scopedSlots",
              nameRu: "vm.$scopedSlots",
              link: "vuejs.org/v2/api/",
              key: "#vm-scopedSlots",
              keyRu: "#vm-scopedSlots"
            },
            {
              name: "vm.$refs",
              nameRu: "vm.$refs",
              link: "vuejs.org/v2/api/",
              key: "#vm-refs",
              keyRu: "#vm-refs"
            },
            {
              name: "vm.$isServer",
              nameRu: "vm.$isServer",
              link: "vuejs.org/v2/api/",
              key: "#vm-isServer",
              keyRu: "#vm-isServer"
            }
          ]
        },
        {
          name: "Directives",
          nameRu: "Директивы",
          subCategories: [
            {
              name: "v-text",
              nameRu: "v-text",
              link: "vuejs.org/v2/api/",
              key: "#v-text",
              keyRu: "#v-text"
            },
            {
              name: "v-html",
              nameRu: "v-html",
              link: "vuejs.org/v2/api/",
              key: "#v-html",
              keyRu: "#v-html"
            },
            {
              name: "v-show",
              nameRu: "v-show",
              link: "vuejs.org/v2/api/",
              key: "#v-show",
              keyRu: "#v-show"
            },
            {
              name: "v-if",
              nameRu: "v-if",
              link: "vuejs.org/v2/api/",
              key: "#v-if",
              keyRu: "#v-if"
            },
            {
              name: "v-else-if",
              nameRu: "v-else-if",
              link: "vuejs.org/v2/api/",
              key: "#v-else-if",
              keyRu: "#v-else-if"
            },
            {
              name: "v-else",
              nameRu: "v-else",
              link: "vuejs.org/v2/api/",
              key: "#v-else",
              keyRu: "#v-else"
            },
            {
              name: "v-for",
              nameRu: "v-for",
              link: "vuejs.org/v2/api/",
              key: "#v-for",
              keyRu: "#v-for"
            },
            {
              name: "v-on",
              nameRu: "v-on",
              link: "vuejs.org/v2/api/",
              key: "#v-on",
              keyRu: "#v-on"
            },
            {
              name: "v-bind",
              nameRu: "v-bind",
              link: "vuejs.org/v2/api/",
              key: "#v-bind",
              keyRu: "#v-bind"
            },
            {
              name: "v-model",
              nameRu: "v-model",
              link: "vuejs.org/v2/api/",
              key: "#v-model",
              keyRu: "#v-model"
            },
            {
              name: "v-pre",
              nameRu: "v-pre",
              link: "vuejs.org/v2/api/",
              key: "#v-pre",
              keyRu: "#v-pre"
            },
            {
              name: "v-cloak",
              nameRu: "v-cloak",
              link: "vuejs.org/v2/api/",
              key: "#v-cloak",
              keyRu: "#v-cloak"
            },
            {
              name: "v-once",
              nameRu: "v-once",
              link: "vuejs.org/v2/api/",
              key: "#v-once",
              keyRu: "#v-once"
            }
          ]
        },
        {
          name: "Attributes",
          nameRu: "Специальные атрибуты",
          subCategories: [
            {
              name: "key",
              nameRu: "key",
              link: "vuejs.org/v2/api/",
              key: "#key",
              keyRu: "#key"
            },
            {
              name: "ref",
              nameRu: "ref",
              link: "vuejs.org/v2/api/",
              key: "#ref",
              keyRu: "#ref"
            },
            {
              name: "slot",
              nameRu: "slot",
              link: "vuejs.org/v2/api/",
              key: "#slot",
              keyRu: "#slot"
            },
            {
              name: "is",
              nameRu: "is",
              link: "vuejs.org/v2/api/",
              key: "#is",
              keyRu: "#is"
            }
          ]
        },
        {
          name: "Built-In",
          nameRu: "Встроенные компоненты",
          subCategories: [
            {
              name: "component",
              nameRu: "component",
              link: "vuejs.org/v2/api/",
              key: "#component",
              keyRu: "#component"
            },
            {
              name: "transition",
              nameRu: "transition",
              link: "vuejs.org/v2/api/",
              key: "#transition",
              keyRu: "#transition"
            },
            {
              name: "transition-group",
              nameRu: "transition-group",
              link: "vuejs.org/v2/api/",
              key: "#transition-group",
              keyRu: "#transition-group"
            },
            {
              name: "keep-alive",
              nameRu: "keep-alive",
              link: "vuejs.org/v2/api/",
              key: "#keep-alive",
              keyRu: "#keep-alive"
            },
            {
              name: "slot-1",
              nameRu: "slot-1",
              link: "vuejs.org/v2/api/",
              key: "#slot-1",
              keyRu: "#slot-1"
            }
          ]
        },
        {
          name: "v-bind",
          nameRu: "v-bind",
          subCategories: [
            {
              name: "v-bind.prop",
              nameRu: "v-bind.prop",
              link: "vuejs.org/v2/api/",
              key: "#v-bind",
              keyRu: "#v-bind"
            },
            {
              name: "v-bind.camel",
              nameRu: "v-bind.camel",
              link: "vuejs.org/v2/api/",
              key: "#v-bind",
              keyRu: "#v-bind"
            },
            {
              name: "v-bind.sync",
              nameRu: "v-bind.sync",
              link: "vuejs.org/v2/api/",
              key: "#v-bind",
              keyRu: "#v-bind"
            }
          ]
        },
        {
          name: "v-model",
          nameRu: "v-model",
          subCategories: [
            {
              name: "v-model.lazy",
              nameRu: "v-model.lazy",
              link: "vuejs.org/v2/guide/",
              key: "forms.html#Modifiers",
              keyRu: "forms.html#Модификаторы"
            },
            {
              name: "v-model.number",
              nameRu: "v-model.number",
              link: "vuejs.org/v2/guide/",
              key: "forms.html#Modifiers",
              keyRu: "forms.html#Модификаторы"
            },
            {
              name: "v-model.trim",
              nameRu: "v-model.trim",
              link: "vuejs.org/v2/guide/",
              key: "forms.html#Modifiers",
              keyRu: "forms.html#Модификаторы"
            }
          ]
        },
        {
          name: "Event",
          nameRu: "Пользовательские события",
          subCategories: [
            {
              name: "v-on:click.native",
              nameRu: "v-on:click.native",
              link: "vuejs.org/v2/guide/",
              key:
                "components-custom-events.html#Binding-Native-Events-to-Components",
              keyRu:
                "components-custom-events.html#Подписка-на-нативные-события-в-компонентах"
            },
            {
              name: "v-on:click.stop",
              nameRu: "v-on:click.stop",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Event-Modifiers",
              keyRu: "forms.html##Модификаторы-событий"
            },
            {
              name: "v-on:click.prevent",
              nameRu: "v-on:click.prevent",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Event-Modifiers",
              keyRu: "forms.html##Модификаторы-событий"
            },
            {
              name: "v-on:click.passive",
              nameRu: "v-on:click.passive",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Event-Modifiers",
              keyRu: "forms.html##Модификаторы-событий"
            },
            {
              name: "v-on:click.capture",
              nameRu: "v-on:click.capture",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Event-Modifiers",
              keyRu: "forms.html##Модификаторы-событий"
            },
            {
              name: "v-on:click.self",
              nameRu: "v-on:click.self",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Event-Modifiers",
              keyRu: "forms.html##Модификаторы-событий"
            },
            {
              name: "v-on:click.once",
              nameRu: "v-on:click.once",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Event-Modifiers",
              keyRu: "forms.html##Модификаторы-событий"
            }
          ]
        },
        {
          name: "Mouse",
          nameRu: "Обработка событий мыши",
          subCategories: [
            {
              name: "v-on:click.left",
              nameRu: "v-on:click.left",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Mouse-Button-Modifiers",
              keyRu: "events.html#Модификаторы-клавиш-мыши"
            },
            {
              name: "v-on:click.right",
              nameRu: "v-on:click.right",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Mouse-Button-Modifiers",
              keyRu: "events.html#Модификаторы-клавиш-мыши"
            },
            {
              name: "v-on:click.middle",
              nameRu: "v-on:click.middle",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Mouse-Button-Modifiers",
              keyRu: "events.html#Модификаторы-клавиш-мыши"
            }
          ]
        },
        {
          name: "Keyboard",
          nameRu: "Обработка событий клавиатуры",
          subCategories: [
            {
              name: "v-on:keyup.ctrl",
              nameRu: "v-on:keyup.ctrl",
              link: "vuejs.org/v2/guide/",
              key: "events.html#System-Modifier-Keys",
              keyRu: "events.html#Системные-модификаторы-клавиш"
            },
            {
              name: "v-on:keyup.alt",
              nameRu: "v-on:keyup.alt",
              link: "vuejs.org/v2/guide/",
              key: "events.html#System-Modifier-Keys",
              keyRu: "events.html#Системные-модификаторы-клавиш"
            },
            {
              name: "v-on:keyup.shift",
              nameRu: "v-on:keyup.shift",
              link: "vuejs.org/v2/guide/",
              key: "events.html#System-Modifier-Keys",
              keyRu: "events.html#Системные-модификаторы-клавиш"
            },
            {
              name: "v-on:keyup.meta",
              nameRu: "v-on:keyup.meta",
              link: "vuejs.org/v2/guide/",
              key: "events.html#System-Modifier-Keys",
              keyRu: "events.html#Системные-модификаторы-клавиш"
            },
            {
              name: "v-on:keyup.enter",
              nameRu: "v-on:keyup.enter",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Key-Codes",
              keyRu: "events.html#Коды-клавиш"
            },
            {
              name: "v-on:keyup.tab",
              nameRu: "v-on:keyup.tab",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Key-Codes",
              keyRu: "events.html#Коды-клавиш"
            },
            {
              name: "v-on:keyup.delete",
              nameRu: "v-on:keyup.delete",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Key-Codes",
              keyRu: "events.html#Коды-клавиш"
            },
            {
              name: "v-on:keyup.esc",
              nameRu: "v-on:keyup.esc",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Key-Codes",
              keyRu: "events.html#Коды-клавиш"
            },
            {
              name: "v-on:keyup.up",
              nameRu: "v-on:keyup.up",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Key-Codes",
              keyRu: "events.html#Коды-клавиш"
            },
            {
              name: "v-on:keyup.down",
              nameRu: "v-on:keyup.down",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Key-Codes",
              keyRu: "events.html#Коды-клавиш"
            },
            {
              name: "v-on:keyup.left",
              nameRu: "v-on:keyup.left",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Key-Codes",
              keyRu: "events.html#Коды-клавиш"
            },
            {
              name: "v-on:keyup.right",
              nameRu: "v-on:keyup.right",
              link: "vuejs.org/v2/guide/",
              key: "events.html#Key-Codes",
              keyRu: "events.html#Коды-клавиш"
            }
          ]
        }
      ]
    };
  }
};
</script>
