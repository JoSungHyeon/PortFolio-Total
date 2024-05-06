import React, { useState } from "react"

const headerNav = [
    {
      title: "intro",
      url: "#intro"
    },
    {
      title: "skill",
      url: "#skill"
    },
    {
      title: "site",
      url: "#site"
    },
    {
      title: "portfolio",
      url: "#port"
    },
    {
      title: "contact",
      url: "#contact"
    }
];

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  }

  return (
    <header id="header" role="banner">
        <div className="header_inner">
            <div className="header_logo">
                <h1>
                    <a href="/">SH<em>vite</em></a>
                </h1>
            </div>
            <nav
              className={`header_nav ${show ? "show" : ""}`}
              role="navigation" aria-label="메인메뉴"
            >
                <ul>
                  {headerNav.map((nav, key) => (
                      <li key={key}>
                        <a href={nav.url}>{nav.title}</a>
                      </li>
                  ))}
                </ul>
            </nav>
            <div
                className="header_nav_mobile"
                id="headerToggle"
                aria-controls="primary-menu"
                aria-expanded={show ? "true" : "false"}
                role="button"
                tabIndex="0"
                onClick={toggleMenu}
            >
            <span></span>
        </div>
        </div>
    </header>
  )
}

export default Header