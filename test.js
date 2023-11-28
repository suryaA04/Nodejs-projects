const axios = require('axios');
//Make the request to the api

axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
      console.log(response.data);
})
.catch(function(error){
      console.log(error);  
})
.finally(function(){
      console.log("This will always run")
});