<template>
  <section>
    <div class="h1">News</div>
    <div class="news" v-for="(entry, index) in entries" v-bind:key="entry.id">
      <transition name="fadeCover">
        <article :style="{'transition-delay': `${Math.log(index + 1) * 0.2}s`}">
          <span class="date">{{entry.date}}</span>
          <h1 class="title">{{entry.title}}</h1>
          <p class="text" v-html="entry.text"></p>
        </article>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'News',
  data: () => ({
    entries: [
      {
        id: '2020/shades-of-yellow-release',
        date: '20/04/2020',
        title: 'Zoomoid to release "Shades Of Yellow"',
        text: `Finally, after an unusually long time, there's new music coming! During these strange times, with the illusion of endless free time, one might think that production of creative goods would flourish. However, it has recently been harder than ever before for me to have stable creative output. I've been working around some issues both musically and mentally. Expressing...`
      }
    ]
  }),
}
</script>

<style lang="scss" scoped>
@use '../scss/mixins';
@include mixins.headline;

section {
  padding-bottom: 4em;
}
.news {
  padding: 2em;
  margin: 0 auto;
  max-width: 768px;
  width: 100%;
}

article {
  .date {
    opacity: 0.5;
  }
  .title {
    margin-top: 0.5em;
    font-size: 3em;
    font-weight: 300;
  }
  .text {
    font-size: 18pt;
    letter-spacing: -0.5pt;
    line-height: 1.3;
  }
}

</style>
