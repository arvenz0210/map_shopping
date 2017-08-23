              //dependencias
import React, {Component} from 'react'
import $ from 'jquery'
import uuid from 'uuid'
//css
import './css/gallery__EDITABLE.css'
import imgDefault from './defaultImg.png'
export default class Gallery__EDITABLE extends Component {
  constructor(props) {
    super(props)
    this.state={fileName:'face',imgUrl:imgDefault}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  
  }

  handleCancel() {
    $("#fileNameGallery").html();
    $("#formGallery").css("display", "none")
    this.setState({
      file: "",
      imgUrl: imgDefault
    });
  }

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


    $("#fileNameGallery").html(file.name);
    $(".gallery_form__EDITABLE").css("display","flex")

  }

  handleSubmit(e) {

    e.preventDefault()
    var formData = new FormData(document.getElementById('formGallery'));
    this.props.galleryAdd(formData)
    $("#fileNameGallery").html();
    $("#formGallery").css("display", "none")
    this.setState({
      file: "",
      imgUrl: imgDefault
    });
  }

  render() {

    return (

      <div className="gallery__EDITABLE">
      <form id="formGallery" className="gallery_form__EDITABLE" onReset={this.handleCancel} onSubmit={this.handleSubmit} encType="multipart/form-data">
      <input type="file" name="image" id="img" className="inputfile" onChange={(e) => this.handleImageChange(e)}/>
      <span id="fileNameGallery"></span>
      <button id="v" type="submit" className="fa fa-check"></button>
      <button id="x" type="reset" className="fa fa-times"></button>
      </form>
        <div className="gallery_content__EDITABLE">
        <label htmlFor="img">
          <div className="gallery_addItem_EDITABLE">
            <img src={this.state.imgUrl}/>
          </div>
        </label>
          {
            this.props.gallery.map(z=>(
              <div className="gallery_item_EDITABLE" key={z.id} >
                <span className="delete fa fa-times" onClick={(e)=>this.props.deletePhoto(z.id)}></span>
                <img src={z.image}/>
              </div>
            ))

          }

        </div>
      </div>
    )
  }
}
