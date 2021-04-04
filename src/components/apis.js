class Apis {
    ////////// Fetch All Series To Be Rendered In the Series Route 
    static fetchAllSeries = async()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let token = window.localStorage.getItem('token')
        myHeaders.append("token", token);

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

 ////////// Fetch All Users To Be Rendered In the Admin Get Users Route 
    static fetchAllUsers = async()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let token = window.localStorage.getItem('token')
        myHeaders.append("token", token);

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

     ////////// Fetch All Movies To Be Rendered In the Movies Route 
     static fetchAllMovies = async()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let token = window.localStorage.getItem('token')
        myHeaders.append("token", token);

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

}


export default Apis;