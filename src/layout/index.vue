<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div :class="{hasTagsView:true}" class="main-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import {AppMain, Sidebar} from './components'

export default {
  name      : 'Layout',
  components: { AppMain, Sidebar },
  mixins    : [],
  computed  : {

    classObj() {
      return {}
    },
  },
  methods   : {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
  },
  mounted() {
    // dlog(this.$route, `this.$route`)
    // dlog(this.$router, `this.$router`)
  },
}
</script>

<style lang="scss" scoped>
@import "./variables.scss";
@import "./mixin.scss";
@import "./sidebar.scss";

.app-wrapper {
  @include clearfix;
  position : relative;
  height   : 100%;
  width    : 100%;

  &.mobile.openSidebar {
    position : fixed;
    top      : 0;
  }
}

.drawer-bg {
  background : #000;
  opacity    : 0.3;
  width      : 100%;
  top        : 0;
  height     : 100%;
  position   : absolute;
  z-index    : 999;
}

.fixed-header {
  position   : fixed;
  top        : 0;
  right      : 0;
  z-index    : 9;
  width      : calc(100% - #{$sideBarWidth});
  transition : width 0.28s;
}

.hideSidebar .fixed-header {
  width : calc(100% - 54px)
}

.mobile .fixed-header {
  width : 100%;
}
</style>
