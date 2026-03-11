import Bio from "./Bio";
import Image from "./Image";
import WorkSample from "./WorkSample";

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
      {workData.map((work) => (
        <WorkSample work={work} />
      ))}
      <Image />
      <Bio />
    </div>
  );
}

export default App;
