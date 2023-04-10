import { Text, StyleSheet } from "react-native";
import React from "react";
import theme from "../theme";

const styles = StyleSheet.create({
  // text: {
  //   fontSize: 12,
  //   color: "grey",
  // },
  // bold: {
  //   fontWeight: "bold",
  // },
  // blue: {
  //   color: "#09f",
  // },
  // big: {
  //   fontSize: 20,
  // },
  // small: {
  //   fontSize: 10,
  // },
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});

export default function StyledText({
  // blue, bold, children, big, small,
  children,
  color,
  fontSize,
  fontWeight,
  align,
  style,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    // blue && styles.blue,
    // bold && styles.bold,
    // big && styles.big,
    // small && styles.small,
    align === "center" && styles.textAlignCenter,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    style,
    restOfProps,
  ];

  return <Text style={textStyles}>{children}</Text>;
}
