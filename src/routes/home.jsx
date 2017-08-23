//dependencias
import React, {Component} from 'react';
import $ from 'jquery'
//css img
import 'bootstrap/dist/css/bootstrap.css'
//componentes
import ShopsContainerMap from '../components/shops/shopsContainerMap'

export default class Home extends Component {
  componentWillMount() {
    $(document).ready(function() {
      $("#sidebarButton").click(function() {
        $(".sidebar").toggleClass('sidebarOpen')
      });
      $(".catItem").click(function() {
        $(".sidebar").removeClass('sidebarOpen')
      })
    });
  }
  render() {

    return (
      <section className="container" style={{padding: 0}}>

          <ShopsContainerMap/>

    </section>
    )
  }
}
