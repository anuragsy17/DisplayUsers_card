import React, { Component } from 'react';

class ViewModal extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className='modal_container'>
                <div className='modal'>
                <button className='close_viewModal' onClick={() => { this.props.closeViewModal() }}>Close</button>
                </div>
            </div>
            </>
        );
    }
}
 
export default ViewModal;