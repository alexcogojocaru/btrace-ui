import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import ServiceCard from './components/ServiceCard';
import { useEffect, useState } from 'react';

export default function App() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/services")
      .then(response => response.json())
      .then(data => setServices(data.services))
  }, []);

  let serviceCards = [];
  if (services) {
    services.forEach(name => serviceCards.push(<ServiceCard key={name} name={name} />));
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: '#219ebc' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      {serviceCards}
    </Box>
  );
}
