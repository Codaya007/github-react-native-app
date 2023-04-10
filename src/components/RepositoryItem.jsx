import React from "react";
import { Image, StyleSheet, View } from "react-native";
import theme from "../theme";
import RepositoryStats from "./RepositoryStats";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
  },
  strong: {
    color: "#09f",
    fontWeight: "bold",
    marginBottom: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    overflow: "hidden",
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 4,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      {/* El flex en 1 hace que el contenido ocupe solo el espacio disponible */}
      <View style={{ flex: 1, justifyContent: "center" }}>
        <StyledText fontSize="subheading" fontWeight="bold">
          {fullName}
        </StyledText>
        <StyledText>{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  );
};

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
};

export default RepositoryItem;
