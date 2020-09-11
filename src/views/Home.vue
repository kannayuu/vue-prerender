<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      title: "Home Page"
    };
  },
  metaInfo() {
    return {
      title: this.title,
      titleTemplate: "Vue Template | %s",
      meta: [
        {
          property: "og:title",
          content: "Vue Template | " + this.title
        }
      ]
    };
  },
  components: {
    HelloWorld
  }
};
</script>
