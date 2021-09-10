import React from 'react';
import PropTypes from 'prop-types';

export default function AudienceItem({ user: { name } }) {
  return <div className="user-name">{name}</div>;
}

AudienceItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.object.isRequired,
  }),
};
