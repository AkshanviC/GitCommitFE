import Header from "./components/header";
import Code from "./components/code";
import useApi from "./hooks/hooks";
import { useParams } from "react-router";
export default function Home() {
  const params = useParams();
  let paramarray = params["*"].split("/");
  const commit = useApi("code", paramarray);

  return (
    <div className="App">
      <Header value={commit} />
      {commit &&
        commit?.files?.map((value, index) => (
          <Code value={value} key={index} index={index} />
        ))}
    </div>
  );
}
