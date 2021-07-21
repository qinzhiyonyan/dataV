<template>
  <div class="home">
    <!-- 使用topology组件 -->
    <topology :configs="topologyConfigs" @event="onEvent" />
  </div>
</template>

<script>
export default {
  name: "graph",
  data: function() {
    return {
      topologyConfigs: {
        logo: {
          img: "",
          url: "",
          target: "_blank"
        },
        menus: {
          // back: {
          //   icon: "t-icon t-angle-left",
          // },
          // login: true,
          left: [
            {
              name: "文件",
              children: [
                { name: "新建文件", keyboard: "Ctrl+N", action: "open" },
                { name: "导入文件", keyboard: "Ctrl+I", action: "load" },
                {},
                { name: "保存", keyboard: "Ctrl+S", action: "save" },
                { name: "另存为", keyboard: "Ctrl+Shift+I", action: "saveAs" },
                { name: "下载JSON文件", action: "downloadJson" },
                {},
                { name: "下载为PNG", action: "downloadPng" },
                { name: "下载为SVG", action: "downloadSvg" }
              ]
            },
            {
              name: "编辑",
              children: [
                { name: "撤销", keyboard: "Ctrl+Z", action: "undo" },
                { name: "恢复  ", keyboard: "Ctrl+Shift+Z", action: "redo" },
                {},
                { name: "剪切  ", keyboard: "Ctrl+X", action: "cut" },
                { name: "复制  ", keyboard: "Ctrl+C", action: "copy" },
                { name: "粘贴  ", keyboard: "Ctrl+V", action: "paste" }
              ]
            },
            {
              name: "我的菜单3",
              router: "/page"
            }
          ]
          // middle: [],
        },
        loginUrl: "https://account.le5le.com",
        signupUrl: "https://account.le5le.com",
        userMenus: [{ name: "退出", action: "logout" }]
      }
    };
  },
  methods: {
    onEvent(e) {
      switch (e.name) {
        case "save":
          this.saveJson(e);
          break;
      }
    },
    saveJson() {
      console.log("ssss", topology.toComponent());
    }
  }
};
</script>
<style lang="scss">
.home {
  height: 100vh;
}
</style>
