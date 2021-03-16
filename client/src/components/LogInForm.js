import react from 'react';

import PropTypes from 'prop-types';
import { Grid, Header, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

class LogInForm extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { onSubmit } = this.props;
    const { first_name: firstName, last_name: lastName, email, password } = this.state;
    return (
      <Form
        size="large"
        onSubmit={e => {
          e.preventDefault();
          onSubmit(this.state);
        }}
      >
        <Segment stacked>
          <Form.Input
            fluid
            onChange={this.onChange}
            icon="user"
            name="first_name"
            iconPosition="left"
            placeholder="First Name"
            value={firstName}
          />
          <Form.Input
            name="last_name"
            onChange={this.onChange}
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Last Name"
            type="text"
            value={lastName}
          />
          <Form.Input
            name="email"
            onChange={this.onChange}
            fluid
            icon="envelope"
            iconPosition="left"
            placeholder="Email"
            type="text"
            value={email}
          />
          <Form.Input
            name="password"
            onChange={this.onChange}
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            value={password}
          />

          <Button fluid size="large">
            Signup
          </Button>
        </Segment>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SignupForm;
