import { __ } from "@wordpress/i18n";
import {
  CheckboxControl,
  RadioControl,
  TextControl,
  ToggleControl,
  SelectControl,
  Panel,
  PanelBody,
  PanelRow,
} from "@wordpress/components";

import {
  Flex,
  FlexBlock,
  FlexItem,
  Button,
  Icon,
  ColorPicker,
} from "@wordpress/components";

import { __experimentalInputControl as InputControl } from "@wordpress/components";
import { useState } from "react";

import {
  RichText,
  InspectorControls,
  useBlockProps,
} from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { name, image, description, tags, counters, clientComment } =
    attributes;

  const enterYourName = (value) => {
    setAttributes({ name: value });
  };

  const enterYourImage = (value) => {
    setAttributes({ image: value });
  };

  const enterYourDescription = (value) => {
    setAttributes({ description: value });
  };

  const enterYourTag = (value, index) => {
    const newTags = [...tags];
    newTags[index] = value;
    setAttributes({ tags: newTags });
  };

  const addTag = () => {
    setAttributes({ tags: [...tags, ""] });
  };

  const removeTag = (index) => {
    const newTags = tags.filter((tag, i) => i !== index);
    setAttributes({ tags: newTags });
  };

  const enterCounterLabel = (value, index) => {
    const newCounters = [...counters];
    newCounters[index].label = value;
    setAttributes({ counters: newCounters });
  };

  const enterClientCommentName = (value, index) => {
    const newClientCommentName = [...clientComment];
    newClientCommentName[index].name = value;
    setAttributes({ clientComment: newClientCommentName });
  };

  const enterCounterPercentage = (value, index) => {
    const newCounters = [...counters];
    newCounters[index].percentage = value;
    setAttributes({ counters: newCounters });
  };

  const enterClientCommentValue = (value, index) => {
    const newClientCommentTitle = [...clientComment];
    newClientCommentTitle[index].title = value;
    setAttributes({ clientComment: newClientCommentTitle });
  };

  const enterClientCommentImage = (value, index) => {
    const newClientCommentImage = [...clientComment];
    newClientCommentImage[index].image = value;
    setAttributes({ clientComment: newClientCommentImage });
  };

  const addCounter = () => {
    setAttributes({ counters: [...counters, { label: "", percentage: "" }] });
  };

  const addClientComment = () => {
    setAttributes({
      clientComment: [...clientComment, { name: "", title: "", image: "" }],
    });
  };

  const removeCounter = (index) => {
    const newCounters = counters.filter((counter, i) => i !== index);
    setAttributes({ counters: newCounters });
  };
  const removeClientComment = (index) => {
    const newClientComment = clientComment.filter((counter, i) => i !== index);
    setAttributes({ clientComment: newClientComment });
  };

  return (
    <div {...useBlockProps()}>
      <h1 style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}} className="">Upload Your All Information</h1>
      <InspectorControls>
        <Panel header="My About Panel">
          <PanelBody title="About Me Plugin Block" initialOpen={true}>
            <PanelRow>
              <InputControl
                placeholder="Enter Your Name"
                value={name}
                onChange={enterYourName}
                label="Enter Your Name"
              />
            </PanelRow>
            <InputControl
              placeholder="Enter Your Description"
              value={description}
              onChange={enterYourDescription}
              label="Enter Your Description"
            />

            <InputControl
              placeholder="Enter Your Image URL"
              value={image}
              onChange={enterYourImage}
              label="Enter Your Image URL:"
            />
            {/* tags */}
            {tags.map((tag, index) => (
              <Flex key={index} align="center">
                <FlexBlock>
                  <TextControl
                    value={tag}
                    onChange={(e) => enterYourTag(e, index)}
                  />
                </FlexBlock>
                <FlexItem>
                  <Button
                    style={{
                      backgroundColor: "pink",
                      color: "white",
                      padding: "4px 3px",
                      fontWeight: "bold",
                      margin: "2px",
                    }}
                    onClick={() => removeTag(index)}
                    icon="no"
                  />
                </FlexItem>
              </Flex>
            ))}

            <Button
              style={{
                backgroundColor: "pink",
                color: "white",
                padding: "4px 3px",
                fontWeight: "bold",
                marginRight: "5px",
              }}
              onClick={addTag}
            >
              Add Tag
            </Button>
            {/* client Feedback */}
            {clientComment.map((client, index) => (
              <Flex key={index} align="center">
                <FlexBlock>
                  <TextControl
                    placeholder="Name"
                    value={client.label}
                    onChange={(value) => enterClientCommentName(value, index)}
                  />
                </FlexBlock>

                <FlexBlock>
                  <TextControl
                    placeholder="title"
                    type="text"
                    value={client.title}
                    onChange={(value) => enterClientCommentValue(value, index)}
                  />
                </FlexBlock>

                <FlexBlock>
                  <TextControl
                    placeholder="Image"
                    type="text"
                    value={client.image}
                    onChange={(value) => enterClientCommentImage(value, index)}
                  />
                </FlexBlock>
                <FlexItem>
                  <Button
                    style={{
                      backgroundColor: "pink",
                      color: "white",
                      padding: "4px 3px",
                      fontWeight: "bold",
                    }}
                    onClick={() => removeClientComment(index)}
                    icon="no"
                  />
                </FlexItem>
              </Flex>
            ))}

            <Button
              style={{
                backgroundColor: "pink",
                color: "white",
                padding: "4px 3px",
                fontWeight: "bold",
                margin: "2px",
              }}
              onClick={addClientComment}
            >
              Add Client Feedback
            </Button>

            {/* counter */}
            {counters.map((counter, index) => (
              <Flex key={index} align="center">
                <FlexBlock>
                  <TextControl
                    placeholder="Label"
                    value={counter.label}
                    onChange={(value) => enterCounterLabel(value, index)}
                  />
                </FlexBlock>

                <FlexBlock>
                  <TextControl
                    placeholder="Percentage"
                    type="number"
                    value={counter.percentage}
                    onChange={(value) => enterCounterPercentage(value, index)}
                  />
                </FlexBlock>
                <FlexItem>
                  <Button
                    style={{
                      backgroundColor: "pink",
                      color: "white",
                      padding: "4px 3px",
                      fontWeight: "bold",
                    }}
                    onClick={() => removeCounter(index)}
                    icon="no"
                  />
                </FlexItem>
              </Flex>
            ))}

            <Button
              style={{
                backgroundColor: "pink",
                color: "white",
                padding: "4px 3px",
                fontWeight: "bold",
                margin: "2px",
              }}
              onClick={addCounter}
            >
              Add Counter Item
            </Button>
          </PanelBody>
        </Panel>
      </InspectorControls>
    </div>
  );
}
