
import React from 'react'

class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            user:{username :'Ahmed',
            email:'ffff'
            }
        }
    }

    fetchuser = ()=>{
        
        var myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");
         var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                };

        fetch("https://reqres.in/api/users/2",requestOptions).then((res)=>res.json()).
                    then((res)=>{console.log(res.data);
                                if(res.data){this.setState({email:res.data.email,username:res.data.first_name})}})

    }
    componentDidMount(){
        this.fetchuser();

    }
    handleEdit = (e)=>{
        if( e.target.innerText=="Save"){
            e.target.innerText='Edit';
            e.target.parentNode.previousSibling.readOnly= true;
        }
        else{
        e.target.innerText='Save'
        e.target.parentNode.previousSibling.readOnly= false;
        console.log( e.target.parentNode.previousSibling.readOnly);
        }
    }
    update = ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let user={first_name:this.state.username,email:this.state.email}
        let reqObj = JSON.stringify(user)
        var requestOptions = {
                   method: 'PUT',
                   headers: myHeaders,
                   body : reqObj
               };
        fetch("https://reqres.in/api/users/2",requestOptions).then((res)=>res.json()).then(res=>console.log(res))
    }

    render(){
        return(
            <div className="profilecontainer">
                <div className="profilepicture">
                    <span className="glyphicon glyphicon-user"></span>
                </div>
                <div className="userinfo">
                    <div className="username">
                        <input type="text" readOnly value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}></input>
                        <span className="glyphicon glyphicon-pencil" ><a onClick={this.handleEdit}>Edit</a></span>
                    </div>
                    <div className="usermail">
                        <input type="email" readOnly value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}></input>
                        <span className="glyphicon glyphicon-pencil" ><a onClick={this.handleEdit} >Edit</a></span>
                    </div>
                    <button onClick={this.update}>Update</button>

                </div>


            </div>
        )
    }
}

export default Profile
// editVideo = (index) => {
//     newVidUrl = document.getElementById('newURL').value
//     console.log(newVidUrl)
//     newImgUrl = document.getElementById('imgUrl').value
//     console.log(newImgUrl)
//     newVidTitle = document.getElementById('newTitle').value
    
//     let editedObj = {
//         'url': newVidUrl,
//         'imgUrl': newImgUrl,
//         'title': newVidTitle
//     }
//     if(newVidUrl != "" && newImgUrl != "" && newVidTitle != "") {
//         fetchRequest(editedObj, index)
//         alert("Edited Successfully")
//     }
//     else {
//         alert("You have to fill all fields")
//     }
// }

// fetchRequest = async (videoObj, index) => {
//     reqObj = JSON.stringify(videoObj)
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("token", token);
//         // let token = localStorage.getItem('Token');

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: reqObj,
//         redirect: 'follow'
//     };
//     console.log(typeof(index))
//     let url = `https://reqres.in/api/users/2`
//     let httpResponse = await fetch(url, requestOptions);
//     responseJsonObj = await httpResponse.json();
//     location.reload()
// }