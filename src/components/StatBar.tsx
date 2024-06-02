import { Stack } from "@mui/material";
import { IStatBar } from "../interfaces/StatBar";
import ProgressBar from "@ramonak/react-progress-bar";

const StatBar = ({ statTitle, statNumber }: IStatBar) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <div>{statTitle}:</div>
      <Stack
        alignItems="center"
        className="bar-container"
        direction="row"
        flexGrow={1}
        justifyContent="flex-end"
        spacing={1}
      >
        <span>{statNumber}</span>
        <ProgressBar
          baseBgColor="#bebebe"
          bgColor="red"
          className="progress-line-wrapper"
          completed={statNumber.toString()}
          isLabelVisible={false}
        />
      </Stack>
    </Stack>
  );
};

export default StatBar;
