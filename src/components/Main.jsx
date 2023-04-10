import { Platform, Text, View } from "react-native";
import React from "react";
// import Constants from "expo-constants";
import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar";
import { Route, Routes } from "react-router-native";
import SignIn from "./SignIn";
import Login from "../pages/Login";

// Puedo importar diferentes componentes dependiendo de la plataforma, ejm:
// const AppBarTest = Platform.select({
//   ios: () => require("./AppBar").default,
//   default: () => require("./SignIn").default,
// })();

const Main = () => {
  return (
    // Aquí el flex: 1 me ayuda a que pueda hacer el scroll hasta abajo
    <View style={{ flex: 1 }}>
      <AppBar />
      {/* <AppBarTest /> */}
      <Routes>
        <Route exact path="/" Component={RepositoryList} />
        <Route path="/login" Component={Login}></Route>
        <Route path="/sign-in" Component={SignIn}></Route>
        <Route path="/*" Component={RepositoryList} />
      </Routes>
    </View>
  );
};

export default Main;
