import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker.jsx';
import uuid from 'uuid'
export default class ShopsMap extends Component {
  render() {
    const defaultMap = {
      center: {lat: -34.471007, lng: -58.759639},
      zoom: 15
    };


    return (
      <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyCyIuBxQ9rvIuW94FwbfqIiAguqUduRmNY'}}
        center={defaultMap.center}
        zoom={defaultMap.zoom}>
        {
          this.props.dataShops.map(x=>(
            <Marker key={uuid.v4()}  id={x.id} lat={x.lat} lng={x.lon} category={x.category}/>
          ))
        }
      </GoogleMap>
    );
  }
}

//<Marker lat={-34.471007} lng={-58.759639} text={'A'} />
