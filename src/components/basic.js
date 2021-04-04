import React from 'react'
import './basic.css'
class Nav extends React.Component{
    render(){
        return(
            <div>
       
            <nav class="navbar navbar-default navbar-static-top navbar-inverse navbar-fixed-top">
                <div class="container-fluid">

                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Logo</a>
                    </div>

                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li class=""><a href="#">Home <span class="sr-only">(current)</span></a></li>
                            <li><a href="#">Admin Login</a></li>
                            <li><a href="#">User Login</a></li>
                            <li><a href="#">User Register</a></li>
                            
                        </ul>
                        <form class="navbar-form navbar-right">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Search" />
                            </div>
                            <button type="submit" class="btn btn-default">Go</button>
                        </form>

                
                    </div>
                </div>
            </nav>

            </div>
        )
    }
}

class Footer extends React.Component{
    render(){
        return(
            <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>Company Name</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                        </div>
                        <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                    </div>
                    <p class="copyright">Company Name © 2018</p>
                </div>
            </footer>
        </div>
        )
    }
}

class Card extends React.Component{
    
    render(){
        return (
        <div className="row latest-added-videos _content"  id="cards_container">
            <div className ="card ">
                <div className="row _thumbnail text-center">{this.props.title}</div>
                <img src={this.props.imgurl} alt={this.props.alter} />
            </div>
        </div>
        )
    }
}

// <content class="row latest-added-videos">
// <div id="cards_container" class="_content">

//     <!--EMPTY CONTAINER IN THE BEGINING-->
//     <!--WILL BE FILLED USING JAVASCRIPT CODE-->

// </div>
// </content>

{/* <div class="card" onclick="reply_click()">
                        <div class="row _thumbnail text-center"><a id="cardImg" onclick="redirect('${link}')"><img id="${id}" src="${src}"></a></div>
                        <div class="row text-center"><h3>${title.toUpperCase()}</h3></div>
                        <div class="row _text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper sapien non
                            neque finibus, sit amet cursus est faucibus.</div>
                        <div class="btn-group thumb-btn" role="group" aria-label="...">
                            <button type="button" class="btn btn-default">View</button>
                            <button type="button" class="btn btn-default">Star</button>
                        </div>
                        <span class="minutes">90 mins</span>
                </div>` */}


export {Nav, Footer, Card}