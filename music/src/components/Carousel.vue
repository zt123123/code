<template>
  <div class="jump">
    <img src="../assets/icon_18.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'carousel',
    data () {
      return {
        msg: '111111'
      }
    },
    methods: {
      handleClick: () => {
        alert('111111111')
      }
    }
  }
</script>


<style scoped lang="less">
  .jump {
    height: 6.98333333rem;
    img {
      width: 100%;
    }
  }
</style>
