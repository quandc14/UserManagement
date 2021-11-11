import React, { Component } from 'react';


class UserTable extends Component {
    showPermissionUser = () => {
        if(this.props.permissionUser === 1) {
            return ("Admin")
        } else if (this.props.permissionUser === 2) {
            return ("Moderator")
        } else {
            return ("Normal User")
        }
    }

    editUser = () => {
        if (this.props.stt === this.props.stt) {
            
        }
    }

    editClickUser = () => {
        this.props.editNewUserData();
        this.props.changStatusEdit();
    }
    render() {
        return (
            <tr>
                        <td >{this.props.stt +1}</td>
                        <td>{this.props.userName}</td>
                        <td>{this.props.telUser}</td>
                        <td>{this.showPermissionUser()}</td>
                        <td>
                        <div className="btn-group">
                            <div className="btn btn-warning edit"  onClick={()=> this.editClickUser()}><i className="fa fa-edit"/>Sửa</div>
                            <div className="btn btn-danger delete" onClick={() => this.props.deleteUser(this.props.id)}><i className="fa fa-delete" />Xóa<div>
                            </div>
                            </div></div></td>
                    </tr>
        );
    }
}

export default UserTable;