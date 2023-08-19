"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "ArticleList",
  props: {
    labelList: Array
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.labelList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/j1813/Documents/HBuilderProjects/Project/components/ArticlesList/ArticlesList.vue"]]);
wx.createComponent(Component);
