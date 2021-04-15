// import React from 'react';
// import VideoPlayer from 'react-video-js-player';
// // import video from './video/video.mp4'
// // const VideoPlayer =() =>{
// //     const videosrc = video;
// //     const poster ="";
// //     return(
// //         <div className="App">
// //         <VideoPlayer src={videosrc} poster={poster} width="720" hight="420"
// //         playbackRates={[0.5,1,3.85,16]}
// //         />

// //         </div>
// //     )
// // }

// export default VideoPlayer;
// import React, { Component } from 'react';
// import VideoPlayer from 'react-video-js-player';
 
// class VideoApp extends Component {
//     constructor(props){
//         super(props);
//         // this.state= {movies:[], key:0}
//     }
//     // when all comps render
//     componentDidMount(){
//         this.refreshList()
//     }

    
 
//     player = {}
//     state = {
//         video: {
//             src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
//             poster: ""
//         }
//     }
 
//     onPlayerReady(player){
//         console.log("Player is ready: ", player);
//         this.player = player;
//     }
 
//     onVideoPlay(duration){
//         console.log("Video played at: ", duration);
//     }
 
//     onVideoPause(duration){
//         console.log("Video paused at: ", duration);
//     }
 
//     onVideoTimeUpdate(duration){
//         console.log("Time updated: ", duration);
//     }
 
//     onVideoSeeking(duration){
//         console.log("Video seeking: ", duration);
//     }
 
//     onVideoSeeked(from, to){
//         console.log(`Video seeked from ${from} to ${to}`);
//     }
 
//     onVideoEnd(){
//         console.log("Video ended");
//     }
 
//     render() {
//         return (
//             <div>
//                 <VideoPlayer
//                     controls={true}
//                     src={this.state.video.src}
//                     poster={this.state.video.poster}
//                     width="720"
//                     height="420"
//                     onReady={this.onPlayerReady.bind(this)}
//                     onPlay={this.onVideoPlay.bind(this)}
//                     onPause={this.onVideoPause.bind(this)}
//                     onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
//                     onSeeking={this.onVideoSeeking.bind(this)}
//                     onSeeked={this.onVideoSeeked.bind(this)}
//                     onEnd={this.onVideoEnd.bind(this)}
//                 />
//             </div>
//         );
//     }
// }
// export default VideoApp;