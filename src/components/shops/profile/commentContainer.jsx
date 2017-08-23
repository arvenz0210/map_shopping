//dependencias
import React, {Component} from 'react'
import uuid from 'uuid'
//Component
import OthersComments from './othersComments'

export default class CommentContainer extends Component {
  render() {
    return (
      <div className="commentContainer">
        {
          this.props.comments.map(x=>(
            <OthersComments opinion={x.opinion} name={x.user.username} key={uuid.v4()}/>
          )).reverse()
        }
      </div>
    )
  }
}
