<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ storedMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "about",
  computed: {
    storedMsg: function() {
      return this.$store.state.message;
    }
  }
};
</script>
