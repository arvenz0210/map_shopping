 //dependencias
import React, {Component} from 'react'

import ContainerHeader__EDITABLE from '../../../assets/containerHeader/container-header__EDITABLE'
//css
export default class ContactInfo__EDITABLE extends Component {
  constructor(props){
    super(props)
    this.state={
      edit: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
      this.handleCancel = this.handleCancel.bind(this)
  }

  handleCancel() {
    this.setState({
      edit: false
    });
  }
  handleSubmit(e){
    e.preventDefault();
    const info = {
      name:this.nameInput.value,
      category:this.categoryInput.value,
      phone:this.phoneInput.value
    }
    console.log(info);
    this.props.infoEdit(info)
    this.setState({
      edit: true
    })
  }

  render() {
    const styleTitle={
      fontWeight: 'normal',
      fontSize: '16px'
    }
    const styleDate={
      fontWeight: '300',
      fontSize: '14px'
    }
    if(this.state.edit){
      return (                                                      //toggle
        <ContainerHeader__EDITABLE putAction={(e)=>{this.setState({edit: !this.state.edit})}} title="Informacion">
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
        </ContainerHeader__EDITABLE>
      )
    }else{
      return (                                                      //toggle
        <ContainerHeader__EDITABLE putAction={(e)=>{this.setState({edit: !this.state.edit})}} title="Informacion">
          <form onReset={this.handleCancel} onSubmit={this.handleSubmit}>
            <div className="d-flex flex-row justify-content-between">
              <p style={styleTitle}>Nombre</p>
              <p style={styleDate}><input type="text" ref={node => this.nameInput = node}/></p>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <p style={styleTitle}>Categoria</p>
              <p  style={styleDate}><select spellCheck="false" ref={node => this.categoryInput = node}>
                <option value="1">Verduleria</option>
                <option value="2">Caferteria</option>
                <option value="3">Restaurante</option>
                <option value="4">Remiserias</option>
                <option value="5">Heladeria</option>
              </select></p>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <p style={styleTitle}>Telefono</p>
              <p  style={styleDate}><input type="text" ref={node => this.phoneInput = node}/></p>
            </div>
            <button id="v" type="submit" className="fa fa-check"></button>
            <button id="x" type="reset" className="fa fa-times"></button>
          </form>
        </ContainerHeader__EDITABLE>
      )
    }

  }
}
