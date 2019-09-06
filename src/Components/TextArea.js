import React from "react";

class TextArea extends React.Component {
  render() {
    const { value, placeholder } = this.props;
    return (
      //   <button value={value}>{value || "play"}</button>
      <textarea placeholder={placeholder || "Enter Name"} value={value}>
        Hell
      </textarea>
    );
  }
}

TextArea.propTypes = {
  placeholder: String
};

export { TextArea };
