var app = new Vue({
  el: "#app",
  data: {
    //kuji: "./figs/omikuji.png",
    kujis: ["daikichi.png", "kichi.png", "kyou.png"],
    imageAttrs: {
      src: "./figs/omikuji.png",
      width: "300",
      height: "200",
      alt: "おみくじ"
    }
  },
  methods: {
    uranau: function() {
      this.imageAttrs.src =
        "./figs/" + this.kujis[Math.floor(Math.random() * this.kujis.length)];
    }
  }
});
