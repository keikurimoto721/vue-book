Vue.component("my-comp-1", {
  template: "<h1>こんにちは</h1>"
});

var counter = {
  props: ["couterName", "number"],
  template: `
    <div><h1>カウンタ{{ couterName }}{{number}}</h1>
    <button @click="cdown">カウントダウン</button>
    <p>{{ count }}</p>
    </div>`,
  data: function() {
    return {
      count: 9
    };
  },
  methods: {
    cdown: function() {
      --this.count;
    }
  }
};

var app = new Vue({
  el: "#app",
  components: {
    "local-comp": {
      template: "<h1><slot>ここは何でもいい</slot>のコンポーネント</h1>"
    },
    counter: counter
  }
});
