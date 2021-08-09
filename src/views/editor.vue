<template>
  <div class="editor">
    <div ref="container" class="container"></div>
  </div>
</template>
<script>
import E from "wangeditor";
export default {
  data() {
    return {
      editor: null
    };
  },
  mounted() {
    this.initEditor();
  },
  destroyed() {
    this.destroyEditor();
  },
  methods: {
    initEditor() {
      this.editor = new E(this.$refs.container);
      this.editor.config.showLinkImg = true;
      this.editor.config.customUploadImg = async (files, insertImgFn) => {};
      this.editor.config.zIndex = 5;
      this.editor.create();
    },
    destroyEditor() {
      this.editor.destroy();
      this.editor = null;
    }
  }
};
</script>
<style lang="scss" scoped>
.editor {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  margin-top: 50px;
  width: 800px;
}
</style>
