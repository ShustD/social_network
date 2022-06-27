import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import { Preloader } from './common/Preloader/Preloader';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { LoginPage } from './components/Login/Login';
import { Music } from './components/Music/Music';
import { NavBar } from './components/Navbar/navbar';
import { News } from './components/News/News';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { Settings } from './components/Settings/Settings';
import { UsersContainer } from './components/Users/UsersContainer';
import { authorizedPageThunk } from './redux/appReducer';

export class App extends React.Component {
  
  componentDidMount() {
    this.props.authorizedPageThunk()
}

  render() {

    if (!this.props.authorized) {
      return <Preloader />
    }

    return (
    <div className='wrapper'>
      <BrowserRouter>
        <HeaderContainer />
        <NavBar />
        <div className='wrapper_content'>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setting' element={<Settings />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
  }
}
const mapState = (state) => ({
  authorized: state.app.authorized
})
App = connect(mapState, {authorizedPageThunk})(App)





