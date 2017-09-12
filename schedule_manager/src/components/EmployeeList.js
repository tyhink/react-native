import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { fetchEmployees } from '../actions/EmployeeActions';
import _ from 'lodash';
import ListItem from './ListItem';

class EmployeeList extends Component {

    componentWillMount() {
        this.props.fetchEmployees();

        this.createDataSource(this.props);
    }

     componentWillReceiveProps (nextProps) {
        //nextProps are next set of props component will render with
         // this.props is still the old set of props
        this.createDataSource(nextProps);
     }

     createDataSource ({ employees }) {

         const ds = new ListView.DataSource({
             rowHasChanged: (r1, r2) => r1 !== r2
         });

         this.dataSource = ds.cloneWithRows(employees);

     }

     renderRow(employee) {
        return <ListItem employee={ employee } />
     }



    render() {
        console.log(this.props);
        return (
           <ListView
               dataSource={this.dataSource}
               renderRow={this.renderRow}
               enableEmptySections

           />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return {
            ...val,
            uid
        };
    });

    return { employees };
};

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);