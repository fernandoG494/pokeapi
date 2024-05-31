import AppContainer from "./layout/AppContainer";

import "./App.css";
import SideSection from "./layout/SideSection";
import ContentSection from "./layout/ContentSection";
import { Divider, Stack } from "@mui/material";

function App() {
  return (
    <div>
      <AppContainer>
        <Stack direction="row">
          <SideSection />
          <Divider orientation="vertical" flexItem />
          <ContentSection />
        </Stack>
      </AppContainer>
    </div>
  );
}

export default App;
