import React, { Component } from 'react'

export default class NewNavbar extends Component {
  render() {
    return (
      <div>
        <div className="container">
                     <div className="attr-nav">
                         <ul>
                             <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
                         </ul>
                     </div>

                     <div className="navbar-header">
                         <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand" href="#brand">
                            <img src="../images/logo.png" className="logo" alt=""/>
                            <img src="../images/footer-logo.png" className="logo logo-scrolled" alt=""/>
                        </a>
                     </div>

                     <div className="collapse navbar-collapse" id="navbar-menu">
                         <ul className="nav navbar-nav navbar-right">
                             <li><a href="index.html">Home</a></li>
                             <li><a href="login.html">Login</a></li>
                             <li><a href="vote.html">Vote</a></li>
                             <li><a href="transaction.html">Transaction</a></li>
                             <li><a href="addcandidate.html">Add Candidate</a></li>
                             <li><a href="">Option</a></li>
                         </ul>
                     </div>
                 </div>
      </div>
    )
  }
}
