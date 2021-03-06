import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from "./common/commonIndex";
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {

  state = { showModal: false };

  componentWillMount() {
    console.log(this.props.employee);
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your weekly shift starts on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

    render() {
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                  <Button onPress={this.onTextPress.bind(this)}>
                    Send Schedule
                  </Button>
                </CardSection>

                <CardSection>
                  <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                    Suspend Employee
                  </Button>
                </CardSection>

                <Confirm
                  visible={this.state.showModal}
                  onAccept={this.onAccept.bind(this)}
                  onDecline={this.onDecline.bind(this)}
                >
                  Are you sure you want to suspend the employee?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
}

export default connect(mapStateToProps,
   { employeeUpdate, employeeSave, employeeDelete }
 )(EmployeeEdit);
