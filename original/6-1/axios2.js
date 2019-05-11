var vm = new Vue({
  el: "#app",
  data: {
    student: {}
  },
  created: function() {
    self = this;
    axios
      .get("./data/test.json")
      .then(function(res) {
        console.log(res);
        self.student = res.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
