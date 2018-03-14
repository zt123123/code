<template>
  <x-header class="fix-header" :title="title" :left-options="{showBack: showBack}"></x-header>
</template>
<script>
import { XHeader } from "vux";
export default {
  name: "fixheader",
  components: {
    XHeader
  },
  props: ["title", "showBack"],
  data() {
    return {};
  }
};
</script>
<style scoped>
.fix-header {
  width: 100%;
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
}
</style>

