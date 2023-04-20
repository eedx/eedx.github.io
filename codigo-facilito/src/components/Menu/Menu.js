import MenuItem from "../MenuItem/MenuItem";
import './Menu.css';

export default function Menu() {
  return (
    <header className="menu-wrapper">
      <nav>
        <ul className="menu">
          <MenuItem text="Home" link="/" />
          <MenuItem text="Personajes" link="/personajes" />
          <MenuItem text="Episodios" link="/episodios" />
          <MenuItem text="Lugares" link="/lugares" />
        </ul>
      </nav>
    </header>
    );  
}