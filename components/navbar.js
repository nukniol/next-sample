import { useRouter } from "next/router";

const menuItems = [
  { route: "/", name: "Home" },
  { route: "/about", name: "About" },
  { route: "/game", name: "Game" },
];

export default function Navbar({ data }) {
  console.log(data);
  const route = useRouter();
  const itemsRender = menuItems.map((item, index) => (
    <li key={index} className={item.route === route.asPath ? "current" : ""}>
      {item.name}
    </li>
  ));
  return (
    <nav>
      <ul>{itemsRender}</ul>
    </nav>
  );
}
