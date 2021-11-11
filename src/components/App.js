import React from 'react';
import './../App.css';
import AddUser from './AddUser';
import Footer from './Footer';
import Header from './Header';
import SearchForm from './SearchForm';
import Table from './Table';
import { v4 as uuidv4 } from 'uuid';
import DataUser from './Data.json'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThai: false,
      data: DataUser,
      searchText: '',
      editForm: false,
      editUserObject: {},
      
    }
  }

  
  
  

  getUserInfo = (info) => {
   this.state.data.forEach((value) => {
     if ( value.id === info.id ) {
       value.name = info.name;
       value.tel = info.tel;
       value.permission = info.permission;
     }
   })
   localStorage.setItem(('userData'), JSON.stringify(this.state.data))
    
  }

  deleteUser = (user) => {
    var tempData = this.state.data.filter((item) => item.id !== user);
    this.setState({
      data: tempData
    })
    localStorage.setItem(('userData'), JSON.stringify(tempData))
  }

  
  editUser = (user) => {
    this.setState({
      editUserObject: user
    })
    console.log(user);
  }
  getNewUserData = (name, tel, permission) => {
    var item = {}
        item.id = uuidv4();
        item.name = name;
        item.tel = tel;
        item.permission = permission;
        var items = this.state.data
        items.push(item);
        this.setState({
          data: items
        })

        localStorage.setItem(('userData'), JSON.stringify(items))
  }
  doiTrangThai = () => {
    this.setState({
      trangThai: !this.state.trangThai
    })
  }
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }
  
  changStatusEdit = () => {
    this.setState({
      editForm: !this.state.editForm
    })  
  }

  componentDidMount() {
    
    if (localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(DataUser));
    } else {
      let temp = JSON.parse(localStorage.getItem('userData'))
      this.setState({data: temp});
    }
    
  }
  
  render() {
    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item)
      }
    })
    
    return (  
      
      <div>
        <Header/>
        <div className="container">
          <div className="col-12">
            <div className="row">
              <SearchForm 
              getUserInfo = {(info) => this.getUserInfo(info)}
              editUserObject={this.state.editUserObject}
              KetNoi={() => this.doiTrangThai()} 
              trangThai={this.state.trangThai} 
              getTextSearch={(dl) => this.getTextSearch(dl)}
              editForm={this.state.editForm}
              changStatusEdit={() => this.changStatusEdit()}
              />
              <Table dataUserProps={ketqua}
              editNewUser={(user)=> this.editUser(user)}
              changStatusEdit={() => this.changStatusEdit()}
              deleteUser = {(user) => this.deleteUser(user)}
              />
              <AddUser 
              add={(name, tel, permission) => this.getNewUserData(name, tel, permission)}
              trangThai={this.state.trangThai}/>
            </div>
        </div>
        <Footer/>
      </div>
      </div>
    )
  }
}

    
    


export default App;
