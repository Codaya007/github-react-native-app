import { FlatList, Text } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
// import repositories from "../data/repositories";

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    />
  );
};

export default RepositoryList;
