<template>
  <a
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
  >
    <slot></slot>
  </a>
</template>

<script>
  import routes from '../routes'

  export default {
    props: {
      href: String
    },
    computed: {
      isActive () {
        return this.href === window.location.pathname
      }
    }
  }
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
</style>
