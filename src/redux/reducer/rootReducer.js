const initialState = {
  people: [],
  planets: [],
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PEOPLE': {
      return {
        ...state,
        people: [...state.people, ...action.payload],
      }
    }
    case 'GET_PLANETS': {
      return {
        ...state,
        planets: [...state.planets, ...action.payload],
      }
    }
    default: 
      return state
  }
}