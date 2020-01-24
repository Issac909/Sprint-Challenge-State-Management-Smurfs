import React, { useState } from 'react';
import {connect} from 'react-redux';
import { addSmurfs } from '../actions';

function SmurfForm(props) {

    const [smurf, setSmurf] = useState({})


    const onChange = e =>{
        console.log(e.target)
        setSmurf({
        ...smurf,
        [e.target.name]: e.target.value
        })
    }   

    const onSubmit  = e => {
        e.preventDefault();
        props.addSmurfs(smurf);
        setSmurf({
            name: '',
            age: '',
            height: ''
        });

    }

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <h2>Add Smurf</h2>
                <input type='text' placeholder = 'name' name = 'name' value= {smurf.name} onChange = {onChange} />
                <input type='number' placeholder = 'age' name = 'age' value= {smurf.age} onChange = {onChange} />
                <input type='text' placeholder = 'height' name = 'height' value= {smurf.height} onChange = {onChange} />
                 <div>
                     <button className = 'btnDiv' type = 'submit'>Submit</button>
                 </div>
            </form>


        </div>
    )
}



const mapStateToProps = state => {
    return {
        name: state.name,
        age: state.age,
        height: state.height,
        id: state.id,
    }
}


export default connect(
    mapStateToProps, 
    {addSmurfs}
)(SmurfForm);