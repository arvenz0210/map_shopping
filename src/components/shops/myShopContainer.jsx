//dependencias
import React, {Component, PropTypes} from 'react';
import * as shopsActions from '../../actions/shopsActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory,Link} from 'react-router'
//css
import 'bootstrap/dist/css/bootstrap.css'
import "react-image-gallery/styles/css/image-gallery-no-icon.css"
//componentes
import ContactInfo__EDITABLE from './profile/editable/contactInfo__EDITABLE'
import Description__EDITABLE from './profile/editable/description__EDITABLE'
import ContainerHeader from '../assets/containerHeader/container-header'
import ContainerHeader__EDITABLE from '../assets/containerHeader/container-header__EDITABLE'
import CoverPage__EDITABLE from './profile/editable/coverpage__EDITABLE'

import Gallery__EDITABLE from './profile/editable/gallery__EDITABLE'

import MyComment from './profile/myComment'
import CommentContainer from './profile/commentContainer'
import ImageGallery from 'react-image-gallery';
import OfferListContainer from '../offer/offerListContainer'
import NewOfferItem from '../offer/NewOfferItem'
//import AddImgGallery from './addImgGallery'

class myShopContainer extends Component {
  constructor(props){
    super(props)
    this.coverPageEdit = this.coverPageEdit.bind(this)
    this.galleryAdd = this.galleryAdd.bind(this)
    this.delete_photo = this.delete_photo.bind(this)
    this.infoEdit = this.infoEdit.bind(this)
    this.descEdit = this.descEdit.bind(this)
  }
  async componentWillMount() {
    await this.props.actions.fetchMyShop(this.props.shopId);
  }

  async descEdit(desc){

    await this.props.actions.editDesc(desc,this.props.shopId)
  }

  async infoEdit(info){

    await this.props.actions.editInfo(info,this.props.shopId)
  }
  async  delete_photo(image){

    await this.props.actions.delImg(image)
  }
  async galleryAdd(img) {
    await this.props.actions.addImg(img,this.props.shopId)
  }

  async coverPageEdit(img) {
    await this.props.actions.editCoverpage(img,this.props.shopId)
  }

  render() {
    const id = this.props.shopId
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/'
      }, {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      }, {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
      <section className="container">

        <CoverPage__EDITABLE editCoverPage={this.coverPageEdit} title={this.props.myShop.name} imgUrl={this.props.myShop.cover_photo}/>

        <div className="row">
          <div className="col-sm-8">
            <Description__EDITABLE descEdit={this.descEdit} desc={this.props.myShop.description}/>
          </div>

        <div className="col-sm-4">
          <ContactInfo__EDITABLE name={this.props.myShop.name} phone="0123910" category={this.props.myShop.category} infoEdit={this.infoEdit}/>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <ContainerHeader__EDITABLE title="Ofertas" putAction={()=> browserHistory.push(`/shop/${this.props.myShop.id}/offer/add`)}>

              <OfferListContainer offers={this.props.myShop.offers}/>

            </ContainerHeader__EDITABLE>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <ContainerHeader title="Galeria">
                <Gallery__EDITABLE deletePhoto={this.delete_photo} galleryAdd={this.galleryAdd} gallery={this.props.myShop.gallery}/>
            </ContainerHeader>
          </div>
        </div>

      </section>
    )
  }

}

function mapStateToProps(state, ownProps) {
  return {shopId: ownProps.params.shopId, myShop: state.activeMyShop.shop, loading: state.activeMyShop.loading};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(shopsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(myShopContainer);
