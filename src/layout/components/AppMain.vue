<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
    <!--    <template v-if="computedEnv">-->
    <!--      <keep-alive :include="cachedViews">-->
    <!--        <router-view :key="key" />-->
    <!--      </keep-alive>-->
    <!--    </template>-->

    <!--    <template v-else>-->
    <!--      <transition name="fade-transform" mode="out-in">-->
    <!--        <keep-alive :include="cachedViews">-->
    <!--          <router-view :key="key" />-->
    <!--        </keep-alive>-->
    <!--      </transition>-->
    <!--    </template>-->
  </section>
</template>

<script>
export default {
  name    : 'AppMain',
  computed: {
    key() {
      return this.$route.path
    },
  },
}
</script>

<style lang="scss" scoped>
.app-main {
  //background-color : #F8F8F8;
  min-height : 100vh;
  width      : 100%;
  position   : relative;
  overflow   : hidden;
  box-shadow : 0 0 0 1px #CCC inset;
}
</style>
