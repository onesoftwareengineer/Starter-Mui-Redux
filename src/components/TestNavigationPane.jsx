import { Button, ButtonGroup } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function TestNavigationPane() {
  const navigate = useNavigate();

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/typography")}>Typography</Button>
      <Button onClick={() => navigate("/components")}>Components</Button>
    </ButtonGroup>
  );
}

export { TestNavigationPane };
