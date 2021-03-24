const ValidationComponent = ({textLength}) => {
  let style = {padding: '2vh 0 10vh 0'};
  let displayText = textLength > 5 ? "Text length is enough" : "Text too short";

  return <div style={style}>{displayText}</div>;
}

export default ValidationComponent;