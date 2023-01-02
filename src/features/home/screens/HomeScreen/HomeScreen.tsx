import React, { FC, memo } from "react";

import { Box } from "@material-ui/core";

const HomeScreen: FC = () => {
  return (
    <Box width={1024} mx="auto" py={6}>
      Hello world!
    </Box>
  );
};

export default memo(HomeScreen);
