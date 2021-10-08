import { Container } from '@mui/material';
import { useSelector } from 'react-redux';

function User(props) {
  const {users} = useSelector((state) => state);
  const {id} = props;
  const user = users[id];
  const numberOfAnswers = Object.keys(user.answers).length;
  const numberOfQuestions = user.questions.length;
  const score = numberOfAnswers + numberOfQuestions;
  return (
    <Container
      sx={{
        my: 1,
        width: 500,
        border: 1,
        borderColor: 'gray',
        borderRadius: 2,
        background: 'whitesmoke',
      }}
    >
      <h3>{user.name}</h3>
      <img className="avatar" alt="avatar" src={user.avatarURL}/>
      <ul>
        <li>Answered questions: {numberOfAnswers}</li>
        <li>Created questions: {numberOfQuestions}</li>
      </ul>
      <p>Score: {score}</p>
    </Container>
  );
}

export default User;