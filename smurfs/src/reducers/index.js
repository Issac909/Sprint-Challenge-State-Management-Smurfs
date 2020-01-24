import { FETCHING_START, FETCH_SUCCESS, FETCH_FAILURE,ADDING_SMURFS, ADDING_SMURF_SUCCESS, ADDING_SMURF_FAILURE } from '../actions';

const initialState ={
    smurfs: [{
        name: 'Papa Smurf',
        age: 546,
        height: 'Three apples tall',
        id: Date.now()

    }],
    isFetching: false,
    message: '',
    error: ''
}

export const reducer = (state = initialState, action ) => {
    console.log('Action:', action.type, action.payload)
    switch( action.type ) {

        case FETCHING_START:
            return {
                ...state,
                isFetching: true,
                message: action.payload
            }

        case FETCH_SUCCESS:
            return {
                message: '',
                smurfs: action.payload,
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
                message: action.payload
            };

        case ADDING_SMURF_SUCCESS:
            return {
                message: 'Smurf had been added', 
                smurfs: action.payload
            }

        case ADDING_SMURF_FAILURE:
            return {
                ...state, message: action.payload
            };

        default: 
            return state;
    }

} 