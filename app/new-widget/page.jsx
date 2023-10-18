import dynamic from "next/dynamic";

const Graph = dynamic(
  () => import('@components/GraphG6'),
  { ssr: false }
)

import Pipeline from "@components/Pipeline";


function NewWidget() {
    return (
      <div>
        <Pipeline />
        <Graph />
      </div>
    );
}
  
export default NewWidget;