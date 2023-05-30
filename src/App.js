import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Credits from './pages/Credits';
import Montages from './pages/Montages';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HorizontalLinearStepper from './HorizontalLinearStepper';

function App() {
  return (
    <><>
    <React.Fragment>
    <><Container maxWidth="sm">
      <Box sx={{  height: '1340px',width:'1920px' }} style={{ padding: "150px 10px 0px 130px" }}>
      <HorizontalLinearStepper/>
      </Box>
    </Container>
    </>
    </React.Fragment>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={<Dashboard/>} />
          <Route path='/credits' component={<Credits/>} />
          <Route path='./Montages' component={<Montages/>}/ >
        </Routes>
      </Router>
    </>
      </>
    
  );
 
}

export default App;