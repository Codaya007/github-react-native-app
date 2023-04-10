import { View } from "react-native";
import React from "react";
import StyledText from "./StyledText";

const formatThousands = (value = 0) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

export default function RepositoryStats(props) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText fontWeight="bold">Stars:</StyledText>
        <StyledText align="center">
          {formatThousands(props.stargazersCount)}
        </StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold">Forks:</StyledText>
        <StyledText align="center">
          {formatThousands(props.forksCount)}
        </StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold">Review:</StyledText>
        <StyledText align="center">{props.reviewCount}</StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold">Rating:</StyledText>
        <StyledText align="center">{props.ratingAverage}</StyledText>
      </View>
    </View>
  );
}
