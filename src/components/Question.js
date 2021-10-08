import { Button, Container } from '@mui/material';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Question(props) {
  const {user, question, id} = props;
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
      <p>{user.name} asked</p>
      <div>
        <img className="avatar" alt="avatar" src={user.avatarURL}/>
        <ul aria-label="Would you rather">
          <li>{question.optionOne.text}</li>
          <li>{question.optionTwo.text}</li>
        </ul>
        <Button
          sx={{mb: 2}}
          variant="contained"
          component={Link}
          to={`/questions/${id}`}
        >
          View Poll
        </Button>
      </div>
    </Container>
  );
}

function mapStateToProps({users, questions}, {id}) {
  const question = questions[id];
  const user_id = question.author;
  const user = users[user_id];
  return {
    user,
    question,
    id,
  };
}

export default connect(mapStateToProps)(Question);