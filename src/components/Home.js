import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ToggleQuestion from './Category';
import QuestionList from './QuestionList';

function Home() {
  const {authedUser} = useSelector((state) => state);
  return (
    <Fragment>
      {!authedUser && <Redirect to="/signIn"/>}
      <ToggleQuestion/>
      <QuestionList/>
    </Fragment>
  );
}

export default Home;