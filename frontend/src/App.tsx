import React, { useState } from 'react'
import './App.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import SendInvitation from 'Pages/SendInvitation'
import TransactionList from 'Pages/TransactionList'
import AddFriend from 'Pages/AddFriend'
import { Provider } from 'react-redux'
import store from './Store'
import { PageNotFound, TransactionEdit, ComingSoon, Settings, Profile, Login } from 'Pages'
import AddNewItem from 'Pages/AddNewItem'
import Dashboard from 'Pages/Dashboard'
import { hot } from 'react-hot-loader/root'
import { SiderContext } from 'Components/context'
import { storage } from 'config'

type Props = {
  loggedIn?: boolean
}

const USER_TYPE_GUEST = 'guest'
const USER_TYPE_MEMBER = 'member'

type UserType = typeof USER_TYPE_GUEST | typeof USER_TYPE_MEMBER

const App: React.FunctionComponent<Props> = () => {
  const collapsed = localStorage.getItem('menu.is_collapsed')
  const openState = collapsed === 'yes'
  const [siderState, setSiderState] = useState(openState)
  const [token, setToken] = useState('')
  const [redirect, setRedirect] = useState('')

  React.useEffect(() => {
    const loginStatus = storage.get('token') || ''

    setToken(loginStatus)
  }, [])

  React.useEffect(() => {
    if (token === USER_TYPE_MEMBER) {
      setRedirect(USER_TYPE_MEMBER)
    }
  }, [token])

  if (redirect === USER_TYPE_MEMBER) {
    return (
      <Router>
        <Provider store={store}>
          <SiderContext.Provider
            value={{
              collapsed: siderState,
              toggleSider: (): void => {
                const newValue = collapsed === 'yes' ? 'no' : 'yes'
                storage.add('menu.is_collapsed', newValue)
                setSiderState(!siderState)
              },
            }}
          >
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/add-friend" component={AddFriend} />
              <Route path="/add-new-item" component={AddNewItem} />
              <Route path="/send-invitation" component={SendInvitation} />
              <Route path="/transaction/list" component={TransactionList} />
              <Route path="/transaction/:id/edit" component={TransactionEdit} />
              <Route path="/settings" component={Settings} />
              <Route path="/profile" component={Profile} />
              <Route path="/summary">
                <ComingSoon title="Summary" />
              </Route>
              <Route component={PageNotFound} />
            </Switch>
          </SiderContext.Provider>
        </Provider>
      </Router>
    )
  }

  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App
