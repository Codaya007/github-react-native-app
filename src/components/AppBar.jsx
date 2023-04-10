import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    flexDirection: "row",
    // paddingBottom: 10,
    // paddingLeft: 10,
  },
  scroll: {
    paddingBottom: 15,
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});

const AppBarTab = ({ to, children }) => {
  const { pathname } = useLocation();

  const active = pathname === to;
  const textStyles = [styles.text, active && styles.active];
  return (
    <Link to={to}>
      <StyledText fontWeight="bold" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}
      >
        <AppBarTab to={"/"}>Repositories</AppBarTab>
        {/* <AppBarTab to={"/sign-in"}>Sign in</AppBarTab> */}
        <AppBarTab to={"/login"}>Login</AppBarTab>
        {/* <AppBarTab to={"/vivis"}>Vivis</AppBarTab> */}
        {/* <AppBarTab to={"/not-found"}>Not found</AppBarTab> */}
      </ScrollView>
    </View>
  );
};

export default AppBar;
