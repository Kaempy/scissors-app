import { Flowbite } from 'flowbite-react';
import { Outlet } from 'react-router-dom';
import NavbarLayout from './layout/Navbar';
import customTheme from './styles/theme';

function App() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <NavbarLayout />
      <Outlet />
    </Flowbite>
  );
}

export default App;
