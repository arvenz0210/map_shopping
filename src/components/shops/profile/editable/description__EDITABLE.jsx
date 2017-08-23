 //dependencias
import React, {Component} from 'react'

import ContainerHeader__EDITABLE from '../../../assets/containerHeader/container-header__EDITABLE'
//css
export default class Description__EDITABLE extends Component {
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
    const desc = {
      description:this.descInput.value,

    }
    console.log(desc);
    this.props.descEdit(desc)


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
      fontSize: '14px',
      width: '100%'
    }
    if(this.state.edit){
      return (                                                      //toggle
        <ContainerHeader__EDITABLE putAction={(e)=>{this.setState({edit: !this.state.edit})}} title="Descripcion">
          <div>
            <div className="d-flex flex-row justify-content-between">
              <p style={styleDate}>{this.props.desc}</p>
            </div>
          </div>
        </ContainerHeader__EDITABLE>
      )
    }else{
      return (                                                      //toggle
        <ContainerHeader__EDITABLE putAction={(e)=>{this.setState({edit: !this.state.edit})}} title="Descripcion">
          <form onReset={this.handleCancel} onSubmit={this.handleSubmit}>
            <div className="d-flex flex-row justify-content-between">
              <p style={styleDate}><textArea type="text" style={{width: '100%'}} ref={node => this.descInput = node}/></p>
            </div>
            <button id="v" type="submit" className="fa fa-check"></button>
            <button id="x" type="reset" className="fa fa-times"></button>
          </form>
        </ContainerHeader__EDITABLE>
      )
    }

  }
}
