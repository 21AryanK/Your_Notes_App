import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} @Aryan</p>
    </footer>
  );
}

export default Footer;
