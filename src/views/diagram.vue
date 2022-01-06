<template>
  <div id="chart-wrap">
    <div id="chart-diagram"></div>
  </div>
</template>
<script>
import go from "gojs";
const MAKE = go.GraphObject.make; // 声明全局的常量MAKE，用来“创造”所需图像配置
export default {
  data() {
    return {
      myDiagram: null,
    };
  },
  mounted() {
    this.initDiagram();
  },
  destroyed() {},
  methods: {
    initDiagram() {
      let mySelf = this; // 声明个Vue的指向
      mySelf.myDiagram = MAKE(go.Diagram, "chart-diagram", {
        // 创建画板并挂在Vue上（注意dom的id名称要对应）
        initialContentAlignment: go.Spot.Center, // 居中显示
        isReadOnly: true, // 只读，无法编辑操作
        allowMove: true, // 允许拖动画板
        allowDragOut: false, // 允许拖拽节点
        allowDelete: false, // 允许删除节点
        allowCopy: false, // 允许复制节点
        allowClipboard: false, // 允许粘贴节点
        scale: 1.0, // 初始视图大小比例
        minScale: 0.5, // 最小视图的缩小比例
        maxScale: 1.5, // 最大视图的放大比例
        scrollMargin: 100, // 默认下拖拽画布的时候边界是已最外的节点为边距，这个就是增加边距的，类似padding设置
        "undoManager.isEnabled": false, // 支持 Ctrl-Z 和 Ctrl-Y 操作 （撤回和复原）
        "toolManager.hoverDelay": 100, // tooltip提示显示延时
        "toolManager.toolTipDuration": 10000, // tooltip持续显示时间
        "grid.visible": false, // 显示网格
        "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom, // 有鼠标滚轮事件放大和缩小，而不是向上和向下滚动
      });
      mySelf.myDiagram.nodeTemplate = MAKE(
        go.Node,
        new go.Binding("location", "loc", go.Point.parse),
        MAKE(go.Shape, "RoundedRectangle", {
          fill: "#44CCFF",
          stroke: "green",
          strokeWidth: 2,
          angle: 15,
        }),
        "Auto",
        MAKE(
          go.Panel,
          "Horizontal",
          { padding: 5 },
          MAKE(
            go.Panel,
            "Vertical",
            MAKE(
              go.Picture,
              { margin: 10, width: 50, height: 50, background: "red" },
              new go.Binding("source", "img")
            )
          ),
          MAKE(
            go.Panel,
            "Vertical",
            MAKE(
              go.TextBlock,
              "Default Text",
              { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
              new go.Binding("text", "name1")
            ),
            MAKE(
              go.TextBlock,
              { stroke: "red" },
              { margin: 5 },
              new go.Binding("text", "name2")
            ),
            MAKE(
              go.TextBlock,
              { background: "lightblue" },
              { margin: 5 },
              new go.Binding("text", "name3")
            )
          )
        ),
        {
          mouseEnter: function(e, node, prev) {
            console.log("mouseEnter");
          },
          mouseLeave: function(e, node, prev) {
            mySelf.detailShow = false;
          },
        },
        {
          toolTip: MAKE(
            go.Adornment,
            "Spot",
            //{background:"transparent" },
            MAKE(go.Shape, "RoundedRectangle", {
              // fill: "blue" ,
              height: 30,
              fill: MAKE(go.Brush, "Linear", {
                0.0: "blue",
                1.0: "red",
                start: go.Spot.Bottom,
                end: go.Spot.Top,
              }),
            }),
            MAKE(
              go.TextBlock,
              //{alignment:go.Spot.Top,alignmentFocus:go.Spot.Bottom,stroke:"red" },
              { margin: 4, stroke: "white" },
              new go.Binding("text", "name1")
            )
          ), // end of Adornment
        }
      );
      mySelf.myDiagram.linkTemplate = MAKE(
        go.Link,
        //{ curve: go.Link.Bezier },  // 贝塞尔曲线
        { routing: go.Link.Orthogonal, corner: 5 },
        MAKE(go.Shape, { strokeWidth: 2, stroke: "#e4393c" }),
        MAKE(go.Shape, { toArrow: "Standard", fill: "#000", stroke: null }), //箭头
        MAKE(
          go.TextBlock,
          {
            //margin: 20,
            stroke: "blue",
            //font: "14px sans-serif",
            //width:50,
            //wrap: go.TextBlock.WrapDesiredSize
          },
          new go.Binding("text", "linktext")
        ),
        {
          toolTip: MAKE(
            go.Adornment,
            "Auto",
            MAKE(go.Shape, { fill: "#FFFFCC" }),
            MAKE(go.TextBlock, { margin: 4 }, new go.Binding("text", "name1"))
          ), // end of Adornment
        }
      ); // the link shape
      // let myModel = MAKE(go.Model);//如果不需要连线可以用这样的方法创建model
      // let myModel = MAKE(go.GraphLinksModel);//也可以创建link model;需要配置myModel.linkDataArray 如下
      let myModel = MAKE(go.TreeModel);
      myModel.nodeDataArray = [
        // note that each node data object holds whatever properties it needs;
        // for this app we add the "name" and "source" properties
        {
          key: "1",
          name1: "董事长",
          name2: "秘书1",
          name3: "秘书2",
        },
        {
          key: "2",
          parent: "1",
          name1: "秘书",
          name2: "秘书1",
          name3: "秘书2",
        },
        {
          key: "3",
          parent: "1",
          name1: "CEO",
          name2: "秘书1",
          name3: "秘书2",
        },
        {
          key: "4",
          parent: "3",
          name1: "总经理",
          name2: "秘书1",
          name3: "秘书2",
        },
        {
          key: "5",
          parent: "4",
          name1: "二狗子",
          name2: "秘书1",
          name3: "秘书2",
        },
      ];
      // myModel.linkDataArray = [
      //   {from:"1",to:"2"},
      //   {from:"1",to:"3"},
      //   {from:"1",to:"4"},
      //   {from:"1",to:"5"},
      // ];
      // function diagramInfo(myModel) {
      //   return "myModel:\n" + myModel.nodeDataArray.length + " nodes, " +myModel.linkDataArray.length + " links";
      // }
      // mySelf.myDiagram.toolTip = MAKE(go.Adornment, "Auto",
      //   MAKE(go.Shape, { fill: "#CCFFCC" }),
      //   MAKE(go.TextBlock, { margin: 4 },
      //     // use a converter to display information about the diagram model
      //     new go.Binding("text", "", diagramInfo))
      // );
      mySelf.myDiagram.model = myModel;
    },
  },
};
</script>
<style lang="scss" scoped>
#chart-wrap {
  display: flex;
}
#chart-diagram {
  margin-top: 50px;
  width: 100%;
  height: 600px;
}
</style>
