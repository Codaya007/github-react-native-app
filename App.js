// import { Alert, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";

const client = createApolloClient();

// console.log({ apolloClient });

export default function App() {
  return (
    // <View style={styles.container}>
    //   <TouchableWithoutFeedback
    //     onPress={() => Alert.alert("Hemos tocado el texto!")}>
    //     <Text>Hola Mundo!</Text>
    //   </TouchableWithoutFeedback>
    // </View>

    // <>
    //   <StatusBar style='light' />
    //   <NativeRouter>
    //     <Main />
    //   </NativeRouter>
    // </>

    <ApolloProvider client={client}>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
