import { useEffect, useState } from "react";
import Repo from "../components/Repo";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Loading from "../components/Loading";
import axiosIns from "../helpers";

const MainPage = () => {
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
    if (searchTerm) {
      await searchRepo();
    } else {
      await fetchRepos();
    }
  };

  const searchRepo = async () => {
    await axiosIns
      .get(`search/repositories?q=${searchTerm}&per_page=${perPage}&page=1`)
      .then(({ data }) => {
        setRepos(data.items);
        setIsFetching(false);
      });
  };

  const [repos, setRepos] = useState([]);
  const [perPage, setPerPage] = useState(8);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchNextPage);
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchRepo();
    }
  };

  useEffect(() => {
    if (!searchTerm) {
      fetchRepos();
    }
  }, [perPage]);

  return (
    <div className="flex justify-center pt-20 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="flex flex-col gap-y-6">
        <h1>Open Source React Repositories</h1>
        <div className="flex gap-x-4">
          <input
            className="flex text-black bg-white px-2 py-1 rounded flex-1 outline-none  border-2 border-black"
            type="text"
            value={searchTerm}
            onKeyPress={handleKeyPress}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a repository..."
          />
          <button
            onClick={searchRepo}
            className="flex gap-x-4 place-items-center bg-purple-700 hover:opacity-80 text-white px-4 rounded"
          >
            Search
          </button>
        </div>
        <div className="flex flex-col gap-2 border-4 border-black rounded-lg p-4 overflow-y-scroll">
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
            {isFetching && repos.length !== 0 && <Loading />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
