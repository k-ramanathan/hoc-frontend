import Avatar from "../images/avatar.png";

const NavBar = () => {
  const openDrawer = () => {
    let html = document.querySelector("html");
    html.classList.add("layout-menu-expanded");
  }
  return (
    <nav
      className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme navbar-padding"
      id="layout-navbar"
    >
      <div onClick={openDrawer} className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <i className="bx bx-menu bx-sm"></i>
      </div>

      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* User */}
          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <a
              className="nav-link dropdown-toggle hide-arrow"
              href="/"
              data-bs-toggle="dropdown"
            >
              <div className="avatar avatar-online">
                <img
                  src={Avatar}
                  alt="avatar"
                  className="w-px-40 h-auto rounded-circle"
                />
              </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="/">
                  <i className="bx bx-power-off ms-2"></i>
                  <span className="align-middle">Logout</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
