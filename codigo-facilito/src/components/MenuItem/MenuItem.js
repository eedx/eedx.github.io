import './MenuItem.css';

export default function MenuItem(props) {
  return (
    <li className="menu-item">
      <a href={ props.link }>
        { props.text }
      </a>
    </li>
  );
}