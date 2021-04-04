
import React from  'react'


class Delete extends React.Component{
    constructor(){
        super()
        this.state = {
            Items : []
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
            requestOptions).then((res)=>res.json()).then(res=>{this.setState({Items:res})})
      
}
    delete =(e)=>{
        let id = Number(e.target.previousSibling.previousSibling.innerHTML);
        var myHeaders=new  Headers()
        myHeaders.append("Content-Type","application/json");
        myHeaders.append("token", "c19fafeb-77c7-422e-b012-8a6ca11c380f")

        var requestOptions={
            method:'DELETE',
            headers:myHeaders,
            redirect:'follow'
        }
        fetch(`https://desolate-ocean-66919.herokuapp.com/http://anyservice.imassoft.com/96/videos/${id}`,requestOptions)
        .then((response)=>response.json() ).then(response=>console.log(response))
        alert("Deleted Successfully")
        window.location.reload()
    }
    render(){
        return(
            <div>
                    {this.state.Items.map((Item,key)=>{
                            return(
                            <div class="panel panel-danger">
                                <span className="glyphicon glyphicon-film" ></span>
                                <div class="panel-heading">{Item.title}</div>
                                <div class="panel-body">
                                 <span>{Item.id}</span>  Description <button onClick={this.delete}>Delete</button>
                                 </div>
                                 
                         </div>)
                    })}
                
            </div>
        )
        
        
    }
}

export default Delete;