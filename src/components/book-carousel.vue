<template lang="pug">
b-carousel.book-carousel(
  :autoplay="false"
  with-carousel-list
  :indicator="false"
  :value="0"
  v-if="loaded"
)
  b-carousel-item(v-for="(item, i) in items", :key="i")
    figure.image
      b-image(:src="item.image", ratio="16by10")
  template(#list="props")
    b-carousel-list(
      v-model="props.active"
      :data="items"
      v-bind="al"
      @switch="props.switch($event, false)"
      as-indicator
    )
</template>

<script>

const PAGES = [
  '/public/book/pages/HDWGSB11-min.jpg',
  '/public/book/pages/HDWGSB-min.jpg',
  '/public/book/pages/HDWGSB2-min.jpg',
  '/public/book/pages/HDWGSB3-min.jpg',
  '/public/book/pages/HDWGSB5-min.jpg',
  // '/public/book/pages/HDWGSB6-min.jpg',
  '/public/book/pages/HDWGSB8-min.jpg',
  '/public/book/pages/HDWGSB9-min.jpg',
  // '/public/book/pages/HDWGSB10-min.jpg',
  // '/public/book/pages/HDWGSB13-min.jpg',
  // '/public/book/pages/HDWGSB14-min.jpg',
  // '/public/book/pages/HDWGSB15-min.jpg',
  '/public/book/pages/HDWGSB16-min.jpg',
  '/public/book/pages/HDWGSB12-min.jpg',

]

export default {
  name: 'book-carousel'
  , props: {
  }
  , mounted(){
    this.loaded = true
  }
  , data: () => ({
    loaded: false,
    al: {
      hasGrayscale: true,
      itemsToShow: 4,
      breakpoints: {
        768: {
          hasGrayscale: false,
          itemsToShow: 4
        },
        960: {
          hasGrayscale: true,
          itemsToShow: 6
        }
      }
    },
    items: PAGES.map((image, i) => {
      return {
        title: `Page ${i+1}`,
        image
      }
    })
  })
}
</script>

<style lang="sass">
.book-carousel
  max-width: 100%
</style>
