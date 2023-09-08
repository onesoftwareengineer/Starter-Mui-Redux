import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as appActions from '@/store/actions'
import { TestNavigationPane } from '@/components/TestNavigationPane';

function HomeTestPage() {
  const [age, setAge] = useState(10);
  const dispatch = useDispatch();
  const { loremIpsumText } = useSelector((store) => store);

  useEffect(() => {
    dispatch(appActions.getLoremIpsumText());
  }, [dispatch])

  const handleMUISelectChange = (event) => {
    const { value } = event.target;
    setAge(value);
    dispatch(appActions.getLoremIpsumText());
  }

  return (
    <div> 
      <div>
        <h1 >This project uses:</h1>
        <p>React 18</p>
        <p>React Router 6</p>
        <p>Mui 5</p>
        <p>Mui Icons 5</p>
        <p>Redux 4</p>
        <p>Docker</p>
      </div>
      <div>
        <p>Testing Hash Router:</p>
        <TestNavigationPane />
      </div>
      <div>
        <p>Testing Mui Components:</p>
        <p>({MenuItem ? "MUI works!" : "MUI failed!"})</p>
        <div>
          <div><FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              value={age ? age : ""}
              onChange={handleMUISelectChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl></div>
          <p>{age}</p>
        </div>
      </div>
      <div>
        <p>Testing Redux store:</p>
        <p>({loremIpsumText ? "Store works!" : "Store failed!"})</p>
        <p>{loremIpsumText}</p>
      </div>
    </div>
    )
}

export { HomeTestPage }
