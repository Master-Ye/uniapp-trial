"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      labelList: []
    };
  },
  onLoad() {
    this.initLabelList();
  },
  methods: {
    initLabelList() {
      common_vendor.Ds.callFunction({
        name: "getlist",
        success: (res) => {
          console.log(res);
          this.labelList = res.result.data;
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_NavBar2 = common_vendor.resolveComponent("NavBar");
  const _easycom_TabBar2 = common_vendor.resolveComponent("TabBar");
  const _easycom_ArticlesList2 = common_vendor.resolveComponent("ArticlesList");
  (_easycom_NavBar2 + _easycom_TabBar2 + _easycom_ArticlesList2)();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
const _easycom_TabBar = () => "../../components/TabBar/TabBar.js";
const _easycom_ArticlesList = () => "../../components/ArticlesList/ArticlesList.js";
if (!Math) {
  (_easycom_NavBar + _easycom_TabBar + _easycom_ArticlesList)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      labelList: $data.labelList
    }),
    b: common_vendor.p({
      labelList: $data.labelList
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/j1813/Documents/HBuilderProjects/Project/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
