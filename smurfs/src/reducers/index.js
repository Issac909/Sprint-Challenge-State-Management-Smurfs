import { FETCHING_START, FETCH_SUCCESS, FETCH_FAILURE,ADDING_SMURFS, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE, TOGGLE_EDIT, EDIT_SMURF } from '../actions';

const initialState ={
    smurf: [{id:0}],
    isFetching: false,
    error: '',
    editing: false
}

export const reducer = (state = initialState, {type, payload} ) => {
    console.log('Inital State:', state)
    switch(type) {

        case FETCHING_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }

        case FETCH_SUCCESS:
            return {
                error: '',
                smurf: payload,
                isFetching: false
            }

        case FETCH_FAILURE:
            console.log(payload);
             return {
                 ...state,
                 error: payload,
                 isFetching: false
             };

        case ADDING_SMURFS:
            return {
                ...state,
                isFetching: true
            };

        case ADD_SMURF_SUCCESS:
            return {
                isFetching: false,
                smurf: payload
            }

        case ADD_SMURF_FAILURE:
            return {
                ...state, 
                error: payload
            };
        case TOGGLE_EDIT:
            return {
                ...state,
                smurf: [...state.smurf],
                editing: !state.editing
            }
        case EDIT_SMURF:
            return {
                ...state,
                smurf:[{...state.smurf, id: payload}],
                editing: false
            }

        default: 
            return state;
    }

} 
