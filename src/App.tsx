import React from "react";
import NestedMenu from "./components/NestedMenu";
import { menu } from "./utils/menuModel";
import { Container, Typography } from "@mui/material";

const App: React.FC = () => {
  return (
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Nested Menu Example
        </Typography>
        <NestedMenu items={menu} />
      </Container>
  );
};

export default App;