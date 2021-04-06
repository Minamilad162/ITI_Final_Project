class Apis {
    ////////// Fetch All Series To Be Rendered In the Series Route 
    static fetchAllSeries = async()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let token = window.localStorage.getItem('token')
        myHeaders.append("token", "afcc0e85-b2ee-424a-a8d3-fdcf4cc110ca");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        let response = await fetch('https://desolate-ocean-66919.herokuapp.com/http://anyservice.imassoft.com/96/videos/',
                requestOptions)
        let responseJson = await response.json()
        if(Array.isArray(responseJson)){
            return responseJson
        }
      else{
          return false;
      }
    }
    //////////////////////////////////////////// Update user Data Used in Edit User Profile//////////////////////
    static update = (user)=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // let user={first_name:this.state.username,email:this.state.email}
        let reqObj = JSON.stringify(user)
        var requestOptions = {
                   method: 'PUT',
                   headers: myHeaders,
                   body : reqObj
               };
        fetch("https://reqres.in/api/users/2",requestOptions).then((res)=>res.json()).then(res=>console.log(res))
    }

 ////////// Fetch All Users To Be Rendered In the Admin Get Users Route 
    static fetchAllUsers = async()=>{
    //// Your code goes here
    }

     ////////// Fetch All Movies To Be Rendered In the Movies Route 
     static fetchAllMovies = async()=>{
         //// Your code goes here
     }



    }


export default Apis;