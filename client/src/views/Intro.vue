<template>
  <div class="intro">
    <Header/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'intro',
  components: {
    Header
  }
}
</script>

<style lang="sass" scoped>
#intro
  min-height: 100%
</style>
