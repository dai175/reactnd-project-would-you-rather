import { Fragment } from 'react';
import ToggleQuestion from './Category';
import QuestionList from './QuestionList';

function Home() {
  return (
    <Fragment>
      <ToggleQuestion/>
      <QuestionList/>
    </Fragment>
  );
}

export default Home;