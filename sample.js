var app = new Vue({
  el: "#app",
  data: {
    msg: "初めてのVue.js",
    msg2: "Vue.js",
    font: "normal",
    inStr: "入力してくれたまえ"
  },
  methods: {
    changeMsg: () => {
      (app.msg = "変更後のHello"), (app.msg2 = "変更後のmsg2");
    },
    kaibun: function() {
      if (this.inStr.length == 0) return;
      var rStr = this.inStr
        .split("")
        .reverse()
        .join("");
      if (this.inStr == rStr) {
        this.font = "bold";
        return "回文ですな";
      } else {
        this.font = "normal";
        return "回文ではない";
      }
    }
  }
});
