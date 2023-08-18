"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "NavBar",
  created() {
    this.getSystemInfo();
  },
  data() {
    return {
      statusHeight: 20,
      marginRight: 0
    };
  },
  methods: {
    goSearch() {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    },
    getSystemInfo() {
      const systemInfo = common_vendor.index.getSystemInfoSync();
      systemInfo.statusBarHeight && (this.statusHeight = systemInfo.statusBarHeight * 2);
      console.log(systemInfo);
      const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      console.log(menuButtonInfo.top, menuButtonInfo.width);
      this.statusHeight = menuButtonInfo.top * 2 + menuButtonInfo.width / 5;
      this.marginRight = menuButtonInfo.width * 2 + menuButtonInfo.width / 2;
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.statusHeight + "rpx",
    b: common_vendor.p({
      type: "search",
      color: "#999"
    }),
    c: common_vendor.o(($event) => $options.goSearch()),
    d: $data.marginRight + "rpx",
    e: $data.statusHeight + 85 + "rpx"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/j1813/Documents/HBuilderProjects/Project/components/NavBar/NavBar.vue"]]);
wx.createComponent(Component);
