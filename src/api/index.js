import fetch from 'isomorphic-fetch';

const baseURL = 'http://localhost:8000';
//const baseURL = 'http://mapshopping.herokuapp.com';

const API = {
  shops: {
    async getAll(category) {
      const response = await fetch(`${baseURL}/shops/?category=${category}`);
      const data = await response.json();
      return data;
    },

    async getMyShop(shopId) {
      const response = await fetch(`${baseURL}/myshops/${shopId}`, {
        headers: new Headers({'Authorization': `JWT ${sessionStorage.jwt}`, 'Content-Type': 'application/json', 'Accept': 'application/json'})
      });
      const data = await response.json();

      return data;
    },

    async getMyShops() {

      const response = await fetch(`${baseURL}/myshops/`, {
        headers: new Headers({'Authorization': `JWT ${sessionStorage.jwt}`, 'Content-Type': 'application/json', 'Accept': 'application/json'})
      });
      const data = await response.json();
      return data;
    },

    async getOne(id) {
      const response = await fetch(`${baseURL}/shops/${id}`);
      const data = await response.json();
      return data;
    },


    async addShop(shop) {
      const response = await fetch(`${baseURL}/shops/`, {
        method: 'POST',
        headers: new Headers({'Authorization': `JWT ${sessionStorage.jwt}`, 'Content-Type': 'application/json', 'Accept': 'application/json'}),
        body: JSON.stringify(shop) //convierte en string
      });
      const date = await response.json();
      return date;
    },
    async addImg_galery(img, id) {

      const response = await fetch(`${baseURL}/shops/${id}/gallery/`, {
        headers: new Headers({'Authorization': `JWT ${sessionStorage.jwt}`, 'Accept': 'application/json'}),
        method: 'POST',
        body: img,
        contentType: false
      });
      const date = await response.json();
      return date;
    },

    async delImg_galery(id) {
      const response = await fetch(`${baseURL}/gallery/${id}/`, {
        method: 'DELETE'
        //headers: new Headers({'Authorization': `JWT ${sessionStorage.jwt}`})

      });
      const date = await response.json();
      console.log(JSON.stringify(date));
      return date
    },

    async editCoverpage(img,id) {

      const response = await fetch(`${baseURL}/shops/${id}/`, {
        method: 'PATCH',
        headers: new Headers({'Authorization': `JWT ${sessionStorage.jwt}`}),
        body: img,
        contentType: false
      });
      const date = await response.json();

      return date.cover_photo;
    },


    async editDesc(desc,id) {
      console.log(desc+"in api");
      const response = await fetch(`${baseURL}/shops/${id}/`, {
        method: 'PATCH',
        headers: new Headers({'Authorization': `JWT ${sessionStorage.jwt}`,'Content-Type': 'application/json', 'Accept': 'application/json'}),
        body: JSON.stringify(desc),
        contentType: false
      });
      const date = await response.json();
      console.log(JSON.stringify(date.description));
      return date.description;
    },

    async editInfo(info,id) {
      console.log(info+"in api");
      const response = await fetch(`${baseURL}/shops/${id}/`, {
        method: 'PATCH',
        headers: new Headers({'Authorization': `JWT ${sessionStorage.jwt}`,'Content-Type': 'application/json', 'Accept': 'application/json'}),
        body: JSON.stringify(info),
        contentType: false
      });
      const date = await response.json();
      console.log(JSON.stringify(info)+"---------------");
      return date;
    },

    async addReview(review,shopId) {

      const response = await fetch(`${baseURL}/shops/${shopId}/review/`, {
        method: 'POST',
        headers: new Headers({'Authorization': `JWT ${sessionStorage.jwt}`, 'Content-Type': 'application/json', 'Accept': 'application/json'}),
        body: JSON.stringify(review) //convierte en string
      });
      const date = await response.json();

      return date;
    }

  },
  /***********************************/
  user: {
    async login(credentials) {
      const cred = {
        username: credentials.username,
        password: credentials.password
      }
      const response = await fetch(`${baseURL}/login/`, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'}),
        body: JSON.stringify(cred)
      });
      const date = await response.json();
      if (response.status == 200) {

        return ({date: date, error: null})
      } else {
        return ({date: null, error: date})
      }
    },

    async addUser(user) {
      const response = await fetch(`${baseURL}/auth/register/`, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'}),
        body: JSON.stringify(user) //convierte en string
      });
      const date = await response.json();
      return date;
    },

    async getOneUser(id) {
      const response = await fetch(`${baseURL}/users/${id}/`);
      const data = await response.json();
      return data;
    },

    async getMyUser() {
      const response = await fetch(`${baseURL}/myuser/`, {
        headers: new Headers({'Authorization': `JWT ${sessionStorage.jwt}`, 'Content-Type': 'application/json', 'Accept': 'application/json'})
      });
      const data = await response.json();
      return data;
    }

  },
  offers: {
    async getOffers() {
      const response = await fetch(`${baseURL}/offers/`, {
        method: 'GET'});
      const data = await response.json();
      return data;
    },

    async addImg_offer(img, id) {
      console.log(`Imagaen: ${img}    id:${id}`);
      const response = await fetch(`${baseURL}/offers/${id}/`, {
        headers: new Headers({'Authorization': `JWT ${sessionStorage.jwt}`, 'Accept': 'application/json'}),
        method: 'PATCH',
        body: img,
        contentType: false
      });
      //const date = await response.json();
      //return date;
    },

    async addOffer(offer,shopId) {

      const response = await fetch(`${baseURL}/shops/${shopId}/offer/`, {
        method: 'POST',
        headers: new Headers({'Authorization': `JWT ${sessionStorage.jwt}`, 'Content-Type': 'application/json', 'Accept': 'application/json'}),
        body: JSON.stringify(offer) //convierte en string
      });
      const date = await response.json();
      return date.id;
    }
  }
}

export default API;
