import Image from "next/image";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <Image
                src="/images/Logo.svg"
                alt="Logo"
                width="240"
                height="40"
                className="d-inline-block align-text-top"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle product-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link about-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contacts
                  </a>
                </li>
              </ul>
              <span className="navbar-text">
                <button
                  type="button"
                  className="btn btn-success border-0 p-0 get-started-btn"
                >
                  Get Started
                </button>
                <button
                  type="button"
                  class="btn btn-outline-dark p-0 login-btn"
                >
                  Login
                </button>
              </span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
