import { createStore } from "redux";


const friendsArr = [
    { name: 'Mehul', favourite: false },
    { name: 'Sonakshi', favourite: false },
    { name: 'Priya', favourite: false },
    { name: 'Rahul', favourite: false },
    { name: 'Kavita', favourite: false },
    { name: 'Meenakshi', favourite: false }
];

const initialState = {
   friends: friendsArr
};

const reducer = (state = initialState, action) => {
    if(action.type === 'addFriend')
    {
        const temp = [...state.friends, action.payload];

        state = {...state, friends: temp};
    }
    else if(action.type === 'deleteFriend')
    {
        const temp = state.friends.filter( friend => friend.name !== action.payload.name );

        state = {...state, friends: temp}
    }
    else if (action.type === 'makeFavourite') {
        const temp = [...state.friends];

        let index = temp.indexOf(action.payload);

        if (index !== -1) {
            temp[index] = {...temp[index], favourite: !action.payload.favourite};
        }

        state = {...state, friends: temp}
    }

    return state;
};

const store = createStore(reducer);

export default store