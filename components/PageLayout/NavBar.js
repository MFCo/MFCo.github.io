import { paddingBase, paddingLarge, navBarActiveLinkUnderline, maxSiteWidth, paddingForPage } from 'styles/vars';
import { Logo, LinkedIn, Github } from 'components/Icons';


const links = [
  { text: 'Home', href: '#home' },
  { text: 'About', href: '#about' }
];

const NavBar = ({ router, href }) => {
  return (
    <header className="navbar">
      <nav>
        <div className="navbar__logo">
          <a className="navbar__logo__link" href="#home" title="Startup Boost - Home">
            <Logo />
            <h3 className="name">ariano Fernández Cocirio</h3>
          </a>
        </div>
        <ul className="navbar__links">
          {links.map(item => (
            <li key={item.text}>
              <a href={item.href} title={item.text}>
                <b>{item.text}</b>
              </a>
            </li>
          ))}
          <li>
            <a href="mailto:marianococirio@gmail.com"><b>Contact</b></a>
          </li>
          <li key="linkedin" className="navbar__icon-link linkedin">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mcocirio/"
              title="Mariano Cocirio - LinkedIn User">
              <LinkedIn />
            </a>
          </li>
          <li key="github" className="navbar__icon-link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MFCo/"
              title="Mariano Cocirio - Github Repo">
              <Github inverted />
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .name{
          display: inline;
          padding-left: 5px;
          font-family: Tahoma;
          padding-botton: 2px;
        }
        .navbar {
          box-sizing: content-box;
          height: 50px;
          padding: ${paddingLarge} 0 ${paddingLarge};
          background-color: black;
          position: sticky;
          top: 0;
        }
        a {
          color: white;
        }
        nav,
        .navbar__logo {
          height: 100%;
        }
        nav {
          position: relative;
          max-width: ${maxSiteWidth};
          margin: 0 auto;
          padding: 0;
        }
        .navbar__logo {
          float: left;
        }
        .navbar__logo__link {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
        .navbar__links {
          float: right;
          list-style: none;
          padding: 0;
          margin: 0;
          margin-top: 10px;
        }
        li {
          display: inline-block;
          height: 38px;
          line-height: 60px;
        }
        li a {
          display: inline-block;
          height: 100%;
          padding: 0 ${paddingLarge};
        }
        .navbar__active-link {
          padding: ${paddingBase} 0;
          border-bottom: 2px solid ${navBarActiveLinkUnderline};
        }
        .navbar__icon-link a {
          padding: 0 ${paddingBase};
        }
        .linkedin{
          padding-right: 10px;
        }
      `}</style>
    </header>
  );
};

export default NavBar;