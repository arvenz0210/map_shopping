//dependencias
import React, {Component} from 'react'
import $ from 'jquery'
//css
import './css/coverpage__EDITABLE.css'
export default class CoverPage extends Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleImageChange(e) {
    var file = e.target.files[0];
      $("#fileName").html(file.name);
      $("button").css("display","block")
  }

  handleSubmit(e){
    e.preventDefault()
    var formData = new FormData(document.getElementById('formImg'));
    this.props.editCoverPage(formData)
    $("#fileName").html("");
    $("button").css("display","none")
  }

  render() {

    const coverPageStyle = {
      backgroundImage: 'url(' + this.props.imgUrl + ')',
    };

    return (

        <div className="coverPage__EDITABLE" style={coverPageStyle}>
          <form id="formImg" onSubmit={this.handleSubmit} encType="multipart/form-data" className="COVERPAGE_EDITABLE-header">
              <input type="file" name="cover_photo" id="file" className="inputfile" onChange={(e)=>this.handleImageChange(e)} />
              <label htmlFor="file">
                <span className="fa fa-camera-retro"></span>
              </label>
              <span id="fileName"></span>
              <button id="v"  type="submit" className="fa fa-check"></button>
              <button  id="x" type="submit" className="fa fa-times"></button>
          </form>


          <div className="shopName">
            <h1>{this.props.title}</h1>
          </div>
         </div>
    )
  }
}
