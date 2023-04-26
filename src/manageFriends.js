let initialState = { friends: [] };

export function manageFriends(state = initialState, action) {
  if(action.type ==="friends/add"){
    return { 
      friends: [...state.friends, {
        name: action.payload.name,
        hometown: action.payload.hometown,
        id: action.payload.id
      }]
    }
  } else if (action.type==="friends/remove"){
    return {
      friends: [...state.friends].filter(friend=>friend.id !== action.payload)
    }
  } else
  return state
}
