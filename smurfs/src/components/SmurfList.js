import React, {useState, useEffect} from 'react';
import { connect} from 'react-redux';
import { fetchSmurfs, addSmurfs } from '../actions';
// import Loader from 'react-loader-spinner';
import SmurfForm from './SmurfForm';

import { editSmurf } from '../actions'

import SmurfIcon from '../images/smurf.png'

const SmurfsList = props => {
  console.log('Props in SmurfsList', props);
  const [smurfToEdit, setSmurfToEdit] = useState({})

    useEffect(() => {
        props.fetchSmurfs();
    }, [props.fetchSmurfs])

  const clickHandler = () => {
    setSmurfToEdit({
      age: undefined,
      height: undefined
    })
  }

    return (
        <div className = 'list-container'>         
        <SmurfForm addSmurf={props.addSmurfs} />
        <h2>THE SMURF VILLAGE</h2>
          <div className = 'smurf-info'>
            {props.smurf.map(smurf => (
              <p className = 'info' key={smurf.id}>
                <div>
                <img className = 'smurf-icon' src = {SmurfIcon} />
                <button>Edit</button>
                </div>
                <br></br>
                <h3>{smurf.name}</h3>
                <br></br>
                Age: {smurf.age}
                <br></br>
                Height: {smurf.height} 
              </p>
            ))}
          </div>
 
        </div>
      );
}

const mapStateToProps = state => {
    console.log(state)
    return ({
      smurf: state.smurf,
      error: state.error,
      editing: state.editing
    }
)};


export default connect(
    mapStateToProps, 
    {fetchSmurfs, addSmurfs, editSmurf}
)(SmurfsList) ;