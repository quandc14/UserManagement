import React, { Component } from 'react';
import UserTable from './UserTable'

class Table extends Component {

    showDataUser = () => this.props.dataUserProps.map((value, key) => {
        return (
            <UserTable key={key} 
            userName={value.name} 
            stt={key} 
            telUser={value.tel} 
            id = {value.id} 
            permissionUser={value.permission} 
            editNewUserData={(user) => this.props.editNewUser(value)}
            changStatusEdit={() => this.props.changStatusEdit()}
            deleteUser = {(user) => this.props.deleteUser(user)}
            />
        )
    })
    
    // showDataUser = () => {
    //     this.props.dataUsers.map((value,key) => {
    //         <UserTable userName={value.name} key={key} />
    //     })
    // }

    deleteUser = (user) => {
        this.props.deleteUser(user)
    }
        
    render() {
        console.log(this.props.dataUsers);
        return (
            <div className="col-9">
                <table className="table table-striped table-hover ">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>TÊN</th>
                        <th>ĐIỆN THOẠI</th>
                        <th>QUYỀN</th>
                        <th>HÀNH ĐỘNG</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.showDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Table;