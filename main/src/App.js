

import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import {   BrowserRouter as Router,Routes, Route,useRoutes  } from 'react-router-dom';
import ClientPage from './components/Client/ClientPage';
import FreeLancer from './components/FreeLancer/FreeLancer';
import MyWallet from './lib/MyWallet/MyWallet';
import NotFound from './lib/NotFound';
const App = () => {
  const routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "client", element: <ClientPage /> },
    { path: "freelance", element: <FreeLancer /> },
    { path: "mywallet", element: <MyWallet /> },
    { path: "*", element: <NotFound /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;