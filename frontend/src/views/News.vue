<template>
  <section>
    <h1>News</h1>
  </section>
</template>

<script>
export default {
  name: 'News',
  data: () => ({
    entries: [
      {
        id: '2020/shades-of-yellow-release',
        title: 'Releasing in times of Quarantine and COVID-19',
      }
    ]
  }),
}
</script>

<style lang="scss" scoped>
section {
  padding-bottom: 4em;
}
h1 {
  text-align: center;
  font-weight: 300;
  font-size: 2em;
  margin: 3em 0;
}
</style>
