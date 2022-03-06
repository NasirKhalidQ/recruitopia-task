import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
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
    await setPerPage(perPage + 7);
    await fetchRepos();
  };

  const [repos, setRepos] = useState([]);
  const [perPage, setPerPage] = useState(8);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchNextPage);

  useEffect(() => {
    fetchRepos();
  }, [perPage]);

  return (
    <div className="flex justify-center pt-20 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="flex flex-col gap-2 border-4 border-black rounded-lg p-4">
        {repos.length === 0 ? (
          <div className=" flex justify-center py-96 px-44">
            <Loading />
          </div>
        ) : (
          <>
            {repos.map((repo, index) => (
              <Repo key={index} repo={repo} />
            ))}
          </>
        )}

        <div className="flex justify-center mt-8">
          {isFetching && <Loading />}
        </div>
      </div>
    </div>
  );
}

export default App;
