<template lang="pug">
.app
  .top-nav
    .banner
      img(src="/public/banner.jpg")
    .container
      slot(name="header")
  .main-container
    slot
  .footer-container
    .section
      .container
        slot(name="footer")
</template>

<script>
export default {
  name: 'app'
  // , props: {
  // }
  // , data: () => ({
  // })
  , components: {
  }
  , created(){
  }
  // , computed: {
  // }
  , methods: {
  }
}
</script>

<style lang="sass">
@import '@/styles/_variables.scss'
.top-nav
  background: #333
  .banner img
    display: block
  .navbar
    background: transparent
    .navbar-menu
      background: #333
    .navbar-start
      margin: 0 auto
    .navbar-end
      display: none
    .navbar-item
      transition: background 0.15s ease
    .navbar-item,
    .navbar-burger
      color: white
    .navbar-item:hover,
    a.navbar-item.is-active:not(:focus):not(:hover),
    .navbar-link.is-active:not(:focus):not(:hover)
      background: $blue
</style>
