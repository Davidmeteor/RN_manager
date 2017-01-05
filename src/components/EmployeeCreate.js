import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeInitial, employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  componentWillMount() {
    this.props.employeeInitial();
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    // if user didn't change the shift picker, which means that the shift will be e,pty string
    // we will use Monday as our default value
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    // Just to test the employee information passed by clicking each item in the employee list
    // console.log(this.props.employee);
    // <EmployeeForm {...this.props} /> means we pass all props to the EmployeeForm
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeInitial, employeeUpdate, employeeCreate })(EmployeeCreate);
