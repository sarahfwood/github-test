import Link from "next/link";
import Styles from "./Footer.module.css";

const FooterLinks = () => {
  const links = [
    { path: "/about", label: "About" },
    { path: "/privacy", label: "Privacy" },
  ].map((link) => (
    <Link href={link.path} key={link.path}>
      <a className={Styles.link}>{link.label}</a>
    </Link>
  ));

  return <nav aria-label="Footer">{links}</nav>;
};

export default FooterLinks;
