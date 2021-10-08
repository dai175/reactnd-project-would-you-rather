import { Button, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { clearAuthedUser } from '../actions/authedUser';

function Menu() {
  const {authedUser, users} = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(clearAuthedUser());
    return (
      <Redirect to="/signIn"/>
    );
  };
  return (
    <Container sx={{float: 'left', my: 1}}>
      <NavLink className="menu-item" to="/">Home</NavLink>
      <NavLink className="menu-item" to="/add">New Question</NavLink>
      <NavLink className="menu-item" to="/leaderboard">Leader Board</NavLink>
      {authedUser && <span className="user-name">Hello, {users[authedUser].name}</span>}
      {authedUser && <Button className="menu-item" onClick={handleSignOut}>Sign out</Button>}
    </Container>
  );
}

export default Menu;