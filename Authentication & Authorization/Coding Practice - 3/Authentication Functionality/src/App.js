import {Route, Redirect, Switch, BrowserRoute} from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default App
