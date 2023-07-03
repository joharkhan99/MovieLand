import React from "react";
import { Text } from "react-native";
import NowPlaying from "../components/NowPlaying";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";
import Upcoming from "../components/Upcoming";

function Movies() {
  return (
    <>
      <NowPlaying />
      <Popular />
      <TopRated />
      <Upcoming />
    </>
  );
}
export default Movies;
