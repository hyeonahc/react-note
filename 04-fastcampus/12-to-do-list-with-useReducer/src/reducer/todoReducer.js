export function todoReducer(todoData, action) {
  switch (action.type) {
    case 'ADD':
      return [...todoData, action.data]
    case 'REMOVE':
      return todoData.filter((itemData) => itemData.id !== action.data.id)
    case 'CHECK':
      return todoData.map((itemData) =>
        itemData.id === action.data.id
          ? { ...itemData, checked: !itemData.checked }
          : itemData,
      )
    default:
      throw Error
  }
}
