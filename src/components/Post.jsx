import React from 'react';
import PropTypes from 'prop-types';
import ChildrenData from '../types/ChildrenData';

function Component({ element, children, color }) {
  const Tag = element;

  return <Tag className={`text-lg font-medium tracking-wide ${color}`}>{children}</Tag>;
}

Component.defaultProps = {
  element: 'p',
  color: 'text-gray-700',
};

Component.propTypes = {
  element: PropTypes.string,
  color: PropTypes.string,
  children: ChildrenData.isRequired,
};

export default Component;
