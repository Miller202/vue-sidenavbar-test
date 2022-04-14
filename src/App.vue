<template>
  <div id="app">
    <div id="view" :class="[{ collapsed: collapsed }]">
      <router-view />
    </div>
    <SideBar/>
  </div>
</template>

<script>

import SideBar from '@/components/SideBar.vue'

export default {
  name: "App",
  components: {
    SideBar
  }
};
</script>

<style>
#view {
  padding-left: 350px;
}
#view.collapsed {
  padding-left: 50px;
}
</style>
