import React from 'react';

const Comments = React.createClass({
  renderComment(comment, i){
    return(
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
        </p>
      </div>
      )
  },

  handleSubmit(e){
    e.preventDefault(); //this line prevents the page from refreshing
    const { postId }= this.props.params;
    const author = this.refs.author.value;//we used .value here because if we don't
    const comment = this.refs.comment.value;//we'll just get the HTML, which we don't want

  this.props.addComment(postId,author,comment);
  this.refs.commentForm.reset(); //this allows us to clear the form of text once submitted
  },

  render(){
    return(
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref = "commentForm" className="comment-form" onSubmit={this.handleSubmit}>
            <input type="text" ref = "author" placeholder= "author"/>
            <input type="text" ref = "comment" placeholder= "comment"/>
            <input type="submit" hidden/>
        </form>
      </div>
    )
  }
});

export default Comments;
