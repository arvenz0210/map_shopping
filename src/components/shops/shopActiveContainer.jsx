//dependencias
import React, {Component, PropTypes} from 'react';
import * as shopsActions from '../../actions/shopsActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'
//css
import 'bootstrap/dist/css/bootstrap.css'
import "react-image-gallery/styles/css/image-gallery-no-icon.css"
//componentes
//import ContactInfo from './profile/contactInfo'
import ContainerHeader from '../assets/containerHeader/container-header'
import CoverPage from './profile/coverpage'
import MyComment from './profile/myComment'
import CommentContainer from './profile/commentContainer'
import ImageGallery from 'react-image-gallery';
import OfferListContainer from '../offer/offerListContainer'
import Description from './profile/description'
import ContactInfo from './profile/contactInfo'
class shopActiveContainer extends Component {
  constructor(props){
    super(props)

    this.addReview = this.addReview.bind(this)
  }
  async componentWillMount() {
    await this.props.actions.fetchShop(this.props.shopId);
  }

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }
   async addReview(review){
     await this.props.actions.addReview(review,this.props.shopId)
  }
  render() {
    /*const images = [
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
    ]*/








    if(!this.props.activeShop.reviews.length==0){
      console.log(this.props.activeShop.reviews+"aaa");
      const searchItem = (review) => review.user === 2
      const item = this.props.activeShop.reviews.find(searchItem)
      const index = this.props.activeShop.reviews.findIndex(searchItem)
      console.log(item);
    }





    const images = []
    this.props.activeShop.gallery.map((z,i)=>{
      images[i]={
        original: z.image,
        thumbnail: z.thumbnail
      }
    })
    return (
      <section className="container">
        <CoverPage title={this.props.activeShop.name} imgUrl={this.props.activeShop.cover_photo}/>
        <div className="row">
          <div className="col-sm-8">
            <Description desc={this.props.activeShop.description}/>
          </div>

          <div className="col-sm-4">
            <ContainerHeader title="Informacion">
              <ContactInfo name={this.props.activeShop.name} category={this.props.activeShop.category} phone="342-3492" />
            </ContainerHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <ContainerHeader title="Ofertas">
              <OfferListContainer offers={this.props.activeShop.offers}/>

            </ContainerHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <ContainerHeader title="Galeria">
              <ImageGallery items={images} slideInterval={2000} onImageLoad={this.handleImageLoad}/>
            </ContainerHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <ContainerHeader title="Opiniones">
              <MyComment addReview={this.addReview}/>
              <CommentContainer comments={this.props.activeShop.reviews} name="Arvenz" imgProfile=""/>
            </ContainerHeader>
          </div>
        </div>

      </section>
    )
  }

}

function mapStateToProps(state, ownProps) {
  return {shopId: ownProps.params.shopId, activeShop: state.activeShop.shop, loading: state.activeShop.loading};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(shopsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(shopActiveContainer);
