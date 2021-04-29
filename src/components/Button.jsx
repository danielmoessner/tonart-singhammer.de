import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ChildrenData from '../types/ChildrenData';

function Component({
  element,
  href,
  to,
  target,
  children,
  type,
  importance,
  ringOffsetClass,
  size,
  colors,
}) {
  const Tag = element === 'Link' ? Link : element;

  let attrs = {};
  if (element === 'Link') {
    attrs = {
      to,
    };
  } else if (element === 'button') {
    attrs = {
      type,
    };
  } else if (element === 'a') {
    attrs = {
      href,
      target,
    };
  }

  let classes =
    'inline-flex items-center shadow-sm border border-transparent font-medium rounded tracking-tight focus:outline-none focus:ring-2 focus:ring-offset-2';
  let colorClasses = ringOffsetClass;
  if (importance === 'primary') {
    colorClasses = `${colorClasses} shadow-sm bg-adobe-4 text-adobe-5 hover:opacity-90 focus:ring-adobe-4`;
  } else if (importance === 'secondary') {
    colorClasses = `${colorClasses} text-adobe-4 bg-transparent border-adobe-4 hover:bg-adobe-4 focus:ring-adobe-4 hover:text-adobe-5`;
  }
  colorClasses = colors || colorClasses;

  classes = `${classes} ${size} ${colorClasses}`;

  return (
    <Tag
      className={classes}
      // eslint-disable-next-line
      {...attrs}
    >
      {children}
    </Tag>
  );
}

Component.defaultProps = {
  element: 'Link',
  to: '/',
  href: '#',
  type: 'submit',
  target: '_self',
  importance: 'primary',
  ringOffsetClass: '',
  size: 'px-6 py-3 text-base',
  colors: '',
};

Component.propTypes = {
  element: PropTypes.oneOf(['a', 'button', 'Link']),
  href: PropTypes.string,
  to: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
  children: ChildrenData.isRequired,
  importance: PropTypes.oneOf(['primary', 'secondary']),
  ringOffsetClass: PropTypes.string,
  size: PropTypes.string,
  colors: PropTypes.string,
};

export default Component;
