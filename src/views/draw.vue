<template>
  <div>
    <iframe
      :src="url"
      id="selfIframe"
      style="height: 500px; width:100%; frameborder=no"
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
      url: "http://172.30.103.158:8081/drawio",
      timer: null
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.sendMessage();
    }, 500);
    window.addEventListener("message", e => {
      if (e.data.result == "done") {
        debugger;
        clearInterval(this.timer);
        this.timer = null;
      }
    });
  },
  methods: {
    sendMessage() {
      const zbId = this.$route.params.zbId;
      let param = { zbId };
      let iframe = document.querySelector("#selfIframe");
      iframe.contentWindow.postMessage(param, "*");
      console.log("---------", iframe, this);
      // iframe.onreadystatechange = function() {

      //   if (this.readyState && this.readyState == "complete") {
      //     iframe.contentWindow.postMessage(param, "*");
      //   }
      // };
      // iframe.onload = function() {
      //   iframe.contentWindow.postMessage(param, "*");
      //   console.log("---------", iframe.document);
      // };
    }
  }
};
</script>
