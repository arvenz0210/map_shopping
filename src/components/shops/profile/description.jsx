 //dependencias
import React, {Component} from 'react'

import ContainerHeader from '../../assets/containerHeader/container-header'
//css
export default class Description extends Component {

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
        <ContainerHeader title="Descripcion">
          <div>
            <div className="d-flex flex-row justify-content-between">
              <p style={styleDate}>{this.props.desc}</p>
            </div>
          </div>
        </ContainerHeader>
      )
  }
}
