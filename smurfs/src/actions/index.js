import axios from "axios"

export const FETCHING_START = "FETCHING_SMURFS_START"
export const FETCH_SUCCESS = "FETCHING_SMURFS_SUCCESS"
export const FETCH_FAILURE = "FETCHING_SMURFS_FAILURE"

export const ADDING_SMURFS = "ADDING_SMURFS"
export const ADD_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS"
export const ADD_SMURF_FAILURE = "ADDING_SMURF_FAILURE"

export const TOGGLE_EDIT = "TOGGLE_EDIT"
export const EDIT_SMURF = "EDIT_SMURF"


export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({type: FETCHING_START})
        axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: res.data
                })
            })
            .catch(err => {
                console.log(err.response)
                dispatch({
                    type: FETCH_FAILURE,
                    payload: `${err.response.status} ${err.response.data}`
                    })
            })
                
    }
}

export const addSmurfs = (smurf) => dispatch => {
    dispatch({type: ADDING_SMURFS})
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            dispatch({
                type: ADD_SMURF_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => 
            dispatch({
                type: ADD_SMURF_FAILURE, 
                payload: err
            })
        )

} 

export const editSmurf = () => dispatch => {
    dispatch ({ type: TOGGLE_EDIT })
    axios
        .put(`http://localhost:3333/smurfs/:id`)
        .then(res => {
            dispatch({
                type: EDIT_SMURF,
                payload: res.data
            })
        })
        .catch(err => console.log('Error with edit smurf', err))
}