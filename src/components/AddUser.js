import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            tel: '',
            permission:''
        }
    }
    isChang= (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        });
        
        


    }
    kiemTraTrangThai = () => {
        if(this.props.trangThai === true) {
            return (
                <div className="card">  
                <form>
                <div className="card-body text-primary">
                <div className="card-content">
                    <div className="form-group">
                    <input type="text" name="name" onChange={(event) => this.isChang(event)} className="form-control" placeholder="Nhập tên User"  />
                    </div>
                </div>
                <hr />
                <div className="card-content">
                    <div className="form-group">
                    <input type="text" name="tel" onChange={(event) => this.isChang(event)}  className="form-control" placeholder="Điện thoại"  />
                    </div>
                </div>
                <hr />
                <div className="card-content">
                    <div className="form-group">
                    <select className="custom-select" required name="permission" onChange={(event) => this.isChang(event)}>
                        <option value>Chọn quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Moderator</option>
                        <option value={3}>Normal</option>
                    </select>
                    </div>
                </div>
                <div className="form-group">
                    <input type="reset" className="btn btn-block btn-primary" onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} value="thêm mới" />
                </div>
                </div>
                </form>
            </div>
            )
        }
    }
    render() {
        
        return (
            <div className="col-3">
                {this.kiemTraTrangThai( )}
            </div>

        );
    }
}

export default AddUser;