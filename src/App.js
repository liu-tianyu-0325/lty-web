import React from 'react';
import { Button } from 'antd';
import './App.less';
import Login from './pages/login/index.tsx';
import Register from './pages/register/index.tsx';
import { Col, Row } from 'antd';
import Logo from './components/logo/logo.tsx';
import { NavLink, useRoutes, Routes, Route, Navigate } from 'react-router-dom'
import routes from './routes'

function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      <Row justify="center" align="middle  ">
        <Col ><Logo /></Col>
      </Row>

      {/* <Row justify="center" align="middle  ">
        <Col span={8} ><Login /></Col>
      </Row>
      <Row justify="center" align="middle">
        <Col span={8} ><Register /></Col>
      </Row> */}
      <Row justify="center" align="middle">
        {/* <Col span={6} >{element}</Col> */}
        {element}
      </Row>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>


    </div>

  );
}

export default App;
