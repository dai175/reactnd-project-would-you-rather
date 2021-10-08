import { Container } from '@mui/material';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import AddQuestion from './AddQuestion';
import './App.css';
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import Menu from './Menu';
import './Menu.css';
import NotFound from './NotNound';
import Poll from './Poll';
import SignIn from './SignIn';

function App() {
  const {authedUser, loading} = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? <h3>Loading</h3> : (
        <Container>
          <div className="App">
            {authedUser && <Menu/>}
            <Container sx={{clear: 'both'}}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/add" component={AddQuestion}/>
                <Route exact path="/leaderboard" component={LeaderBoard}/>
                <Route exact path="/questions/:id" component={Poll}/>
                <Route exact path="/signIn" component={SignIn}/>
                <Route component={NotFound}/>
              </Switch>
            </Container>
          </div>
        </Container>
      )}
    </Fragment>
  );
}

export default App;