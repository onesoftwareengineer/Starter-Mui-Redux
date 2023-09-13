import { Box } from "@mui/material/index";

import { SelectWithSubcategory, TestNavigationPane } from "@/components/index";
import { Typography } from "@mui/material/index";

function ComponentsPage() {
  return (
    <div>
      <TestNavigationPane />
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          mx: "auto",
          pt: 3,
        }}
      >
        <SelectWithSubcategory />
        <Typography
          variant="overline"
          gutterBottom
          sx={{ color: "primary.light" }}
        >
          Select with Subcategry
        </Typography>
      </Box>
    </div>
  );
}

export { ComponentsPage };
