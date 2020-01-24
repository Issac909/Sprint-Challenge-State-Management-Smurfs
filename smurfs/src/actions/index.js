import axios from "axios"

export const FETCHING_START = "FETCHING_SMURFS_START"
export const FETCH_SUCCESS = "FETCHING_SMURFS_SUCCESS"
export const FETCH_FAILURE = "FETCHING_SMURFS_FAILURE"

export const ADDING_SMURFS = "ADDING_SMURFS"
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS"
export const ADDING_SMURF_FAILURE = "ADDING_SMURF_FAILURE"


export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({type: FETCHING_START})
        axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res)
            dispatch({
                type: FETCH_SUCCESS,
                payload: res.data

            })
            })
            .catch(err => 
                dispatch( {type: FETCH_FAILURE, payload: err.response}))
        }
}

export const addSmurfs = (smurf) => dispatch => {
    dispatch({type: ADDING_SMURFS})
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log(res)
            dispatch({
                type: ADDING_SMURF_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => 
            dispatch( {type: ADDING_SMURF_FAILURE, payload: err}))

} 