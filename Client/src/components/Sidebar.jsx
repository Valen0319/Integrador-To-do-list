import "./Sidebar.css";

export default function Sidebar() {
  return (
      <body className="layout layout--bg-main layout--text-main">
    <main className="main">
      <nav className="sidebar sidebar--rounded-lg sidebar--shadow-lg">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <a className="sidebar__link" href="#"
              ><i className="fa fa-home"></i> Inicio</a>
          </li>
          <li className="sidebar__section">Usuarios</li>
          <li className="sidebar__item">
            <a className="sidebar__link" href="#"
              ><i className="fa fa-users"></i> Ver usuarios</a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__link" href="#"
              ><i className="fa fa-user-plus"></i> Agregar usuario</a>
          </li>
          <li className="sidebar__section">Tareas</li>
          <li className="sidebar__item">
            <a className="sidebar__link" href="#"
              ><i className="fa fa-list"></i> Ver tareas</a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__link" href="#"
              ><i className="fa fa-plus"></i> Nueva tarea</a>
          </li>
        </ul>
      </nav>
    </main>
  </body>
  );
}

