//dependencias
import React, {Component} from 'react'
//Component
//import LoginSelect from './offerItem'
//css img

export default class ImgContainer extends Component {
  render() {
    const style = {
      backgroundImage: `url('${this.props.img}')`,
      height: '100%',
      backgroundSize: 'cover'
    }
    return (
      <div style={style}
      >
      </div>
    )
  }
}
