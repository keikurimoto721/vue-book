var app = new Vue({
  el: "#app",
  data: {
    name: "田中一郎",
    dateOfBirth: new Date("2000/9/10"),
    sYear: 2000,
    showName: true,
    week: ["月", "火", "水", "木", "金", "土", "日"],
    weekObj: [
      {
        youbi: "月",
        yomi: "げつ"
      },
      {
        youbi: "火",
        yomi: "か"
      },
      {
        youbi: "水",
        yomi: "すい"
      },
      {
        youbi: "木",
        yomi: "もく"
      },
      {
        youbi: "金",
        yomi: "かね"
      },
      {
        youbi: "土",
        yomi: "ど"
      },
      {
        youbi: "日",
        yomi: "にち"
      }
    ],
    clist: [
      { en: "ENGLAND", ja: "イギリス" },
      { en: "USA", ja: "アメリカ" },
      { en: "CHINA", ja: "中国" },
      { en: "SPAIN", ja: "スペイン" }
    ],
    countries: []
  },
  computed: {
    age: function() {
      var today = new Date();
      var birthdayOfThisYear = new Date(
        today.getFullYear(),
        this.dateOfBirth.getMonth(),
        this.dateOfBirth.getDate()
      );
      var age = today.getFullYear() - this.dateOfBirth.getFullYear();
      if (today < birthdayOfThisYear) {
        --age;
      }
      return age;
    },
    fare: {
      get: function() {
        if (this.age >= 13) {
          return 1000;
        } else {
          return 500;
        }
      }
    },
    hYear: {
      get: function() {
        return this.sYear - 1988;
      },
      set: function(newV) {
        this.name = "田中" + newV + "世";
        this.sYear = newV + 1988;
      }
    }
  },
  methods: {
    einfo: function(msg, e) {
      console.log("msg: " + msg);
      console.log(e);
    }
  }
});
