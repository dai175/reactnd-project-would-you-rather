import { Container } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import User from './User';

function LeaderBoard() {
  const {authedUser, users} = useSelector((state) => state);
  const [toHome] = useState(false);
  return (
    <Container
      sx={{
        my: 1,
        width: 600,
        border: 1,
        borderColor: 'gray',
        borderRadius: 2,
        background: 'lightgray',
      }}
    >
      {!authedUser && <Redirect to="/signIn"/>}
      {toHome && <Redirect to="/"/>}
      {Object.keys(users).sort((a, b) => {
        const countOfA = users[a].questions.length + Object.keys(users[a].answers).length;
        const countOfB = users[b].questions.length + Object.keys(users[b].answers).length;
        if (countOfA < countOfB) return 1;
        if (countOfA > countOfB) return -1;
        return 0;
      }).map((id) => (
        <User key={id} id={id}/>
      ))}
    </Container>
  );
}

export default LeaderBoard;