import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props){
        super(props)
    }
    state = {}
    render() {
        return (
            <div className="pagination">
                <a href="#" onClick={()=>{this.props.prev_paginate()}}>❮</a>
                <a href="#" onClick={()=>{this.props.next_paginate()}}>❯</a>
            </div>
        );
    }
}

export default Pagination;
