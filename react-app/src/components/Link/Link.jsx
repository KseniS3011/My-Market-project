import './Link.css';

function Link(props) {
  let { text, link} = props;

  return (
    <div className="a">
      <a className="a" target="_blank" rel="noreferrer" href={link}>{text}</a>
    </div>
  );
}

export default Link;
