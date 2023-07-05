import React from "react";
import { Text } from "react-native";
import NowPlaying from "../components/NowPlaying";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";
import Upcoming from "../components/Upcoming";
import Categories from "../components/Categories";
import Trending from "../components/Trending";

function Movies() {
  return (
    <>
      <Trending />
      <Categories />
      <NowPlaying />
      <Popular />
      <TopRated />
      <Upcoming />
    </>
  );
}
export default Movies;
