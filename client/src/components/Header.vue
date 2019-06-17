<template>
  <div class="wrapper">
    <header id="intro">
      <img class="body" alt="picture of zoomoid" src="../assets/zoomoid_body.png">
      <div class="text">
        <h1>About Me</h1>
        <p>
          Zoomoid is a young, aspiring artist from Aachen, Germany, who draws his
          inspiration from a variety of music to create songs he thinks are worth
          listening to even if he would personally never admit that. He makes music
          to escape the computer science he's studying whenever he can and allows
          himself to. Combining vast theoretical knowledge and a good portion of
          practical intuition, he always strives to experiment with new things and
          ways to create new music. To stop himself from settling down on a
          specific genre, he challenges himself over and over to try something
          different, explaining the vast style changes in his discography, taking
          influences from House, Techno, Drum&amp;Bass as well as Hip-Hop.
        </p>
      </div>
    </header>
    <section class="only-mobile">
      <h1>About Me</h1>
      <p>
        Zoomoid is a young, aspiring artist from Aachen, Germany, who draws his
        inspiration from a variety of music to create songs he thinks are worth
        listening to even if he would personally never admit that. He makes music
        to escape the computer science he's studying whenever he can and allows
        himself to. Combining vast theoretical knowledge and a good portion of
        practical intuition, he always strives to experiment with new things and
        ways to create new music. To stop himself from settling down on a
        specific genre, he challenges himself over and over to try something
        different, explaining the vast style changes in his discography, taking
        influences from House, Techno, Drum&amp;Bass as well as Hip-Hop.
      </p>
    </section>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/app'
.wrapper
  +typography($white, $may-5)

#intro
  position: relative
  height: 100vh
  width: 100%
  background-size: cover
  background-position: center center
  background-attachment: scroll 
  background-image: url(../assets/background_intro.svg)
  .body
    position: absolute
    bottom: 0
    margin-left: 10%
    +sm
      margin-left: 0
    +md
      margin-left: 0
    height: auto
    max-height: 80vh
    max-width: 100%
  .text
    position: absolute
    @media (max-width: 1400px)
      display: none
    z-index: 10
    left: 50%
    width: 40%
    top: 40%

.only-mobile
  background: $may-1
  padding: 0 5%
  padding: 2em
  display: none
  @media (max-width: 1400px)
      display: block
</style>
