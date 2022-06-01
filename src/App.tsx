import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from "./components/pages/Home";
import { NewRoom } from "./components/pages/NewRoom";
import { Room } from './components/Room';

import { AuthContextProvider } from './components/contexts/AuthContexts'
import { AdminRoom } from './components/pages/AdminRoom';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;