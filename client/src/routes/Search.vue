<template>
    <div style="height:100vh;      background-color: rgb(26, 30, 34);
  background-image: linear-gradient(rgb(26, 30, 34) 0%, rgb(36, 41, 46) 100%);
">
      <section class="search-area">
      <div class="userSearch">
        <form v-on:submit.prevent="onSubmit">
          <i class="github-icon fab fa-github fa-4x m-3" style="color:rgb(0, 112, 243)"></i>
          <label for="username">Find Your Github Profile</label>
          <input type="text" name="username" v-model="username">
          
        </form>
        
      </div>
      
    </section>
    <footer class="footer-main">
      <div>
        <span>
          Built with 💙 By
          <a href="https://github.com/Flowko" target="_blank">@Flowko</a>
          Using
          <a href="https://www.chartjs.org/" target="_blank">Chart.js</a> ·
          <a href="https://vue-select.org/" target="_blank">vSelect</a> ·
          <a href="https://developer.github.com/v3/" target="_blank">Giuthub API</a>
          and more!
        </span>
      </div>
    </footer>
    </div>
</template>

<script>
export default {
  name:'Search',
  data(){
    return{
      username: '',
    };
  },
  created(){
    document.title = "GitProfile";
  },
  methods: {
    onSubmit() {
      if(!this.username){
        //username is empty
      }
      else{
        //username entered
        this.$router.push(`/user/${this.username}`);
      }
    }
  }
}
</script>

<style>


</style>