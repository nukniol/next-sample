import Link from "next/link";
import { useRouter } from "next/router";

const menuItems = [
  { route: "/", name: "Home" },
  { route: "/about", name: "About" },
  { route: "/game", name: "Game" },
];

export default function Navbar({ data }) {
  const route = useRouter();
  const itemsRender = menuItems.map((item, index) => (
    <li key={index} className="nav-item">
      <Link href={item.route} className={"nav-link" + (item.route === route.asPath ? " active" : "")}>{item.name}</Link>
    </li>
  ));
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary border-bottom mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">{itemsRender}</ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
