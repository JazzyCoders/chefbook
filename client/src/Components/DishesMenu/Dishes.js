import react from 'react';

import { Dishes } from '../modules/Dishes.js';


const Dish = props => {
  return (
    <div className="dish__container">
      <h2 className="dish__name">{props.name}</h2>
      <img src={props.image} alt="dish img" className="dish__image" />
      <p className="dish__description">{props.description}</p>
      <p className="dish__price">
        {props.price.$numberDouble ? props.price.$numberDouble : props.price}{" "}
        <i className="fas fa-euro-sign" />
      </p>

      {/* only shown in home: */}
      {props.addFromHome && (
        <div onClick={() => props.addFromHome(props.id)}>
          <i
            className="fa fa-plus-circle dish__button--addToCart"
            aria-hidden="true"
          />
        </div>
      )}

      {/* only shown in chart: */}
      {props.onDeleteMore && (
        <div className="dish__quantityController">
          <div onClick={() => props.onDeleteMore(props.id)}>
            <i
              className="fa fa-minus-circle dish__button--minus"
              aria-hidden="true"
            />
          </div>

          {props.quantity && (
            <input
              className="dish__quantity"
              disabled
              type="text"
              placeholder={`x ${props.quantity}`}
            />
          )}

          {props.addMore && (
            <div onClick={() => props.addMore(props.id)}>
              <i
                className="fa fa-plus-circle dish__button--plus"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dish;


