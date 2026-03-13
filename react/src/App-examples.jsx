import Bio from "./Bio";
import Counter from "./Counter";
import Image from "./Image";
import LoadUser from "./LoadUser";
import WorkSample from "./WorkSample";
import "./App.css";

function App() {
  const workData = [
    {
      year: "2018-2022",
      exp: "Bsc in CSE",
      inst: "EWU",
    },
    {
      year: "2023-2026",
      exp: "Bsc in CSE",
      inst: "UIU",
    },
    {
      year: "2026-current",
      exp: "Full Stack Developer",
      inst: "Future tech",
    },
  ];
  return (
    <div>
      <Counter />
      <div className="text-black">
        {" "}
        {workData.map((work, index) => (
          <WorkSample key={index} work={work} />
        ))}
      </div>

      <Image />
      <Bio />
      <LoadUser />
    </div>
  );
}

export default App;
