<template>
  <div class="no-margin">
    <Breadcrump/>
    <img class="portrait" src="https://cdn.occloxium.com/i/zoomoid/press/knorck_merch_smart_cropped.jpg" alt=""/>
    <div class="wrapper">
      <h1 class="title">Merchandise</h1>
      <p>
        Zoomoid Merchandise is now available on
        <a href="https://spreadshirt.de/user/zoomoid">SpreadShirt</a>!
      </p>
      <div class="gallery">
        <div class="item">
          <img src="https://cdn.occloxium.com/i/zoomoid/press/knorck_merch_smart_portrait.jpg" alt=""/>
          <a class="label" href="https://www.spreadshirt.de/shop/design/zoomoid+collection+alpha+black+maenner+premium+t-shirt-D5d6e513f22250926636b8bd6?appearance=648&color=605E5E">
            Zoomoid Collection Alpha (Black/Anthracite)
          </a>
        </div>
        <span class="more">More pictures coming soon!</span>
      </div>
      <h1 class="title">
        Stickers
      </h1>
      <p>
        Stickers novadays are a very rare resource, as most of them have been
        placed all over the world (but mostly Aachen).
      </p>
      <div class="stickers">
        <div class="item out-of-stock">
          <img src="https://cdn.occloxium.com/i/zoomoid/press/stickers/gen_1.png" alt="1st generation zoomoid sticker">
          <span class="label">1<sup>st</sup> Generation</span>
        </div>
        <div class="item out-of-stock">
          <img src="https://cdn.occloxium.com/i/zoomoid/press/stickers/gen_2.png" alt="2nd generation zoomoid sticker">
          <span class="label">2<sup>nd</sup> Generation</span>
        </div>
        <div class="item">
          <img src="https://cdn.occloxium.com/i/zoomoid/press/stickers/gen_4.png" alt="4th generation zoomoid sticker">
          <span class="label">4<sup>th</sup> Generation</span>
        </div>
        <div class="item">
          <img src="https://cdn.occloxium.com/i/zoomoid/press/stickers/gen_5.png" alt="5th generation zoomoid sticker">
          <span class="label">5<sup>th</sup> Generation</span>
        </div>
        <div class="item in-production">
          <img src="https://cdn.occloxium.com/i/zoomoid/press/stickers/gen_6.png" alt="6th generation zoomoid sticker">
          <span class="label">6<sup>th</sup> Generation</span>
        </div>
        <p>The 3<sup>rd</sup> Generation stickers actually never made it to the print.</p>
        <p>If you want any remaining stickers</p>
      </div>
    </div>
  </div>

</template>

<script>
import SlideAnchor from '@/components/SlideAnchor'
import Breadcrump from '@/components/Breadcrump'

export default {
  name: 'Merchandise',
  components: {
    SlideAnchor,
    Breadcrump,
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/app.sass'

.breadcrump
  padding: 1em 2em 1em
  box-shadow: 0 2px 2px rgba(0,0,0,0.1)
  font-size: 12pt
  *
    font-size: inherit
  a
    font-weight: 500
    text-decoration: none
  .spacer
    font-family: 'Inter Var', sans-serif;
    font-weight: bold
    padding: 0 8px
.wrapper
  padding: 0 2em 1em
  +sm
    padding: 0 1em 1em

.portrait
  width: 100%
.title
  font-size: 2em

.gallery
  padding: 2em
  +sm
    padding: 2em 1em
  .item
    max-width: 450px
    margin: 0 auto
    img
      width: 100%
      display: block
    .label
      font-size: 13pt
      font-weight: 500
      display: inline-block
      padding: 4px 8px
      background: black
      color: white
  .more
    font-size: 13pt
    display: block
    font-weight: 500
    text-align: center
    padding: 1em
    color: rgba(0,0,0,0.5)

.stickers
  padding: 2em
  +sm
    padding: 2em 1em
  .item
    padding: 1em 0 1em
    max-width: 450px
    margin: 0 auto

    img
      width: 100%
      display: block
    .label
      display: block
      text-align: center
  .out-of-stock,
  .in-production
    position: relative
    &::after
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -100%) rotate(20deg)
      font-weight: 900
      color: white
      text-shadow: 0 0 5px rgba(0,0,0,0.87)
    img
      filter: grayscale(100%) contrast(50%)
  .out-of-stock::after
    content: 'Unavailable'
  .in-production::after
    content: 'In Production'
</style>
