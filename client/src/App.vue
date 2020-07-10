<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
body {
  -webkit-font-smoothing: antialiased;
    font-family: Inter, system, -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Arial, sans-serif;
    color: rgb(36, 41, 46);
    background-color: rgb(246, 248, 250) !important;
    margin: 0px;
    padding: 0px;
}
.header {
  /*background-color: rgb(26, 30, 34);*/
  background: linear-gradient(to bottom ,rgba(26, 30, 34,0.88),rgba(26, 30, 34,0.88)), url("./assets/background.png");
    color: rgb(200, 225, 255);
    padding: 3rem 5rem 10rem;
}
ul, ol {
    padding: 0px;
    margin: 0px;
    list-style: none;
}



li {
    display: list-item;
    text-align: -webkit-match-parent;
}




a {
    color: rgb(0, 112, 243);
    display: inline-block;
    text-decoration: none;
    transition: all 0.2s ease-in-out 0s;
}

body {
  -webkit-font-smoothing: antialiased;
  font-family: Inter, system, -apple-system, BlinkMacSystemFont, Roboto,
    "Segoe UI", Arial, sans-serif;
  color: rgb(36, 41, 46);
    background-color: rgb(246, 248, 250);
  margin: 0px;
  padding: 0px;
}

.loading {
  width: 100%;
    height: 100vh;
    text-align: center;
    background-color: rgb(26, 30, 34);
    background-image: linear-gradient(rgb(26, 30, 34) 0%, rgb(36, 41, 46) 100%);
    position: absolute;
    /* top: 0; */
    /* bottom: 0; */
    /* left: 0; */
    /* right: 0; */
    /* margin: auto; */
    z-index: 10000;
}

.loading div {
  display: inline-block;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    /* height: 100vh; */
    top: 50vh;
}

.loading .spinner[data-v-fa81853e]:after{
  background: #1b79e1!important;
}

.error-area {
  display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(26, 30, 34);
    background-image: linear-gradient(rgb(26, 30, 34) 0%, rgb(36, 41, 46) 100%);
    color: rgb(246, 248, 250);
    height: 100vh;
    font-size: 1.5rem;
}

.error-area i {
  margin-bottom: 3rem;
}

.error-area h1 {
  margin-bottom: 1rem;
  font-family: Inter;
}

.error-area p {
  font-size: 1rem;
  padding: 1em 0;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}

.github-corner svg {
  animation: corner_github 10s infinite;
}

