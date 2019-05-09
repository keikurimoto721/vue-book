var app = new Vue({
  el: "#app",
  data: {
    storageKey: "todolist",
    newtodo: "",
    todolist: []
  },
  methods: {
    addTodo: function() {
      if (this.newtodo != "") {
        this.todolist.push({
          text: this.newtodo,
          done: false,
          hover: false
        });
        this.newtodo = "";
      }
    },
    remove: function(index) {
      if (this.todolist[index].done == true) {
        this.todolist.splice(index, 1);
      }
    }
  },
  watch: {
    todolist: {
      handler: function() {
        // ウォッチャによる保存処理
        localStorage.setItem(this.storageKey, JSON.stringify(this.todolist));
      },
      deep: true
    }
  },
  created: function() {
    var dataStr = localStorage.getItem(this.storageKey);
    if (dataStr) {
      // 文字列からオブジェクトに変換
      this.todolist = JSON.parse(dataStr);
    }
  }
});
