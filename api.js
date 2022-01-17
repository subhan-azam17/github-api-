const Github = require("github-api")
const Promise = require('es6-promise').Promise;
const axios = require("axios")
var it = new Github({
    username:"subhan-azam17",
    token: "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"
})

let me = it.getUser()
me.listNotifications((err,notification)=>{

    if(err != null){
        console.log(`ERROR ${err}`);
    }else{
        console.log(`notifications${notification}`);
    }
})
let am = it.getUser("affankhan43")
am.listStarredRepos((err,repos)=>{
    if(err != null){
        console.log(err);
    }else{
        onw = repos[0].owner
        // console.log(onw.followers_url);
        // console.log(onw);

        axios.get(onw.followers_url)
  .then(async (response)=>{
    // handle success
    ws = await response.data.forEach(element => {
     Followers = element.login
     console.log(Followers);
    });
    
  })
  .catch((error)=>{
    // handle error
    console.log(error);
  })
  .then(()=>{
    // always executed
  });





    }
})






// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

















// var lm = it.getRepository('subhan-azam17',"test");


// var hook = {
//     "name" : "subhan",
//     "config" : {
//       "user" : "subhan-azam17",
//       "token" : "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",
//       "domain" : "http://notify.travis-ci.org",
//       "content_type": "json"
//     },
//     "events" : ["push", "pull_request"],
//     "active" : true
// }

// lm.createHook(hook).then(({data:hook})=>{
//     console.log(' A travis hook has been created which will trigger a build on push and pull request events')})