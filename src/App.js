import React from 'react';
import './App.scss';

import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Experiences from './pages/Experiences';
import { ThemeContext } from './services/ThemeService';
import { NavigationContext } from './services/NavigationService';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState((prevState) => ({
        theme: prevState.theme === 'dark' ? 'light' : 'dark'
      }));
    }

    this.toggleMenu = (e) => {
      this.setState(({
        menu: e.target.text.toLowerCase()
      }));
    }

    this.state = {
      theme: "light",
      toggleTheme: this.toggleTheme,

      menu: "home",
      toggleMenu: this.toggleMenu,
    }
  }

  componentDidMount = () => {
    const menu = window.location.href.split('/').at(-1);
    if (menu.length === 0) {
      this.setState({menu: 'home'});
    } else {
      this.setState({menu: menu});
    }
  }

  render = () => {
    const theme = this.state.theme;
    const toggleTheme = this.toggleTheme;

    const menu = this.state.menu;
    const toggleMenu = this.toggleMenu;

    return (
      <div className={"App " + (this.state.theme === 'dark' ? 'dark' : 'light')} >
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <NavigationContext.Provider value={{ menu, toggleMenu }}>
            <Navbar />
          </NavigationContext.Provider>
          <Container className="page">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='publications' element={<Publications />} />
              <Route path='experience' element={<Experiences />} />
            </Routes>
          </Container>
        </ThemeContext.Provider>
      </div >
    );
  };
}

export default App;
