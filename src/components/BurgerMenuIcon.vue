<script setup lang='ts'>
defineProps({
  openNav: {
    type: Boolean,
    default: false
  }
});

</script>

<template>
  <div
    class="nav-burger-menu"
    :class="{'open': openNav}"
  >
    <span />
    <span />
    <span />
    <span />
  </div>
</template>

<style scoped>

.nav-burger-menu {
    width: 30px;
    height: 5px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
    bottom: 8px;
  }
  
  .nav-burger-menu span {
    display: block;
    position: absolute;
    height: 6px;
    width: 100%;
    background: #2DA954;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
  
  .nav-burger-menu span:nth-child(1) {
    top: 0px;
  }
  
  .nav-burger-menu span:nth-child(2),.nav-burger-menu span:nth-child(3) {
    top: 8px;
  }
  
  .nav-burger-menu span:nth-child(4) {
    top: 16px;
  }
  
  .nav-burger-menu.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
  
  .nav-burger-menu.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  
  .nav-burger-menu.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  
  .nav-burger-menu.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
</style>