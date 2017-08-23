//dependencias
import React, {Component} from 'react'
import * as offerActions from '../../actions/offerActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory, Link} from 'react-router'

//Component
import OfferItem from './offerItem'
import ContainerHeader from '../assets/containerHeader/container-header'
//ccs

class OfferHomeContainer extends Component {
  constructor(props){
    super(props);
    //this.handleClick = this.handleClick.bind(this);
  }
  async componentWillMount(){
    await this.props.actions.fetchOffers()
  }
  render() {
    const style = {
      backgroundImage: 'url(https://arvenzwebdesing.000webhostapp.com/offerImg.jpg)',
    };

    const styleContainer ={
      backgroundColor: 'rgb(249,249,249)',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }

    console.log(this.props.offers+"In containerdfgdf");
    return (
        <div style={styleContainer}>
          {
            this.props.offers.map(x=>(
                <OfferItem
                shopId={x.shop}
                key={x.id}
                title={x.title}
                  img={x.image}
                  desc={x.description}
                  style={style}
                  price={x.price}
                  finalprice={x.finalprice}
                  discount={x.discount}
                  />
            ))
          }

        </div>

    )
  }
}


function mapStateToProps(state, ownProps) {
  return {offers: state.offersReducer.offers, loading: state.offersReducer.loading};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(offerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferHomeContainer);
