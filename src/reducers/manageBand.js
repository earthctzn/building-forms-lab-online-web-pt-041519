export default function manageBand(state = {
  bands: []
}, action) {
  switch(action.type){
    case 'ADD_BAND':
      console.log('addband', action)
    return {...state, bands: [...state.bands, action.band]} 
  default:
    return state
  }
};
