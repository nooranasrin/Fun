const CharComponent = ({char, onClick}) => {
  const style = {
    display: 'inlineBlock',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  };

  return <div style={style} onClick={onClick}>{char}</div>
}

export default CharComponent;