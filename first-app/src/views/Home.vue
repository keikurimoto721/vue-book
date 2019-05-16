<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ storedMsg }}</h1>
    <button @click="changeMsg">メッセージを変更</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  computed: {
    storedMsg: function() {
      return this.$store.state.message;
    }
  },
  methods: {
    changeMsg: function() {
      this.$store.commit("changeMsg");
    }
  }
};
</script>
