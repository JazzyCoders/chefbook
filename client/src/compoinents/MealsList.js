import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MealsList = ({ meals }) => (
  <div>
    <h1>All Meals</h1>
    <ul>
      {meals.map(m => (
        <Link key={m.id} to={`/meals/${m.id}`}>
          <h3 style={{ listStyleType: 'none' }}>{m.name}</h3>
        </Link>
      ))}
    </ul>
  </div>
);

MealsList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MealsList;