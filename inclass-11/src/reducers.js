
const Reducer = (state =  {
	nextId: 2,
	todoItems: [
	    {id: 0, text: "This is an item", done: false},
	    {id: 1, text: "Another item", done: false}
	]
}, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				nextId: state.nextId + 1,
				todoItems: [
					...state.todoItems,
					{id: state.nextId, text: action.text, done: state.todoItems.done}
				]
			};
			// IMPLEMENT ME
        case 'REMOVE_TODO':
            return {
                ...state,
                todoItems:[
                    ...state.todoItems.filter(({text, id}) => id != action.id)
                ]
            };
			// IMPLEMENT ME
		case 'TOGGLE_TODO':
            return {
                nextId: state.nextId + 1,
                todoItems: state.todoItems.map(function({id, text, done}){
                        return {id, text, done:(id === action.id) ? !done : done};
                    } )

            };

			// IMPLEMENT ME
		default: 
			return state
	}
};

export default Reducer

