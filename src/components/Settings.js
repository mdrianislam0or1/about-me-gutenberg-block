import {
  InspectorControls,
  useBlockProps,
} from "@wordpress/block-editor";
import { __experimentalInputControl as InputControl } from '@wordpress/components';
import { useState } from 'react';
export default function Settings(props) {
    const [ value, setValue ] = useState( '' );

    console.log(props)
    function enterYourName(e) {
      props.setAttributes({ name: e.target.value });
    }
    console.log(enterYourName)
  
    function updateGrassColor(e) {
      props.setAttributes({ grassColor: e.target.value });
    }

  return (
  <div {...useBlockProps()}>
      <InspectorControls>
   <InputControl
            placeholder="Enter Your Name: "
            value={props.attributes.name}
            onChange={enterYourName}
		/>
    </InspectorControls>
  </div>
  );
}
