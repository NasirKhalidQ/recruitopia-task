const ChevronUp = ({ open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        open ? "rotate-180 transition-all" : ""
      }h-6 w-6 text-purple-500 flex-shrink-0`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );
};

export default ChevronUp;
