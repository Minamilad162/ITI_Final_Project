import Item from 'antd/lib/list/Item'
import React from 'react'
import {Card,Nav,Footer} from './../../basic'

class Landing extends React.Component{
    constructor(){
        super()
        this.state = {
            Item:[]            
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
            requestOptions).then((res)=>res.json()).then(res=>{this.setState({Item:res})})
      
    }

    componentWillMount(){
        return<div style={{color:'white'}}>Loading</div>
    }


    render(){
        return(
            // <div style={{backgroundImage:`url("https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/5e82ecf0-5873-4e02-8619-2307b8ed65a1/EG-en-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg")`}}>
            <div>  
            <Nav></Nav>
            <div className="cards">
                {this.state.Item.map((Item,key)=>{

                     return <Card imgurl ={Item.imgUrl} title = {Item.title} alter={Item.alt} key={key} >
                            </Card>
                           })
                        }
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default Landing