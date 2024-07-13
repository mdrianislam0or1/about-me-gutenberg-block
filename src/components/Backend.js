import { Flex, FlexBlock, FlexItem } from "@wordpress/components";

import React from "react";

export default function Backend() {
  return (
   <div>
     <Flex>
      <FlexItem>
        <p>Code</p>
      </FlexItem>
      <FlexBlock>
        <p>Poetry</p>
      </FlexBlock>
    </Flex>
   </div>
  );
}
