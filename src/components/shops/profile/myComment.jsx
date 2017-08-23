//dependencias
import React, {Component} from 'react'
import $ from 'jquery'
import {Link} from 'react-router'
//css
import './css/mycomment.css'
export default class MyComment extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    const review = {
      opinion: this.textInput.value,
      calification: 2
    }
    this.props.addReview(review)

    this.textInput.value=""
  }
  render() {
    return (
      <div className="myComment">
       <div className="d-flex flex-row justify-content-center sub-myComment">
         <Link  to="/user/5" className="PROFILE_img">
           <img src="https://arvenzwebdesing.000webhostapp.com/profile.jpg" alt />
         </Link>
         <div className="inputs">
           <div className="d-flex flex-row flex-wrap">
             <div className="np">
               <p>{sessionStorage.name}</p>
               <div className="points">
                 <p>Puntuar:</p>
                 <span className="fa fa-star" />
                 <span className="fa fa-star" />
                 <span className="fa fa-star" />
                 <span className="fa fa-star" />
                 <span className="fa fa-star" />
               </div>
             </div>
           </div>
           <div className="d-flex flex-row flex-wrap">
             <form className="" onSubmit={this.handleSubmit}>
               <textarea id="text" type="textArea" defaultValue={""} ref={node => this.textInput = node} />
               <div className="d-flex flex-row flex-wrap">
                 <div className=" buttonContainer">
                   <input id="button" type="submit" defaultValue="Comentar" />
                 </div>
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
    )
  }
}
