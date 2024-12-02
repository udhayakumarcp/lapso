import "./AppSidebar.css";

function AppSideMenu() {
  return (
    <div className="d-flex flex-column">
      <button className="btn btn-light p-0 app-button ">
        <img src="/images/meta.png" />
      </button>
      <button className="btn btn-link p-0 app-button ">
        <img src="/images/plus.svg" />
      </button>
    </div>
  );
}

export default AppSideMenu;
