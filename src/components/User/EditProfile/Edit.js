
import React from 'react'
import Apis from '../../apis';
import './edit.css'
class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            user:{}
            
            
        }
    }

        //////////// Fetch User data to ////////////
        fetchuser = ()=>{
        
            var myHeaders = new Headers();
             myHeaders.append("Content-Type", "application/json");
             var requestOptions = {
                        method: 'GET',
                        headers: myHeaders,
                    };
            fetch("https://reqres.in/api/users/2",requestOptions).then((res)=>res.json()).
                        then((res)=>{console.log(res.data);
                                    if(res.data){this.setState({user:{email:res.data.email,username:res.data.first_name}})}})
        }
  componentDidMount(){
       this.fetchuser()
    }

    toggleClick = (e)=>{
          // change input state ////
        e.target.parentNode.previousSibling.readOnly = e.target.innerText === 'Save' ? true : false ;
        //// cahange button text //// 
        e.target.innerText = e.target.innerText === "Save" ? 'Edit' : 'Save' ;
    }
    
    updateInput = (e) =>{
       let email= e.target.name==="email"?e.target.value:this.state.user.email
       let username = e.target.name==="username"?e.target.value:this.state.user.username
       this.setState({user:{username,email}})
    }


    render(){
        return(
            <div className="row">
                <div className="col-md-3 col-lg-4 col-sm-1"></div>
            <div className="profilecontainer col-md-6 col-lg-6 col-sm-8">
                <div className="profilepicture">
                    <span className="glyphicon glyphicon-user"></span>
                </div>
                <div className="userinfo">
                    <div className="username">
                        <input type="text" readOnly value={this.state.user.username} onChange={this.updateInput} name="username"></input>
                        <span className="glyphicon glyphicon-pencil"><a onClick={this.toggleClick}>Edit</a></span>
                    </div>
                    <div className="usermail">
                        <input type="email" readOnly value={this.state.user.email} onChange={this.updateInput} name="email"></input>
                        <span className="glyphicon glyphicon-pencil" ><a onClick={this.toggleClick} >Edit</a></span>
                    </div>
                    <button onClick={()=>{Apis.update(this.state.user);}}>Update</button>
                </div>
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