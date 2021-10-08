import { Box, Tab, Tabs } from '@mui/material';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ANSWERED, setCategory, UNANSWERED } from '../actions/category';

function Category() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(UNANSWERED);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(setCategory(newValue));
  };

  return (
    <Fragment>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Unanswered" value={UNANSWERED}/>
          <Tab label="Answered" value={ANSWERED}/>
        </Tabs>
      </Box>
    </Fragment>
  );
}

export default Category;