//dependencias
import React, {Component} from 'react'
import {browserHistory} from 'react-router'
//css

export default class MyShopMarker extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(key){
    console.log("clickea2")
    browserHistory.push("/shop/"+key)
  }
  render() {
    const myMarkerStyle={
        width: "30px",
        height: "44px",
        position: "absolute",
        left: "-15px",
        top: "-44px"
    }
      return(
          <img style={myMarkerStyle} src="http://arvenzwebdesing.000webhostapp.com/icon/logo.png" />
      )
    }
  }
