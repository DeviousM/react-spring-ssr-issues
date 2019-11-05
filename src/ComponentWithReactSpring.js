import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Transition, animated } from 'react-spring';

const DropdownCanvas = styled(animated.div)`
  position: absolute;
  ${({ position }) =>
    position &&
    position.split(' ').map(
      pos => css`
        ${pos}: 0;
      `
    )};
  min-width: ${({ width }) => (width && typeof width === 'number' ? `${width}px` : width)};
  transition: min-width 0.2s, width 0.2s;
  will-change: width, min-width;
  background: #ffffff;
  z-index: 100;
  color: #5e5e5e;
  border-radius: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 6px 24px 0 rgba(0, 0, 0, 0.16);
`;

class Dropdown extends Component {
  state = { dropdownOpen: false };

  toggleDropdown = () => this.setState(state => ({ dropdownOpen: !state.dropdownOpen }));

  closeDropdown = () => this.setState({ dropdownOpen: false });

  render() {
    const { children, trigger, width, className, position = 'right', disabled } = this.props;
    const { dropdownOpen } = this.state;
    return (
      <div style={{ display: 'inline-block', position: 'relative' }}>
        <span onClick={!disabled ? this.toggleDropdown : () => {}} role="button">
          {trigger}
        </span>
        <Transition
          items={dropdownOpen}
          from={{
            opacity: 0,
            transform: 'translate3d(0, -10px, 0)',
            pointerEvents: 'none',
          }}
          enter={{
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
            pointerEvents: 'all',
          }}
          leave={{
            opacity: 0,
            transform: 'translate3d(0, -10px, 0)',
            pointerEvents: 'none',
          }}
          config={{ mass: 1, tension: 500, friction: 47 }}
          native
        >
          {show =>
            show &&
            (styles => (
              <DropdownCanvas
                position={position}
                className={className}
                width={width}
                style={styles}
              >
                {children}
              </DropdownCanvas>
            ))
          }
        </Transition>
      </div>
    );
  }
}

export default Dropdown;
