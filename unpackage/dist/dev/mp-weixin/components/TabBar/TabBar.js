"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "TabBar",
  props: {
    labelList: Array
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
    a: common_vendor.f($props.labelList, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    b: common_vendor.p({
      type: "gear",
      size: "26",
      color: "666"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/j1813/Documents/HBuilderProjects/Project/components/TabBar/TabBar.vue"]]);
wx.createComponent(Component);
