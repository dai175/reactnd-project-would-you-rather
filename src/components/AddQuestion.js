import { Button, Container, FormControl, TextField } from '@mui/material';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleQuestion } from '../actions/questions';

const OPTION_ONE = 'optionOne';
const OPTION_TWO = 'optionTwo';

function AddQuestion() {
  const {authedUser} = useSelector((state) => state);
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const [toHome, setToHome] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(handleQuestion({
      author: authedUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    }));
    alert('Created New Question!!');
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
        <h3>Create New Question</h3>
        <p>complete the question:</p>
        <p>Would you rather...</p>
        <FormControl sx={{width: 400}}>
          <TextField
            id={OPTION_ONE}
            label={OPTION_ONE}
            value={optionOne}
            onChange={(event) => setOptionOne(event.target.value)}
          />
          <p>or</p>
          <TextField
            id={OPTION_ONE}
            label={OPTION_TWO}
            value={optionTwo}
            onChange={(event) => setOptionTwo(event.target.value)}
          />
        </FormControl>
        <Container>
          <Button
            sx={{my: 2}}
            disabled={!optionOne || !optionTwo}
            variant="contained"
            onClick={handleSubmit}>Submit</Button>
        </Container>
      </Container>
    </Fragment>
  );
}

export default AddQuestion;