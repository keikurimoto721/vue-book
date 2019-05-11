var vm = new Vue({
  el: "#app",
  data: {
    items: []
  },
  created: function() {
    self = this;
    axios
      .get("./data/items.json")
      .then(function(res) {
        console.log(res);
        self.items = res.data.items;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