@keyframes corner_github {
  0% {fill: #eb3434;}
  15% {fill: #eba834;}
  25%{fill:#e5eb34;}
  35%{fill:#abeb34;}
  45%{fill:#43eb34;}
  50%{fill:#34eb9c;}
  65%{fill:#34ebdc;}
  75%{fill:#3474eb;}
  85%{fill:#6234eb;}
  95%{fill:#eb34ba;}
  100% {fill: #eb3462;}
}

.footer {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(106, 115, 125);
  text-align: center;
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  padding: 2rem 5rem;
}

.footer a {
  color: rgb(0, 112, 243);
  display: inline-block;
  text-decoration: none;
  transition: all 0.2s ease-in-out 0s;
}

@media (max-width: 56.25em) {
  .footer {
    padding: 2rem;
  }
}

@media (max-width: 25em) {
  .footer {
    padding: 1rem;
  }
}


.search-area {
  display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(246, 248, 250);
    font-family: Inter;
}

.userSearch {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 40px;
}

.search-area .userSearch .github-icon{
  animation: github_icon 10s infinite;
}

@keyframes github_icon {
  0% {color: #eb3434;}
  15% {color: #eba834;}
  25%{color:#e5eb34;}
  35%{color:#abeb34;}
  45%{color:#43eb34;}
  50%{color:#34eb9c;}
  65%{color:#34ebdc;}
  75%{color:#3474eb;}
  85%{color:#6234eb;}
  95%{color:#eb34ba;}
  100% {color: #eb3462;}
}

.userSearch form{
  background-color: transparent;
    margin-bottom: 20vh;
    max-width: 600px;
    text-align: center;
    border-radius: 5px;
    padding: 2rem;
}

.search-area .userSearch form label {
    display: block;
    font-size: 2.5rem;
    font-weight: 500;
    margin: 2rem;
}

.search-area .userSearch form input {
    background-color: rgb(38, 48, 60);
    width: 100%;
    max-width: 500px;
    color: rgb(121, 184, 255);
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    outline: 0px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 0.25rem;
    margin: 0px auto;
    padding: 1rem;
}

.footer-main {
  display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: rgb(106, 115, 125);
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    font-size: 14px;
    padding: 2rem 0rem;
    bottom: 0;
}

.footer-main a {
  color: rgb(0, 112, 243);
  display: inline-block;
  text-decoration: none;
  transition: all 0.2s ease-in-out 0s;
}

@media (max-width: 56.25em) {
  .footer-main {
    padding: 2rem;
  }
}

@media (max-width: 25em) {
  .footer-main {
    padding: 1rem;
  }
}

@media (max-width: 25em) {
  .search-area .userSearch form label{
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    margin: 2rem 0px;
  }
  .search-area .userSearch form input{
    font-size: 1.6rem;
    font-weight: 500;
  }
}

.v-select{
    min-width: 100px;
}

.v-select #vs1__listbox {
  min-width: 100px;
  width: 100px;
}

.v-select .vs__search::placeholder,
  .v-select .vs__dropdown-toggle,
  .v-select .vs__dropdown-menu {
    color: rgb(0, 112, 243);
    background: #E5F1FF;
    border-color: #E5F1FF;
  }

  /*.v-select .vs__clear,
  .v-select .vs__open-indicator {
    fill: rgba(0, 118, 255, 0.1);
  }*/

  .v-select .vs__selected {
    color: rgb(0, 112, 243);
  }

.v-select .vs__open-indicator {
    fill: rgb(0, 112, 243);
  }

  .v-select {
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    text-align: left;
    color: rgb(0, 112, 243);
    background-color: transparent;
  }

.toprepos_section {
  padding: 3rem 5rem;
}

.toprepos_section > div {
  max-width: 1400px;
  margin: 0px auto;
}

.toprepos header {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 2rem;
}

.toprepos header h2 {
  display: inline-block;
  font-size: 1.75rem;
  background-image: linear-gradient(
    90deg,
    rgb(209, 213, 218) 50%,
    rgba(255, 255, 255, 0) 0px
  );
  background-size: 10px 2px;
  padding-bottom: 6px;
  margin: 0px;
  background-position: center bottom;
  background-repeat: repeat-x;
}

.toprepos .dropdown-wrapper {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1rem;
  color: rgb(106, 115, 125);
}

.toprepos .dropdown-wrapper .label {
  margin: 0px 1rem;
}


.repo-list ul li .repo {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  color: rgb(88, 96, 105);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
  padding: 2rem;
  border-radius: 0.25rem;
  transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.repo-list ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.repo-list a:hover{
  text-decoration: none;
}

.repo-list ul li .repo_name svg {
    margin-right: 0.5rem;
    min-width: 16px;
}



.repo-list ul li .repo:hover, .repo-list ul li .repo:focus {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 20px -15px;
}

.repo-list ul li .repo_name {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}


.repo-list ul li .repo_stats--left span i {
    margin-right: 0.25rem;
}

.repo-list ul li .repo h3 {
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(36, 41, 46);
  margin-bottom: 0.75rem;
  font-size: 20px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  font-weight: 700;
  letter-spacing: -0.5px;
  overflow: hidden;
}
.repo-list ul li .repo_name h3 {
  margin: 0px;
}
.repo-list ul li .repo p {
  font-size: 14px;
  margin-bottom: 2rem;
  margin-top:1em;
  font-family: Inter;
}

.repo-list ul li .repo_stats {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 13px;
  color: rgb(106, 115, 125);
}

.repo-list ul li .repo_stats--left {
  -webkit-box-flex: 1;
  flex-grow: 1;
  display: flex;
}

.repo-list ul li .repo_stats--left span {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 0.75rem;
}

.repo-list ul li .repo_stats--left span .language {
  width: 10px;
  height: 10px;
  background-color: blue;
  margin-right: 0.25rem;
  border-radius: 100%;
}

.repo-list ul li .repo_stats {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 13px;
  color: rgb(106, 115, 125);
}

@media (max-width: 56.25em) {
  .toprepos_section {
    padding: 2rem;
  }
}

@media (max-width: 25em) {
  .toprepos_section {
    padding: 1rem;
  }
}

@media (max-width: 37.5em) {
  .toprepos_section header h2 {
    font-size: 1.5rem;
  }
}

</style>
