"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type pageProps = {
  params: {
    id: string;
  };
};

const page = ({ params: { id } }: pageProps) => {
  return (
    <>
      <Box>
        <Typography variant="h6" noWrap component="div">
          this is id {id}
        </Typography>
      </Box>
    </>
  );
};

export default page;
