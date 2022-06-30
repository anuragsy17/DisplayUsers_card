import React, { Component } from 'react';
import {SaveBtn} from './button'

class ModalPopup extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        id: '',
        name: '',
        email: '',
        Gender: ''
    }
    
    closePopup = () => {
        this.props.isEditMode = false
        this.setState({...this.state, id: '' })
    }
    handleChange = (e)=>{
        console.log(e.target.value);
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        console.log('name', this.state.name);
        console.log('id=>', this.props.data.id);
        return (
            <>
                <div className='modal_container'>
                    <div className='modal'>
                        <div>
                            <button className='close_popup' onClick={() => { this.props.closePopup() }}>&times;</button>
                        </div>
                        <div>
                            <label htmlFor="">Name: 
                            <input type="text" name={this.props.data.name} id="" defaultValue={this.props.data.name} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">Email: 
                            <input type="text" name={this.props.data.email} id="" defaultValue={this.props.data.email} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">Gender: 
                            <select name={this.props.data.Gender} id="" onChange={this.handleChange}>
                                <option value={this.props.data.Gender}>{this.props.data.Gender} </option>
                                <option value='female'>female</option>
                            </select>
                            </label>
                        </div>
                        <SaveBtn saveDetails={this.saveDetails} />
                        
                    </div>
                </div>

            </>
        );
    }
}

export default ModalPopup;