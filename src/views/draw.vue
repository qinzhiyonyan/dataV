<template>
  <div>
    <iframe
      :src="url"
      ref="iframe"
      style="height: 800px; width:100%; frameborder=no"
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
    ></iframe>
  </div>
</template>
<script>
export default {
  name: "draw",
  data() {
    return {
      url: "http://172.30.103.158:8081/drawio/"
    };
  }
};
</script>
