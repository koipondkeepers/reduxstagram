
function postComments(state=[], action){ // we set state to an empty array because the first time this runs state isn't going to equal anything
    switch(action.type){
      case 'ADD_COMMENT':
         //Return the new state with the new comment
        return [...state,{
          user: action.author,
          text: action.comment
        }];
      case 'REMOVE_COMMENT':
        //console.log("removing a comment")
        //we need to return the new state without the deleted comment
        return [
          //from the start to the one we want to delete
          ...state.slice(0,action.i),
          //after the deleted comment
          ...state.slice(action.i+1)
        ]
      default:
        return state;
    }
    return state;
}

function comments(state=[], action){ // we set state to an empty array because the first time this runs state isn't going to equal anything
    if(typeof action.postId !== 'undefined'){
      return {
        //take current state
        ...state,
        //overwrite this post with a new one
        [action.postId]: postComments(state[action.postId], action)
      }
    }
    return state;
}

export default comments;
