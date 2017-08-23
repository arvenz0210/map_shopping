 //dependencias
import React, {Component} from 'react'

//css
export default class ContactInfo extends Component {

  render() {
    const styleTitle={
      fontWeight: 'normal',
      fontSize: '16px'
    }
    const styleDate={
      fontWeight: '300',
      fontSize: '14px'
    }

      return (                                                      //toggle

          <div>
            <div className="d-flex flex-row justify-content-between">
              <p style={styleTitle}>Nombre</p>
              <p style={styleDate}>{this.props.name}</p>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <p style={styleTitle}>Categoria</p>
              <p  style={styleDate}>{this.props.category}</p>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <p style={styleTitle}>Telefono</p>
              <p  style={styleDate}>{this.props.phone}</p>
            </div>
          </div>
      )
  }
}
