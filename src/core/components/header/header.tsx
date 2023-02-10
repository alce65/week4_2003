import { useContext } from "react";
import logo from "./logo.svg";
import { AppContext } from "../../context/app.context";

type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  const { tasks } = useContext(AppContext);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React (Tareas: {tasks.length})
      </a>
      {children}
    </header>
  );
}
