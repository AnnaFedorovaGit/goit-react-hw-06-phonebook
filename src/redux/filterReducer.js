
const initState = {
    // contacts: [],
    filter: ""
};

export const filterReducer = (state = initState, action) => { 
    switch (action.type) { 
        case 'filter/setFilter': { 
            return {
                ...state,
                filter: action.payload,
            }
        }
        default:
            return state;
    }
}
