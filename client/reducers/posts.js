//a reducer takes in 2 things:

//1) an action (info about what happened)
//2) a copy of the current state


function posts(state=[], action){ // we set state to an empty array because the first time this runs state isn't going to equal anything
    switch(action.type){
      case 'INCREMENT_LIKES':
        //console.log("Incrementing Likes");
        const i = action.index;
      // return updated state
        return[
          ...state.slice(0,i), //we're taking everything before the item we're updating,
          {...state[i], likes: state[i].likes + 1}, //and then we're updating the one part of state that we wanna update,
          ...state.slice(i+1) //and then taking everything after the item we're updating
        ]
      default:
        return state;
    }
}

export default posts;
