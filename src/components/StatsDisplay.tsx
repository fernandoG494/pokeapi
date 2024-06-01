import { Stack } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";

import { IStatsDisplay } from "../interfaces/Pokemon";

import "../styles/components/StatsDisplay.css";

const StatsDisplay = ({ data }: IStatsDisplay) => {
  const simplifiedStats = data.stats.reduce(
    (acc: Record<string, number>, item) => {
      acc[item.stat.name] = item.base_stat;
      return acc;
    },
    {}
  );

  return (
    <Stack direction="column" sx={{ width: "100%" }}>
      <Stack direction="column" justifyContent="space-between">
        <Stack direction="row" justifyContent="space-between">
          <div>{"HP:"}</div>
          <Stack
            alignItems="center"
            className="bar-container"
            direction="row"
            flexGrow={1}
            justifyContent="flex-end"
            spacing={1}
          >
            <span>{simplifiedStats["hp"]}</span>
            <ProgressBar
              baseBgColor="#bebebe"
              bgColor="red"
              className="progress-line-wrapper"
              completed={simplifiedStats["hp"].toString()}
              isLabelVisible={false}
            />
          </Stack>
        </Stack>
        {/* Repite para los demás stats */}
        <Stack direction="row" justifyContent="space-between">
          <div>{"Attack:"}</div>
          <Stack
            alignItems="center"
            className="bar-container"
            direction="row"
            flexGrow={1}
            justifyContent="flex-end"
            spacing={1}
          >
            <span>{simplifiedStats["attack"]}</span>
            <ProgressBar
              baseBgColor="#bebebe"
              bgColor="red"
              className="progress-line-wrapper"
              completed={simplifiedStats["attack"].toString()}
              isLabelVisible={false}
            />
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <div>{"Defense:"}</div>
          <Stack
            alignItems="center"
            className="bar-container"
            direction="row"
            flexGrow={1}
            justifyContent="flex-end"
            spacing={1}
          >
            <span>{simplifiedStats["defense"]}</span>
            <ProgressBar
              baseBgColor="#bebebe"
              bgColor="red"
              className="progress-line-wrapper"
              completed={simplifiedStats["defense"].toString()}
              isLabelVisible={false}
            />
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <div>{"Special-Attack:"}</div>
          <Stack
            alignItems="center"
            className="bar-container"
            direction="row"
            flexGrow={1}
            justifyContent="flex-end"
            spacing={1}
          >
            <span>{simplifiedStats["special-attack"]}</span>
            <ProgressBar
              baseBgColor="#bebebe"
              bgColor="red"
              className="progress-line-wrapper"
              completed={simplifiedStats["special-attack"].toString()}
              isLabelVisible={false}
            />
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <div>{"Special-Defense:"}</div>
          <Stack
            alignItems="center"
            className="bar-container"
            direction="row"
            flexGrow={1}
            justifyContent="flex-end"
            spacing={1}
          >
            <span>{simplifiedStats["special-defense"]}</span>
            <ProgressBar
              baseBgColor="#bebebe"
              bgColor="red"
              className="progress-line-wrapper"
              completed={simplifiedStats["special-defense"].toString()}
              isLabelVisible={false}
            />
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <div>{"Speed:"}</div>
          <Stack
            alignItems="center"
            className="bar-container"
            direction="row"
            flexGrow={1}
            justifyContent="flex-end"
            spacing={1}
          >
            <span>{simplifiedStats["speed"]}</span>
            <ProgressBar
              baseBgColor="#bebebe"
              bgColor="red"
              className="progress-line-wrapper"
              completed={simplifiedStats["speed"].toString()}
              isLabelVisible={false}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default StatsDisplay;
