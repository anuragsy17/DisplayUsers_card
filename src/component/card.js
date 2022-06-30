import React, { Component } from 'react';
import { users } from '../mock'
import { EditBtn, Close } from './button';
import ModalPopup from './modalPopup';
import Pagination from './pagination';
import SearchBox from './searchBox';
import ViewModal from './viewModal';

class Card extends Component {
    constructor() {
        super()
    }
    state = {
        user_data: [],
        currentPage: 1,
        UserPerPage: 8,
        currentUsers: [],
        currentUserId: '',
        isAvailable: false,
        isEditMode: false,
        goingToEditdata: [],
        isViewMode: false,
    }
    componentDidMount() {
        const user_data = users.map((data) => { return data })
        this.setState({ ...this.state, user_data })
        //this.setState({...this.state, currentUsers: this.currentUsers})
        //console.log('length',this.state.currentUsers.length);
    }
    nextPaginate = () => {
        this.setState({ ...this.state, currentPage: this.state.currentPage + 1 })
    }
    prevPaginate = () => {
        this.setState({ ...this.state, currentPage: this.state.currentPage - 1 })
    }
    updateState = (id, isAvailable, isSearch) => {
        this.setState({ ...this.state, currentUserId: id, isAvailable: isAvailable, isSearch: isSearch })
    }
    editUser = (data) => {
        this.setState({ ...this.state, isEditMode: true, goingToEditdata: data })
    }
    closePopup = () => {
        this.setState({ ...this.state, isEditMode: false, goingToEditdata: '' })
    }
    // viewMode = (data) => {
    //     this.setState({...this.state, isViewMode: true })
    //     console.log('hello');
    // }
    // closeViewModal = () =>{
    //     this.setState({ ...this.state, isViewMode: false,})
    // }
    render() {
        const indexOfLastUser = this.state.currentPage * this.state.UserPerPage
        const indexOfFirstUser = indexOfLastUser - this.state.UserPerPage
        const currentUsers = this.state.user_data.slice(indexOfFirstUser, indexOfLastUser)
        let filterWith = ''
        if (this.state.isAvailable == true) {
            filterWith = this.state.user_data
        } else {
            filterWith = currentUsers
        }
        return (
            <>
                <SearchBox
                    userData={this.state.user_data}
                    data={{ updateState: this.updateState.bind(this) }}
                    currentUserId={this.state.currentUserId}
                />
                
                {/* {this.state.isViewMode ? <ViewModal closeViewModal={this.closeViewModal} />: null} */}
                {this.state.isEditMode ? <ModalPopup 
                closePopup={this.closePopup}
                user_data = {this.state.user_data} 
                data = {this.state.goingToEditdata}
                /> : null}
                {
                    filterWith.filter((val) => {
                        if (this.state.currentUserId === '') {
                            return currentUsers
                        } else if (val.id == this.state.currentUserId) {
                            return val
                        }
                    }).map((data) => {
                        return (
                            <div className='card' onClick={() => { this.viewMode(data) }}>
                                <div className='main_card'>
                                    <div className='image_section'>
                                        <img className='image' src={data.image} />
                                        <div className='status'>status</div>
                                    </div>
                                    <div className='details_section'>
                                        <div>
                                            <p className='para_head'>ID: {data.id}</p>
                                            <p className='para_head'>Name:</p>
                                            <p className='para'>{data.name}</p>
                                            <p className='para_head'>Email</p>
                                            <p className='para'>{data.email}</p>
                                            <p className='para_head'>Gender: <span className='span'>{data.Gender}</span></p>
                                            <EditBtn editUser={() => { this.editUser(data) }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <Pagination
                    next_paginate={this.nextPaginate}
                    prev_paginate={this.prevPaginate}
                />
            </>
        );
    }
}

export default Card;