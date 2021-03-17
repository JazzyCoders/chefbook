import react from 'react';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Card, Container } from 'semantic-ui-react';

// use redux or not 🤔
import { createOrder } from '../modules/Order/';

class Order extends Component {
  submit = values => {
    const { createOrder, id } = this.props;
    createOrder(values, id);
  };

  render() {
    return (
      <div>
        <Card.Header>
          <Container textAlign="center">
            <h2>Create Order</h2>
          </Container>
        </Card.Header>
        <Order onSubmit={this.submit} />
      </div>
    );
  }
}

Order.propTypes = {
  createOrder: PropTypes.func,
  id: PropTypes.number,
};

export default connect(null, { createOrder })(Order);