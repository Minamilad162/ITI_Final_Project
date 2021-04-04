import {Card} from './../../basic'
import React from 'react'

class Series extends React.Component{
    constructor(){
        super()
        this.state = {
            series:[]
        }
    }
    
    componentDidMount(){
            //    this.fetchall()
            //    this.setState({  series:this.state.series})  
            var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("token", "c19fafeb-77c7-422e-b012-8a6ca11c380f");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch('https://desolate-ocean-66919.herokuapp.com/http://anyservice.imassoft.com/96/videos/',
                requestOptions).then((res)=>res.json()).then(res=>{this.setState({series:res})})
          
    }
    // fetchall=()=>{
    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");
    //     myHeaders.append("token", "c19fafeb-77c7-422e-b012-8a6ca11c380f");
    //     var requestOptions = {
    //         method: 'GET',
    //         headers: myHeaders,
    //         redirect: 'follow'
    //     };
    //     fetch('https://desolate-ocean-66919.herokuapp.com/http://anyservice.imassoft.com/96/videos/',
    //             requestOptions).then((res)=>res.json()).then(res=>{this.setState({series:res})})
          
    // }
   render(){
    return (<div > 
        <div></div>
        {this.state.series.map((Item,key)=>{
         return <div ><Card imgurl ={Item.imgUrl} title = {Item.title} key={key} >
                   </Card></div>
                  })
               }
         </div>    
    )
   }

    
}
export default Series;