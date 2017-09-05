<template>
  <div class="footer">
    <p>
      <small>zhangtian版权所有&copy2013-2017,盗版必究</small>
      <img src="../assets/logo.png" alt="" height="30" style="vertical-align: middle;">
    </p>
  </div>
</template>

<script>
  export default {
    name: 'navfooter',
    data () {
      return {
        msg: '111111'
      }
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>
  .block, .footer {
    background-color: #324157;
  }

  .footer {
    color: #fff;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
</style>
