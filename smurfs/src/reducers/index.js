import { FETCHING_START, FETCH_SUCCESS, FETCH_FAILURE,ADDING_SMURFS, ADDING_SMURF_SUCCESS, ADDING_SMURF_FAILURE } from '../actions';

const initialState ={
    smurf: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action ) => {
    console.log('State:', state)
    switch( action.type ) {

        case FETCHING_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }

        case FETCH_SUCCESS:
            return {
                error: '',
                smurf: action.payload,
                isFetching: false
            }

        case FETCH_FAILURE:
            console.log(action.payload);
             return {
                 ...state,
                 error: action.payload,
                 isFetching: false
             };

        case ADDING_SMURFS:
            return {
                ...state,
                isFetching: true
            };

        case ADDING_SMURF_SUCCESS:
            return {
                isFetching: false,
                smurf: action.payload
            }

        case ADDING_SMURF_FAILURE:
            return {
                ...state, 
                error: action.payload
            };

        default: 
            return state;
    }

} 