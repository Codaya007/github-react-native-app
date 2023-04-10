import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

// const useRepositories = () => {
// const [repositories, setRepositories] = useState([]);

// const fetchRepositories = async () => {
//   const repositories = await globalThis.fetch(
//     "http://192.168.16.101:5000/api/repositories"
//   );

//   const json = await repositories.json();

//   // console.log({ json });

//   setRepositories(json?.edges);
// };

// useEffect(() => {
//   fetchRepositories();
// }, []);

// const mappedRepositories = repositories?.length
//   ? repositories.map((edge) => edge.node)
//   : [];

// return { repositories: mappedRepositories };
// }

const useRepositories = () => {
  const { data = null, loading, refetch } = useQuery(GET_REPOSITORIES);

  // Mapeo los datos
  const repositories = data ? data?.repositories?.edges : [];
  const mappedRepositories = repositories.map((edge) => edge.node);

  return {
    repositories: mappedRepositories,
    loading,
    refetch,
  };
};

export default useRepositories;
