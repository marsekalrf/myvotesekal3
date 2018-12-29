import React from 'react';
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom';
import { Affix} from 'antd';
import SearchBar from './SearchBar';


export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isSearchBoxOpen: false
    };
    this.toggleSearchBox = this.toggleSearchBox.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleSearchBox(){
    this.setState({
      isSearchBoxOpen: !this.state.isSearchBoxOpen
    });
    console.log(this.state.isSearchBoxOpen)
  }

  render() {
    const isOpen = this.state.isOpen;
    const isSearchBoxOpen = this.state.isSearchBoxOpen;
    return (
    <div class="culmn">
      <nav class="navbar navbar-default bootsnav navbar-fixed on no-full">
      
        {isSearchBoxOpen ? <div class="top-search" style={{display : "block"}}><SearchBar onClick={this.toggleSearchBox} visible={isSearchBoxOpen}/></div> : null}
        <div class="container">
          <div class="attr-nav">
              <ul>
                  <li class="search"><a ><i class="fa fa-search" onClick={this.toggleSearchBox}></i></a></li>
              </ul>
          </div>
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggle}>
              <i class={"fa " + (isOpen ? "fa-close" : "fa-bars")}></i>
            </button>
            <a class="navbar-brand" href="#brand">
              <img src="/images/logomyvote.png" class="logo" alt=""/>  
            </a>
          </div>
        {/*end of nav*/}
        
          <div class={"collapse navbar-collapse " + (isOpen ? "in" : "")} id="navbar-menu" aria-expanded={isOpen? "true" : "false"}>
              <ul class="nav navbar-nav navbar-right">
                  <li><a href="/">Home</a></li>
                  <li><a href="/login">Login</a></li>
                  <li><a href="/vote">Vote</a></li>
                  <li><a href="/transaction">Transaction</a></li>
                  <li><a href="/addcandidate">Add Candidate</a></li>
                  <li><a href="/addcandidate">Option</a></li>
              </ul>
          </div>
        </div>

        {/*<Navbar color="light" light expand="md">
          <NavbarBrand><img height="30px" src="/images/logomyvote.png" /></NavbarBrand>
          <NavbarBrand tag={Link} to="/" className="Brand"> My Vote ID</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/vote">Vote</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  tag={Link} to="/addcandidate" >Add Candidate</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  tag={Link} to="/transaction" >Transaction</NavLink>
              </NavItem>
              <NavItem>
                <Button outline color="primary" tag={Link} to="/login">Login/Signup</Button>{' '}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>*/}
    </nav>
    </div>
    );
  }
}