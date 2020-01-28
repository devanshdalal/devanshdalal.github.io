import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'

import './links.css';

class Links extends Component {

  state = {projects_class: "header-links disabled", home_class: "header-links active"}

  constructor(props){
      super(props);
      this.state = this.props.path === "/" ? 
          {projects_class: "header-links disabled", home_class: "header-links active"}:
          {projects_class: "header-links active", home_class: "header-links disabled"};
  }

  onClickProjects() {
    this.setState({projects_class: "header-links active", home_class: "header-links disabled"})
  }

  onClickHome() {
    this.setState({projects_class: "header-links disabled", home_class: "header-links active"})
  }

  render() {
    return (
      <Fragment>
        <Link to='/' className={this.state.home_class} onClick={() => this.onClickHome()}>About Me</Link>
        <Link to='/projects' className={this.state.projects_class} onClick={() => this.onClickProjects()}>Projects</Link>
      </Fragment>
    )
  }
};

export default Links;
