import React, {useEffect} from 'react';
import { connect} from 'react-redux';
import { fetchSmurfs } from '../actions';
import Loader from 'react-loader-spinner';


function Smurfs_List(props) {

    const { getSmurfs} = props;

    useEffect(() => {
        fetchSmurfs();
    }, [getSmurfs])

    return (
        <div className = 'smurfs-list'>
            {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
            { props.smurfs && !props.isFetching &&
            <div className = 'smurf-info'>
                <h3>Name: {props.name}</h3>
                <p>Age: {props.age}</p>
                <p>Height: {props.height}</p>
            </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: [ {
            name: state.name,
            age: state.age,
            height: state.height
        }
    ],
        isFetching: state.isFetching,
        error: state.eroor
    }
}


export default connect(
    mapStateToProps, 
    {fetchSmurfs}
)(Smurfs_List) ;