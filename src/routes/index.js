import React from 'react'
import { browserHistory, Router, Route,history ,Link} from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Signup from '../modules/signUp/signUp';
import { HomeView } from '../modules/homeView/homeView';
import Login from '../modules/login/login';
import UserList from '../modules/userList/userList';


class App extends React.Component {
  // static propTypes = {
  //   store: PropTypes.object.isRequired,
  //   routes: PropTypes.object.isRequired,
  // }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={this.props.routes} >
            <Route path="/" component={HomeView} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/userlist" component={UserList} />

          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
