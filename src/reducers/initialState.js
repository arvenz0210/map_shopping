const initialState = {
  shopsList: {
    shops: [],
    error: null,
    loading: false
  },
  activeShop: {
    shop: {
      offers: [],
      gallery: [],
      reviews: []
    },
    error: null,
    loading: false
  },
  activeUser: {
    user: {
      name: ""
    },
    error: null,
    loading: false
  },
  activeMyShops:{
    shops: [],
    error: null,
    loading: false
  },
  activeMyShop: {
    shop: {
      offers: [],
      gallery: []
    },
    error: null,
    loading: false
  },
  offersList: {
    offers: [],
    newOffer: null,
    error: null,
    loading: false
  },
  myUser: {
    session:!!sessionStorage.jwt,
    error: null,
    loading: false
  }

};

export default initialState;
