//dependecias
import React, {Component, PropTypes} from 'react';
import * as offerActions from '../../actions/offerActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'
import ContainerHeader from '../assets/containerHeader/container-header'
import './css/addOfferContainer.css';
class AddOfferContainer extends Component {

  constructor(props) {
    super(props)
      this.state={fileName:'face',imgUrl:'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/19366472_1616423888370389_2857274344837432553_n.jpg?oh=004778eb6348e5c62c385c52198bbea8&oe=5A331748'}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)

  };

  handleImageChange(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        file: file,
        imgUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  async handleSubmit(e) {
    e.preventDefault();
    const offer = {
      title: this.titleInput.value,
      description: this.descriptionInput.value,
      price: this.priceInput.value,
      discount: this.discountInput.value
    };
    var formData = new FormData(document.getElementById('offerImage'));



    await this.props.actions.addOffer(offer,this.props.shopId);
    await this.props.actions.addOfferImg(formData,this.props.newOffer)
    browserHistory.push("/myShop/"+this.props.shopId)
  }

  render() {
    return (
      <div className="container">
      <ContainerHeader title="Crear oferta">
        <div className="ADD_OFFER-container">
          <form onSubmit={this.handleSubmit} id="offerImage" encType="multipart/form-data" className="ADD_OFFER-form">
            <div className="ADD_OFFER-row">
              <p>Titulo</p>
              <input type="text" ref={node => this.titleInput = node}/>
            </div>

            <div className="ADD_OFFER-row">
              <p>Descripción</p>
              <input type="text" ref={node => this.descriptionInput = node}/>
            </div>

            <div className="ADD_OFFER-row">
              <p>Precio</p>
              <input type="text" ref={node => this.priceInput = node}/>
            </div>

            <div className="ADD_OFFER-row">
              <p>Descuento</p>
              <input type="text" ref={node => this.discountInput = node}/>
            </div>

            <div id="offerImage" className="ADD_OFFER-row">
              <input type="file" name="image" id="img" onChange={this.handleImageChange}/>
              <label htmlFor="img" name="image">Agregar imagenes <span className="fa fa-upload"></span></label>
              <img className="rev" src={this.state.imgUrl}/>
            </div>
            <input className="ADD_OFFER-btn-create" type="submit" value="Crear oferta"/>
          </form>
        </div>
      </ContainerHeader>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(offerActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {shopId: ownProps.params.shopId, newOffer: state.offersReducer.newOffer};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOfferContainer);
