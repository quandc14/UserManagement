import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editUserObject.id,
            name: this.props.editUserObject.name, 
            tel: this.props.editUserObject.tel,
            permission: this.props.editUserObject.permission,
        }
    }

    saveGetUser = () => {
        var info ={};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        this.props.getUserObject(info)

        this.props.changStatusEdit() // ẩn form
    }

    isChang = (event) => {
        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name] : value
        })
    }
    render() {  
        return (
            <div className="card">  
            
            <form>
            <div className="card-body text-secondary">
            <div className="card-header text-center">Sửa thông tin hệ thống </div>
            <div className="card-content">
                <div className="form-group">
                <input type="text" 
                name="name" 
                defaultValue={this.props.editUserObject.name} 
                className="form-control" 
                placeholder="Nhập tên User"  
                onChange={(event) => this.isChang(event)}
                />
                </div>
            </div>
            <hr />
            <div className="card-content">
                <div className="form-group">
                <input type="text" 
                name="tel" 
                defaultValue={this.props.editUserObject.tel}  
                className="form-control" 
                placeholder="Điện thoại"  
                onChange={(event) => this.isChang(event)}
                
                />
                </div>
            </div>
            <hr />
            <div className="card-content">
                <div className="form-group">
                <select className="custom-select" 
                required name="permission"
                defaultValue={this.props.editUserObject.permission} 
                onChange={(event) => this.isChang(event)}
                
                >
                    <option value>Chọn quyền mặc định</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>Normal</option>
                </select>
                </div>
            </div>
            <div className="form-group">
                <input type="button" className="btn btn-block btn-danger"  value="Lưu" onClick={() => this.saveGetUser()}/>
            </div>
            </div>
            </form>
        </div>
        );
    }
}

export default EditUser;