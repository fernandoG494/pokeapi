import { Stack } from "@mui/material";

import StatBar from "./StatBar";
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
        <StatBar statTitle="HP" statNumber={simplifiedStats["hp"]} />
        <StatBar statTitle="Attack" statNumber={simplifiedStats["attack"]} />
        <StatBar statTitle="Defense" statNumber={simplifiedStats["defense"]} />
        <StatBar
          statTitle="Special-Attack"
          statNumber={simplifiedStats["special-attack"]}
        />
        <StatBar
          statTitle="Special-Defense"
          statNumber={simplifiedStats["special-defense"]}
        />
        <StatBar statTitle="Speed" statNumber={simplifiedStats["speed"]} />
      </Stack>
    </Stack>
  );
};

export default StatsDisplay;
