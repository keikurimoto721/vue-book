var vm = new Vue({
  el: "#app",
  data: {
    results: null,
    keyword: "",
    params: {
      q: "", // 検索文字列
      part: "snippet",
      type: "video",
      maxResults: "10", // 最大検索数
      // キーを設定
      key: ""
    }
  },
  methods: {
    searchMovies: function() {
      this.params.q = this.keyword;
      var self = this;
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: this.params
        })
        .then(function(res) {
          self.results = res.data.items;
        })
        .catch(function(err) {
          console.log(err.errors[0].message);
        });
    }
  }
});
