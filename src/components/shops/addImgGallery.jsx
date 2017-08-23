//dependencias
import React, {Component} from 'react'
//css

export default class AddImgGallery extends Component {
  constructor(props) {
    super(props)
    this.handleImg = this.handleImg.bind(this)
  }
  async handleImg(e) {
    e.preventDefault();
    var formData = new FormData(document.getElementById('myForm'));

    await this.props.add_action.addImg(formData, this.props.shopId);
  }
  render() {
    return (
      <form id="myForm" onSubmit={this.handleImg} encType="multipart/form-data">
        <input type="file" name="image" multiple ref={node => this.imgInput = node}/>
        <button type="submit">Agregar imagen</button>
      </form>
    )
  }
}

/*const img={
    title: "asdasd",
    description: "asdas",
    price: 1,
    discount: 50,
    image: this.imgInput.files
   //convierte en string
}*/
