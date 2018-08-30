// START HERE
// #1 Create your initial state
let initialState = {
  username: '',
  age: 0,
  hairColor: '',
  height: 0
}

// #10.1 Constants used to avoid typos in your cases
const USERNAME = 'USERNAME';
const AGE = 'AGE';


export default function reducer(state = initialState, action) {
  console.log('reducer is firing', action);
  let { payload, type } = action;
  // #9 Create your switch statement
  switch (type) {
    // #10 Write a case for every piece of Redux state you want to update 
    // (Note: you can update more than on piece at a time)
    case USERNAME:
      return Object.assign({}, state, { username: payload })
    case AGE:
      return Object.assign({}, state, { age: payload })
  }
  // #2 Create a very basic reducer that returns state 
  // (You will add the switch statement later)
  return state;
}

// #11 Write an action builder that matches up with the case you just wrote
export function changeUsername(name) {
  console.log('changeUsername is firing', name)
  return {
    // #11.1 The type should match the case in the reducer
    type: USERNAME,
    // #11.2 The payload is the data
    payload: name
  }
}

export function changeAge(age) {
  console.log('changeAge is firing', age)
  return {
    type: AGE,
    payload: age
  }
}