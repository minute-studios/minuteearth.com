<template lang="pug">
a(:href="link").lesson-plan-card.card
  .card-image
    figure.image.is-16by9
      img(:src="thumb", :alt="title")
  .card-content(:class="{ condensed: !title }")
    .content
      .subtitle {{ subtitle }}
      .title(v-if="title") {{ title }}
</template>

<script>

export default {
  name: 'lesson-plan-card'
  , props: {
    title: String,
    subtitle: String,
    thumb: String,
    link: String
  }
  , data: () => ({
  })
}
</script>

<style lang="sass">
$blue: #295abe
.lesson-plan-card.card
  display: block
  border-radius: 20px
  border: 1px solid transparentize($blue, 0.5)
  overflow: hidden
  .card-image
    background: white
    .image
      border-radius: 20px
      overflow: hidden
      -webkit-backface-visibility: hidden
      -moz-backface-visibility: hidden
      -webkit-transform: translate3d(0, 0, 0)
      -moz-transform: translate3d(0, 0, 0)
      img
        height: auto
        opacity: 0.9
        transition: transform 10s cubic-bezier(0.26, 0.03, 0.32, 1.01), opacity 0.3s ease

  &:hover,
  &:active
    .image img
      transform: scale(1.5)
  &:active .image img
    opacity: 1
  .card-content
    position: absolute
    bottom: 0
    width: 100%
    background: transparentize($blue, 0.1)
    color: white
    padding: 1.3rem 1.5rem
    border-radius: 0 0 20px 20px
    &.condensed
      padding: 0.75rem 1.5rem
    .title,
    .subtitle
      color: white
    .title
      margin-top: -1.6rem
      font-size: 1.4rem
      font-weight: bold
      letter-spacing: 1px
</style>
