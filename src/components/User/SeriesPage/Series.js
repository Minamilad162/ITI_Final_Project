import {Card} from './../../basic'
import React from 'react'
import Apis from './../../apis'

class Series extends React.Component{
    constructor(){
        super()
        this.state = {
            Series:[]
        }
    }
    fetchSeries= async()=>{ 
        // Apis.fetchAll
        var series = await Apis.fetchAllSeries()
        if (series){
            this.setState({Series:series})
        }
        else {
            throw "Error Occured while fetching!"
        }
    }
    
    componentDidMount(){
         this.fetchSeries()
    }
  

   render(){
    return (
    <div> 
        <div></div>
        {this.state.Series.map((Item,key)=>{
         return <div key={key} onMouseOver={(e)=>{e.target.style={zIndex:10}}} >
             <Card imgurl ={Item.imgUrl} title = {Item.title} >
                   </Card></div>
                  })
               }
    </div>    
        )
   }

    
}
export default Series;