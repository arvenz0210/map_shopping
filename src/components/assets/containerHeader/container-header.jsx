//dependencias
import React, {Component} from 'react'

//css
import 'bootstrap/dist/css/bootstrap.css'
import './css/container-header.css'
export default class ContainerHeader extends Component {
  render() {
    return (
      <div >
        <div className="header">
          <h2>{this.props.title}</h2>
        </div>
        <div className="content" style={this.props.styleContent}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
