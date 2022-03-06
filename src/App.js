import axios from "axios";
import { useEffect, useState } from "react";
import Repo from "./Repo";
import useInfiniteScroll from "./useInfiniteScroll";

function App() {
  const axiosIns = axios.create({
    baseURL: "https://api.github.com",
  });

  const fetchRepos = async () => {
    await axiosIns
      .get(`orgs/reactjs/repos?per_page=${perPage}&page=1`)
      .then(({ data }) => {
        setRepos(data);
        setIsFetching(false);
      });
  };

  const fetchNextPage = async () => {
    await setPerPage(perPage + 7).then(() => {
      fetchRepos();
    });
  };

  const [repos, setRepos] = useState([]);
  const [perPage, setPerPage] = useState(7);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchNextPage);

  useEffect(() => {
    fetchRepos();
  }, [perPage]);

  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col gap-2 border-4 border-purple-400 rounded-lg p-4">
        {repos.map((repo, index) => (
          <Repo key={index} repo={repo} />
        ))}
        <div className="flex justify-center mt-8">
          <button className=" bg-purple-700 hover:opacity-80 text-white px-12 py-2 rounded">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
