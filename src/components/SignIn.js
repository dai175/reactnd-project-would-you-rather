import { Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

function SignIn() {
  const {authedUser, users} = useSelector((state) => state);
  const [toHome, setToHome] = useState(false);
  const [user, setUser] = useState('');

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const dispatch = useDispatch();
  const handleSignIn = () => {
    dispatch(setAuthedUser(user));
    setToHome(true);
  };

  return (
    <Fragment>
      {!authedUser && <Redirect to="/signIn"/>}
      {toHome && <Redirect to="/"/>}
      <Container
        sx={{
          my: 1,
          width: 600,
          border: 1,
          borderColor: 'gray',
          borderRadius: 2,
        }}
      >
        <h3>Welcome to the Would You Rather App!</h3>
        <p>Please sign in continue</p>
        <FormControl sx={{m: 1, minWidth: 240}}>
          <InputLabel id="select-user-label">Sign in</InputLabel>
          <Select sx={{mb: 1}}
                  labelId="select-user-label"
                  id="select-user"
                  value={user}
                  label="Select User"
                  onChange={handleChange}
          >
            {Object.keys(users).map((user) => (
              <MenuItem key={user} value={user}>{user}</MenuItem>
            ))}
          </Select>
          <Button variant="contained" disabled={!user} onClick={handleSignIn}>Sign in</Button>
        </FormControl>
      </Container>
    </Fragment>
  );
}

export default SignIn;