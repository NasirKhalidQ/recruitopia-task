import axios from "axios";
import { useEffect, useState } from "react";
import Repo from "./Repo";

function App() {
  const axiosIns = axios.create({
    baseURL: "https://api.github.com",
  });

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axiosIns.get("orgs/reactjs/repos?per_page=7").then(({ data }) => {
      setRepos(data);
    });
  }, []);
  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col gap-2 border-4 border-purple-400 rounded-lg p-4">
        {repos.map((repo, index) => (
          <Repo key={index} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default App;
