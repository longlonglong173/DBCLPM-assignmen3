import React, { FC, memo } from "react";

import { Box } from "@material-ui/core";

import CustomMuiTypography from "styles/themes/components/CustomMuiTypography";

const SignInScreen: FC = () => {
  return (
    <>
      <Box mt={3}>
        <Box width={480} mx="auto">
          <CustomMuiTypography variant="h5">Salary Screen</CustomMuiTypography>
        </Box>
      </Box>
    </>
  );
};

export default memo(SignInScreen);
