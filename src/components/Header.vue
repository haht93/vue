<template>
  <div class="header__wrapper">
    <div class="header__left-side">
      <slot name="title"></slot>
    </div>
    <div class="header__center">
      <slot></slot>
    </div>
    <div class="header__right-side">
      <span>Header::RightSide</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-header',
}
</script>

<style>

</style>
