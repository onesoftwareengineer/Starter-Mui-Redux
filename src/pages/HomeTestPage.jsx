import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as appActions from "@/store/actions";
import { TestNavigationPane } from "@/components/TestNavigationPane";

function HomeTestPage() {
  const [age, setAge] = useState(10);
  const dispatch = useDispatch();
  const { loremIpsumText } = useSelector((store) => store);

  useEffect(() => {
    dispatch(appActions.getLoremIpsumText());
  }, [dispatch]);

  const handleMUISelectChange = (event) => {
    const { value } = event.target;
    setAge(value);
    dispatch(appActions.getLoremIpsumText());
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 800,
        mx: "auto",
        display: "grid",
        gap: 5,
      }}
    >
      <div>
        <Typography variant="h3" gutterBottom>
          This project uses:
        </Typography>
        <Typography variant="h5">React 18</Typography>
        <Typography variant="h5">React Router 6</Typography>
        <Typography variant="h5">Mui 5</Typography>
        <Typography variant="h5">Mui Icons 5</Typography>
        <Typography variant="h5">Redux 4</Typography>
        <Typography variant="h5">Docker</Typography>
      </div>
      <div>
        <Typography variant="h4" gutterBottom>
          Testing Hash Router:
        </Typography>
        <TestNavigationPane />
      </div>
      <div>
        <Typography variant="h4" gutterBottom>
          Testing Mui Components:
        </Typography>
        <Typography variant="h6" gutterBottom>
          ({MenuItem ? "MUI works!" : "MUI failed!"})
        </Typography>
        <div>
          <div>
            <FormControl fullWidth>
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
            </FormControl>
          </div>
          <p>{age}</p>
        </div>
      </div>
      <div>
        <Typography variant="h4" gutterBottom>
          Testing Redux store:
        </Typography>
        <Typography variant="h6" gutterBottom>
          ({loremIpsumText ? "Store works!" : "Store failed!"})
        </Typography>
        <Typography variant="body1" gutterBottom>
          {loremIpsumText}
        </Typography>
      </div>
    </Box>
  );
}

export { HomeTestPage };
