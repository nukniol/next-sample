import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar({ categories }) {
  const route = useRouter();

  const itemsRender = categories.map((item, index) => (
    <Link
      key={index}
      href={item.slug}
      className={route.asPath.includes(item.slug) ? styles.linkActive : ""}
    >
      {item.name}
    </Link>
  ));

  return <div className={styles.navbar}>{itemsRender}</div>;
}
