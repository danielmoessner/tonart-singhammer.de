import React from 'react';
import ChildrenData from '../types/ChildrenData';

function Container({ children }) {
  return <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 xl:px-0">{children}</div>;
}

Container.propTypes = {
  children: ChildrenData.isRequired,
};

export default Container;
