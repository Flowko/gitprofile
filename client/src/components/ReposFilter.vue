<template>
  <section v-if="ReposData.length != 0" class="toprepos_section">
    <div class="toprepos">
      <header>
        <h2>Top Repos</h2>
        <div class="dropdown-wrapper">
          <span class="label">By</span>
          <v-select v-model="filterDefault" :value="filter" :clearable=false :searchable=false :autoscroll=false :options="['stars', 'forks', 'size']" @input="filterData"></v-select>
        </div>
      </header>
      <div class="repo-list">
        <ul style="position: relative;">
          <li v-for="starred in ReposData" v-bind:key="starred.id">
            <a
              :href="starred.html_url"
              target="_blank"
              rel="noopener noreferrer"
              class="repo"
            >
              <div class="repo_top">
                <div class="repo_name">
                  <svg aria-hidden="true" class="octicon" height="16" role="img" viewBox="0 0 12 16" width="12" style="display: inline-block; fill: currentcolor; user-select: none; vertical-align: text-bottom;"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
                  <h3>{{starred.name}}</h3>
                </div>
                <p>{{starred.description}}</p>
              </div>
              <div class="repo_stats">
                <div class="repo_stats--left">
                  <span>
                    <div class="language" :style='"background-color: "+starred.color+";"'></div>{{starred.language}}
                  </span>
                  <span><i class="fas fa-star"></i>{{starred.stargazers_count}}</span>
                  <span><i class="fas fa-code-branch"></i>{{starred.forks}}</span>
                </div>
                <div class="repo_stats--right">
                  <span>{{Number(starred.size).toLocaleString()}} KB</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import langColors from "./charts/chartColors.js";
import vSelect from "vue-select";

export default {

  name:'ReposFilter',
  components:{
    vSelect
  },
  props: {
    data: Array
  },
  data(){
    return {
      ReposData:null,
      ReposDataDefault:null,
      colors: langColors,
      filterDefault: 'stars',
      filter: ''
    }
  },
  mounted(){
    
  },
  methods: {
    filterData(value){
      this.ReposData = null;
      this.sortFunction(value)
    },
    
    sortFunction(sortSelect){
            if(sortSelect == 'stars'){
                //const reposByStars = this.getFirstStarredProjects(this.data);
                //for (var starredstars in reposByStars) {

                //  if (starredstars != "null") {
                //    var colorHex3 = this.colors[reposByStars[starredstars].language];

                //    reposByStars[starredstars].color = colorHex3;
                //  }
                //}
                this.ReposData = this.ReposDataDefault;
            }
            else if (sortSelect == 'forks'){
                const reposByStars = this.getFirstForkefProjects(this.data);
                for (var starredforks in reposByStars) {

                  if (starredforks != "null") {
                    var colorHex4 = this.colors[reposByStars[starredforks].language];

                    reposByStars[starredforks].color = colorHex4;

                  }
                }
                this.ReposData = reposByStars;
            }
            else if(sortSelect == 'size'){
                const reposByStars = this.getFirstSizedProjects(this.data);
                for (var starredsize in reposByStars) {

                  if (starredsize != "null") {
                    var colorHex5 = this.colors[reposByStars[starredsize].language];

                    reposByStars[starredsize].color = colorHex5;

                  }
                }
                this.ReposData = reposByStars;
            }
        },
        hexToRgbA(hex) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
          c = hex.substring(1).split("");
          if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
          }
          c = "0x" + c.join("");
          return (
            "rgba(" +
            [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
            ",0.7)"
          );
        }
      throw new Error("Bad Hex");
    },
    getFirstStarredProjects(array){
            var topValues = array.sort((a,b) => b.stargazers_count-a.stargazers_count).slice(0,8);
            return topValues;
        },
        getFirstForkefProjects(array){
            var topValues = array.sort((a,b) => b.forks_count-a.forks_count).slice(0,8);
            return topValues;
        },
        getFirstSizedProjects(array){
            var topValues = array.sort((a,b) => b.size-a.size).slice(0,8);
            return topValues;
        },
  },
  created(){
    if(this.data){
      const reposByStars = this.getFirstStarredProjects(this.data);

      for (var starred in reposByStars) {

        if (starred != "null") {
          var colorHex2 = this.colors[reposByStars[starred].language];
          //var colorRgba2 = this.hexToRgbA(colorHex2);

          reposByStars[starred].color = colorHex2;

        }
      }

      this.ReposData = reposByStars;
      this.ReposDataDefault = reposByStars;
      

    }
  }

};
</script>

<style>

</style>