import React, { Component } from 'react'
import  './Tour.scss';

class Tour extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showinfo:false
        }
    }

    infoHandler=()=>
   {
        this.setState({showinfo:!this.state.showinfo})
   }

    render() {
        const{id,info,name,city,img}=this.props.des
      const displayInfo=this.state.showinfo? <p id="info">{info}</p>:<p>Click  info</p>;
       
        return (
            <div className="tour">
              <div className="imgcontainer">
                  <img src={img} alt="" srcSet="city image"/>
                  <span className="close" onClick={()=>this.props.remove(id)}>
                      <i className="fas fa-window-close"/>
                  </span>
              </div>
              <div className="citydescription">
                  <h2>{name}</h2>
                  <p>{city}</p>
                  <h5 onClick={this.infoHandler}>Info <span><i className="fas fa-caret-square-down"></i></span></h5>
                 {displayInfo}
              </div>
            </div>
        )
    }
}

export default Tour;
