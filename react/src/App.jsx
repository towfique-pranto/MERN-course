import Bio from "./Bio";
import Image from "./Image";
import WorkSample from "./WorkSample";

function App() {
  return (
    <div>
      <Image />
      <Bio />
      <WorkSample year={"2018-2022"} exp={"Bsc in CSE"} inst={"UIU"} />
      <WorkSample year={"2023-2026"} exp={"Bsc in CSE"} inst={"UIU"} />
    </div>
  );
}

export default App;
