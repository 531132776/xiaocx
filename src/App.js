import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import logo from './logo.svg';
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';

import './App.css';
import './less/login.css'
import Home from './pages/home/home.js'

const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.state = {
      collapsed: false,
      students : ["张三然","李慧思","赵思然","孙力气","钱流量"],
    }
  }
  
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed})
  }
  componentDidMount(){
    console.log(this.props)
  }
  componentWillMount(){
    console.log(this.props)
  }
  
  render() {
    console.log(this.props)
    var students = ["张三然","李慧思","赵思然","孙力气","钱流量"];
    var arr = () =>{
      var res = [];
      for(let i in students){
        res.push(<li key={i}>{students[i]}</li>)
      }
      return res
    }
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <ul>
                {
                  this.state.students.map( (v,i) => {
                    return <li key={i}>{v}:{i}</li>
                  })
                }
              </ul>
              <ul>
                {arr(this.props.students)}
              </ul>
              <Route path="/home" component={Home} />
            </div>
            
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
        {/* <div className="App">
        <header className="App-header">
            <ul>
              <li>
                <Link to="/home">渣渣</Link>
              </li>
            </ul>
        </header>
        <div className="login">
           <Route path="/home" component={Home}/>
        </div>
      </div> */}
      </Router>
      
    )
  }
}

export default App;
