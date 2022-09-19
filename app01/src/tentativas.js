export default  function NumberList(props) {
    const textos = props.textos;
    const listItems = textos.map((textos) =>
      <li>{textos}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  
