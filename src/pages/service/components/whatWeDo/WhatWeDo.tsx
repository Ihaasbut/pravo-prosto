import { useRef } from "react";

import Typography from "../../../../components/ui/typography/Typography";
import { useSlideUp } from "../../../../hooks/animation/useSlideUp";
import WhatWeDoFeatures from "./components/whatWeDoFeatures/WhatWeDoFeatures";
import type { WhatWeDoPropsI } from "./WhatWeDo.types";

function WhatWeDo({ data }: WhatWeDoPropsI) {
  const { title, features } = data;
  const containerRef = useRef<HTMLElement>(null);

  useSlideUp(containerRef);

  return (
    <section className="block-margin" ref={containerRef}>
      <Typography variant="h3" as="h3" className="title">
        {title}
      </Typography>
      <WhatWeDoFeatures data={features} />
    </section>
  );
}

export default WhatWeDo;
