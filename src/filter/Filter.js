import React from 'react';
import StyledFilter from './StyledFilter';
import PropTypes from 'prop-types';

const Filter = ({ onChange, filter }) => {
  return (
    <StyledFilter>
      <label className="filterLabel">
        Search by Name
        <input
          className="filterInput"
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </label>
    </StyledFilter>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
