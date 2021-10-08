import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { ANSWERED } from '../actions/category';
import Question from './Question';

function QuestionList() {
  const {authedUser, category, users, questions} = useSelector((state) => state);
  const answeredQuestions = authedUser ? Object.keys(users[authedUser].answers) : [];
  const questionsInCategory = category === ANSWERED
    ? answeredQuestions
    : Object.keys(questions).filter(id => (!answeredQuestions.includes(id))).sort((a, b) => {
      const timestampOfA = questions[a].timestamp;
      const timestampOfB = questions[b].timestamp;
      if (timestampOfA < timestampOfB) return 1;
      if (timestampOfA > timestampOfB) return -1;
      return 0;
    });
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
      {questionsInCategory.map(id => (
        <Question key={id} id={id}/>
      ))}
    </Container>
  );
}

export default QuestionList;