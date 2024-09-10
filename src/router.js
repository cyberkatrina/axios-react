import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button'

import App from './App';

const Home = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Home</h1>
      <Button component={Link} to="/app" variant="outlined" color="primary">
        Go to Beer App
      </Button>
    </div>
  )
}

const Router = () => {
  return (
    /* Then we use Routes and Route. Routes acts like a regular JS Switch Statement */
    <Routes>
        /* depending on the path in the URL, one of these Routes will be returned and their component rendered */
        <Route path="/" element={<Home/>} />
        <Route path="/app" element={<App/>} />
    </Routes>
  );
}

export default Router