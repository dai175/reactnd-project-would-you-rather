import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Fragment, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { ANSWERED, UNANSWERED } from '../actions/category';
import { handleQuestionAnswer } from '../actions/questions';
import NotFound from './NotNound';

const OPTION_ONE = 'optionOne';
const OPTION_TWO = 'optionTwo';

function Poll(props) {
  const {authedUser, users, user, question} = props;
  const [answer, setAnswer] = useState(OPTION_ONE);
  const dispatch = useDispatch();

  if (!question) {
    return (
      <NotFound/>
    )
  }

  const category = Object.keys(users[authedUser].answers).includes(question.id) ? ANSWERED : UNANSWERED;
  const countOfVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
  const ratioOfOptionOne = Math.floor(question.optionOne.votes.length / countOfVotes * 100);
  const ratioOfOptionTwo = 100 - ratioOfOptionOne;

  const handleSubmit = () => {
    dispatch(handleQuestionAnswer(authedUser, question.id, answer));
  };

  return (
    <Container
      sx={{
        my: 1,
        width: 600,
        border: 1,
        borderColor: 'gray',
        borderRadius: 2,
      }}
    >
      <p>{user.name} asks</p>
      <div>
        <img className="avatar" alt="avatar" src={user.avatarURL}/>
        {category === ANSWERED
          ?
          <Fragment>
            <p>Results</p>
            <div>
              <p>{question.optionOne.text}</p>
              <p>{ratioOfOptionOne} %</p>
              <p>{question.optionOne.votes.includes(authedUser) ? 'You' : ''}</p>
            </div>
            <div>
              <p>{question.optionTwo.text}</p>
              <p>{ratioOfOptionTwo} %</p>
              <p>{question.optionTwo.votes.includes(authedUser) ? 'You' : ''}</p>
            </div>
          </Fragment>
          :
          <Fragment>
            <Container>
              <FormControl component="fieldset">
                <FormLabel component="legend">Would you rather</FormLabel>
                <RadioGroup
                  aria-label="option"
                  defaultValue="optionOne"
                  name="radio-buttons-group"
                  onChange={(event) => setAnswer(event.target.value)}
                >
                  <FormControlLabel value={OPTION_ONE} control={<Radio/>} label={question.optionOne.text}/>
                  <FormControlLabel value={OPTION_TWO} control={<Radio/>} label={question.optionTwo.text}/>
                </RadioGroup>
              </FormControl>
            </Container>
            <Button sx={{my: 1}} variant="contained" onClick={handleSubmit}>Submit</Button>
          </Fragment>
        }
      </div>
    </Container>
  );
}

function mapStateToProps({authedUser, users, questions}, props) {
  const {id} = props.match.params;
  const question = questions[id];
  const user = question ? users[question.author] : null;
  return {
    authedUser,
    users,
    user,
    question,
    id,
  };
}

export default connect(mapStateToProps)(Poll);