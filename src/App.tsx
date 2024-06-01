import { Divider, Stack } from "@mui/material";

import Router from "./routes/Router";
import SideSection from "./layout/SideSection";
import AppContainer from "./layout/AppContainer";

import "./App.css";

function App() {
  return (
    <div>
      <AppContainer>
        <Stack direction="row">
          <SideSection />
          <Divider orientation="vertical" flexItem />
          <Router />
        </Stack>
      </AppContainer>
    </div>
  );
}

export default App;
