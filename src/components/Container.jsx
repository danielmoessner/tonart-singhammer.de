import React from 'react';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 xl:px-0">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
