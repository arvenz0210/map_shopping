//dependencias
import React, {Component} from 'react'
import {browserHistory} from 'react-router'
//css
import './css/marker.css'

export default class Marker extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(key){
    console.log("clickea2")
    browserHistory.push("/shop/"+key)
  }
  render() {

      const url=`http://arvenzwebdesing.000webhostapp.com/icon/${this.props.category}.png`
      return(

          <img className="marker" src={url} onClick={(evt) => this.handleClick(this.props.id)}/>

      )
    }
  }
