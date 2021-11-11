import React from 'react';
import EditUser from './EditUser';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObject: {}
        }
    }

    getUserObject = (info) => {
        this.setState({
          userObject: info
        })
        this.props.getUserInfo(info)
      } 

    hienThiform = () => {
        if(this.props.trangThai === true) {
            return (<div className="btn btn-block btn-outline-secondary" onClick={() => this.props.KetNoi()}>Đóng</div>)
        } else {
            return (<div className="btn btn-block btn-outline-info" onClick={() => this.props.KetNoi()}>Thêm mới</div>)
        }
    }
    isChang = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.getTextSearch(this.state.tempValue)
    }
    
    changEditForm = () => {
        if(this.props.editForm === true) {
           return <EditUser 
                    getUserObject = {(info) => this.getUserObject(info)}
                     editUserObject = {this.props.editUserObject}
                    changStatusEdit={() => this.props.changStatusEdit()}/>
        }
    }
    render() {
        return(
                  <>
                   <div>
                        
                            {this.changEditForm()}
                            <div className="form-group mt-2">
                            <div className="btn-group">
                                <input type="text"className="form-control" 
                                onChange={(event) => this.isChang(event)}
                                placeholder="Nhập tên cần tìm" 
                                style={{width: '500px'}} />
                                <div className="btn btn-info " onClick={(dl) => this.props.getTextSearch(this.state.tempValue)}>Tìm</div>
                            </div>
                            </div> 
                            <div className="btn-group1">
                                
                            
                            {this.hienThiform()}
                            

                            </div>
                        </div>
                        <div className="col-12">
                            <hr />
                        </div>
                    

                  </>
        )
    }
}