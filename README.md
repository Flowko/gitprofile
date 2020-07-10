# GitProfile

A nicer look at your GitHub Profile! With charts!

![demo](https://gitpro.herokuapp.com/static/og.png)

[Check it Here](https://gitpro.herokuapp.com/)

Built with:

- [vSelect](https://vue-select.org/)
- [Giuthub API](https://developer.github.com/v3/)
- [Chart.js](https://www.chartjs.org/)

And More...


# API Proxy Server

* [x] Create Server Folder
* [x] npm install express morgan node-fetch nodemon dotenv concurrently
* [x] GET route to proxy API request
* [x] 404 handler
* [x] Error Handler
* [x] Deploy

# Work with fake json data for testing so you can pass the github api limit requests
```
json-server --watch db.json
```


# Front end Single page using Vue.js Framework

* [x] Create a search page with input
* [x] Create Components for the profile page
    * [x] Main header component contains :
        * [x] Profile Picture
        * [x] User info (username,fullname,about,repositories,followers,following)
    * [x] Repositories Component contains CHARTS :
        * [x] Top languages 
        * [x] Most Starred 
        * [x] Stars per Language 
    * [x] Top Repos Filterable list (stars,forks,size) contains :
        * [x] Repos Info (title,desc,language,stars,forks,size)
* [x] API request to proxy server
* [x] Finish adding all the results to profile page
* [x] Finishing the Search Page
* [x] Show "User not Found" if it doesn't exist
* [x] Add a loading spinner 
* [x] Deploy



## Project setup
```
npm install
```

### Run Server and Frontend at the same time
```
npm run dev
```


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
