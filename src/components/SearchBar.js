import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(){
        super();
        this.toggleClose = this.toggleClose.bind(this);
    }

    toggleClose(){
        this.props.onClick();
    }
  render() {
    return (
        <div class="container">
            <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-search"></i></span>
                <input type="text" class="form-control" placeholder="Search"/>
                <span class="input-group-addon close-search"><i class="fa fa-times" onClick={this.toggleClose}></i></span>
            </div>
        </div>
    )
  }
}
