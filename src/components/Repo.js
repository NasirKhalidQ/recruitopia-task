import { Disclosure } from "@headlessui/react";
import ChevronUp from "../assets/ChevronUp";

export default function Repo({ repo }) {
  return (
    <div className="w-full px-4 pt-2">
      <div className="w-full max-w-md p-2 bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <div className="flex flex-col">
                  <h3>{repo.name}</h3>
                  <h5>{repo.description}</h5>
                </div>
                <ChevronUp open={open} />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 flex divide-y-2 gap-y-1 flex-col pt-4 pb-2 text-sm text-gray-500">
                <p className="pt-1">
                  <span className="font-semibold">Name:</span> {repo.name}
                </p>
                <p className="pt-1">
                  <span className="font-semibold">Description:</span>{" "}
                  {repo.description}
                </p>
                <p className="pt-1">
                  <span className="font-semibold">Number of Stars:</span>{" "}
                  {repo.stargazers_count}
                </p>
                <p className="pt-1">
                  <span className="font-semibold">Number of Forks:</span>{" "}
                  {repo.forks_count}
                </p>
                <p className="pt-1">
                  <span className="font-semibold">Number of Watchers:</span>{" "}
                  {repo.watchers}
                </p>
                <p className="pt-1">
                  <span className="font-semibold">Language:</span>{" "}
                  {repo.language}
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
