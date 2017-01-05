import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }
  //this renderRow help fucntion will create the this.props.employee automatically
  // and each employee is each row of the employees array
  renderRow(employee) {
    //console.log(employee);
    return <ListItem employee={employee} />;
  }

  render() {
    //console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  // the data return from firebase (state.employees) is the object
  // we need to convert it to array before using it
  // key value pair, key is uid
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // ex: {shift: 'Monday', name: 'david', phone: '111-111-111', id: 'xx'}
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
