<template>
  <section class="header">
    <div class="header-info">

    <div class="avatar">
        <img alt="avatar" :src="data.avatar_url">
      </div>
      <h1>{{data.name}}</h1>
      <h2>
              <a :href="data.html_url" target="_blank">@{{data.login}}</a>
            </h2>

    <div class="info">
      <span v-if="data.company" class="info_item">
        <i class="fas fa-suitcase"></i>
        {{data.company}}
      </span>
      <span v-if="data.location" class="info_item">
        <i class="fas fa-map-marker-alt"></i>
        {{data.location}}
      </span>
      <span v-if="data.created_at" class="info_item">
        <i class="far fa-calendar-alt"></i>
        Joined {{getJoinedDate(data.created_at)}}
      </span>
    </div>

    <div class="stats">
      <div class="stats_item">
        <span class="num">{{Number(data.public_repos).toLocaleString()}}</span>
        <span class="num_label">repositories</span>
      </div>
      <div class="stats_item">
        <span class="num">{{Number(data.followers).toLocaleString()}}</span>
        <span class="num_label">followers</span>

      </div>
      <div class="stats_item">
        <span class="num">{{Number(data.following).toLocaleString()}}</span>
        <span class="num_label">following</span>

      </div>
    </div>
    
  </div>
  </section>
</template>

<script>

import moment from 'moment';

export default {
    name:'HeaderProfile',
    props: {
      data: Object
    },
    data(){
      return{

      }
    },
    methods: {
      getJoinedDate(date){
        return moment(date).format('MMMM DD, YYYY');
      }
    }
}
</script>

<style>



.header h1{
  font-size: 2.5rem;
    margin-bottom: 10px;
    color: rgb(246, 248, 250);
}

.header h2{
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.header h2 a {
    color: rgb(0, 112, 243);
}

/*.avatar{
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 1.5rem;
    width: 150px;
    height: 150px;
    border-width: 0.5rem;
    border-style: solid;
    border-color: rgb(0, 112, 243);
    border-image: initial;
    border-radius: 100%;
    border-radius: 100%;
    animation: myanimation 10s infinite;

}*/

@keyframes myanimation {
  0% {border-color: #eb3434;}
  15% {border-color: #eba834;}
  25%{border-color:#e5eb34;}
  35%{border-color:#abeb34;}
  45%{border-color:#43eb34;}
  50%{border-color:#34eb9c;}
  65%{border-color:#34ebdc;}
  75%{border-color:#3474eb;}
  85%{border-color:#6234eb;}
  95%{border-color:#eb34ba;}
  100% {border-color: #eb3462;}
}


.info {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(200, 225, 255);
}

.info .info_item {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
    margin: 0px 1rem 0.5rem;
}

.info .info_item i {
  margin-right: 10px;
}


.stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 150px));
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 2rem;
    gap: 0.5rem;
}

.stats .stats_item {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(36, 41, 46);
    text-align: center;
    padding: 1rem;
    border-radius: 0.25rem;
}

.stats .stats_item .num {
    color: rgb(246, 248, 250);
    font-size: 1.5rem;
}

.stats .stats_item .num_label {
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 1px;
    margin-top: 0.75rem;
    color: rgba(200, 225, 255, 0.7);
}


@media (max-width: 37.5em){
  .info {
    display: block;
  }
}

@media (max-width: 25em){
  .stats .stats_item {
    padding: 1rem 0.5rem;
  }
  .stats .stats_item .num_label {
    font-size: 0.5rem;
  }

  .stats .stats_item .num {
    font-size: 1rem;
  }

  .header h1 {
    font-size: 2rem;
  }
  
  .header {
    padding: 1rem;
  }
}

.header .header-info{
  display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    text-align: center;
    max-width: 1400px;
    margin: 0px auto;
}

.header .header-info .avatar {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 1.5rem;
    width: 150px;
    height: 150px;
    border-width: 0.5rem;
    border-style: solid;
    border-color: rgb(0, 112, 243);
    border-image: initial;
    border-radius: 100%;
    animation: myanimation 10s infinite;
}

.header > div {
  max-width: 1400px;
    margin: 0px auto;
}

.header .header-info .avatar img {
    border-radius: 100%;
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
}

@media (max-width: 56.25em)
{
  .header {
    padding-top: 2rem;
    padding-bottom: 10rem;
  }
}

@media (max-width: 37.5em){
  .header .header-info{
    padding-top: 4rem;
  }
}
</style>