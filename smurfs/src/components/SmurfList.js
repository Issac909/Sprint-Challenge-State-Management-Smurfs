import React, {useEffect} from 'react';
import { connect} from 'react-redux';
import { fetchSmurfs, addSmurfs } from '../actions';
// import Loader from 'react-loader-spinner';
import SmurfForm from './SmurfForm';


const SmurfsList = props => {
    const getSmurfs = props.fetchSmurfs;

    useEffect(() => {
        getSmurfs();
    }, [getSmurfs])

    return (
        <div className = 'list-container'>
          <div>
            {props.smurf.map(smurf => (
              <p key={smurf.id}>
                {smurf.name} - Age: {smurf.age} , Height: {smurf.height}
              </p>
            ))}
          </div>
          <SmurfForm addSmurf={props.addSmurfs} />
        </div>
      );
}

const mapStateToProps = state => {
    console.log(state)
    return ({
      smurf: state.smurf,
      error: state.error
    }
)};


export default connect(
    mapStateToProps, 
    {fetchSmurfs, addSmurfs}
)(SmurfsList) ;