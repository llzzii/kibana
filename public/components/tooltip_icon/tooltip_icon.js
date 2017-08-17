import React from 'react';
import { Tooltip } from '../tooltip';
import { PropTypes } from 'prop-types';

export const TooltipIcon = ({ icon = 'info', text, placement }) => {
  const classes = ['fa'];

  const icons = {
    warning: ['fa-warning', 'text-warning'],
    info: ['fa-info-circle'],
  };

  if (!Object.keys(icons).includes(icon)) throw new Error ('Unsupported icon type');

  return (
    <Tooltip text={text} placement={placement}>
      <i className={classes.concat(icons[icon]).join(' ')}/>
    </Tooltip>
  );
};

TooltipIcon.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  placement: PropTypes.string,
};
