import React, { Component } from 'react';
import { EditBtn } from './button';

class ViewModal extends Component {
    state = {  } 
    render() { 
        console.log('hi',this.props.viewData);
        return (
            <>
            <div className='modal-container'> 
                <div className='modals'>
                    <EditBtn />
                    <div className='modal_details'>
                    <h2 className='user_details'>User Details</h2>
                    <h2>ID:{this.props.viewData.id}</h2>
                    <h3>{this.props.viewData.name}</h3>
                    <p>Email: <span>{this.props.viewData.email}</span></p>
                    <p>Gender: <span>{this.props.viewData.Gender}</span></p>
                    <p>Status: <span>{this.props.viewData.status}</span></p>

                    </div>
                <button className='close_viewModal' onClick={() => { this.props.closeViewModal() }}>Close</button>
                </div>
            </div>
            </>
        );
    }
}
 
export default ViewModal;