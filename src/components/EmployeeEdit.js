import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state= { showModal: false }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

onButtonPress() {
  const { name, phone, shift } = this.props;
  this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  console.log(name, phone, shift);
}

onAccept() {

}

onDecline() {
  this.setState({ showModal: false });
}

onTextPress() {
  const { phone, shift } = this.props;

  Communications.text(phone, `Your upcoming shift is on ${shift}`);
}

  render() {
    return (
        <Card>
        <EmployeeForm />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Save changes
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onTextPress.bind(this)}>
              Text schedule
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
              Fire employee
            </Button>
          </CardSection>

          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure you want to delete this?
          </Confirm>
        </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeSave
})(EmployeeEdit);
