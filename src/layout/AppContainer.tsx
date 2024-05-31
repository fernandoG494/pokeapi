import { IAppContainer } from "../interfaces/Layout";

import "../styles/layout/AppContainer.css";

const AppContainer = ({ children }: IAppContainer) => {
  return <div className="AppContainer-wrapper">{children}</div>;
};

export default AppContainer;
