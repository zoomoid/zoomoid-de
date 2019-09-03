<template>
  <div>
    <div class="wrapper">
      <Breadcrump/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Breadcrump from '@/components/Breadcrump'

export default {
  name: 'WorkContainer',
  components: {
    Breadcrump
  }
}
</script>
