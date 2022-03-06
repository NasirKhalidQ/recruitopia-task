import { Disclosure } from "@headlessui/react";
import ChevronUp from "./ChevronUp";

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
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
