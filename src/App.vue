<template>
  <div class="container">
    <div class="content">
      <AppInfo />
      <SearchPanel />
    </div>
  </div>
</template>

<script>
import AppInfo from './Components/AppInfo.vue'
import SearchPanel from './Components/SearchPanel.vue'
export default {
  components: {
    AppInfo,
    SearchPanel
  }
}
</script>
<style></style>