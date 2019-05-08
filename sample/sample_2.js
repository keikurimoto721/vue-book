var app = new Vue({
  el: "#app",
  data: {
    name: "田中一郎",
    dateOfBirth: new Date("2000/9/10"),
    sYear: 2000
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
  }
});
