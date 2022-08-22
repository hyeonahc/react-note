export function userReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.data]
    case 'REMOVE':
      return state.filter((el) => el.id !== action.data.id)
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
