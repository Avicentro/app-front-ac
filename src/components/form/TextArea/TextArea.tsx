import { FC, useState } from "react";

// Components
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Styles
import { TextAreaWrapper } from "./styles";

// helpers

interface TextAreaProps {
  handleChange?: (e: any) => any;
  value?: any;
  label?: string;
}

const TextArea: FC<TextAreaProps> = ({ handleChange, value, label }) => {
  return (
    <TextAreaWrapper>
      {label && <p className="label">{label}:</p>}
      <ReactQuill theme="snow" value={value} onChange={handleChange} />
    </TextAreaWrapper>
  );
};

export default TextArea;
