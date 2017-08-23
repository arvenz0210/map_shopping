//dependencias
import React, {Component} from 'react'

//css
import './css/container-header__EDITABLE.css'
export default class ContainerHeaderEditable__EDITABLE extends Component {


  render() {
    return (
      <div>
        <div className="headerEditable">
          <h2>{this.props.title}</h2>
          <button onClick={this.props.putAction} className="fa fa-pencil"></button>
        </div>
        <div className="contentEditable">
          {this.props.children}
        </div>
      </div>
    )
  }
}
