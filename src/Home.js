import React, { Component } from 'react';
import logo from './react.svg';
import './Home.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ComponentWithReactSpring from './ComponentWithReactSpring';

const DropdownTrigger = styled.div`
  display: inline-block;
  position: relative;
`;

class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }

  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to After.js</h2>
        </div>
        <ComponentWithReactSpring
          trigger={
            <div style={{ display: 'inline-block', position: 'relative' }}>
              Click for animated dropdown
            </div>
          }
          position={'left'}
          width={300}
        >
          <div>Contents of a dropdown</div>
        </ComponentWithReactSpring>
      </div>
    );
  }
}

export default Home;
