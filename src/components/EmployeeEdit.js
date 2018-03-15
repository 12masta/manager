import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  render() {
    return (
        <Card>
        <EmployeeForm />
          <CardSection>
            <Button>
              Save changes
            </Button>
          </CardSection>
        </Card>
    );
  }
}

export default connect() (EmployeeEdit);
