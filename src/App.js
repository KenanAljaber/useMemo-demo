import { useState } from "react";
import SearchBar from "./components/SearchBar";
import "./styles/index.css"

const emails = [
  {
    id: "email-01",
    title: "Reporte de resultados",
  },
  {
    id: "email-02",
    title: "Requisitos para cambio",
  },
  {
    id: "email-03",
    title: "Estatus de funcionalidad",
  },
  {
    id: "email-04",
    title: "Próximos eventos",
  },
  {
    id: "email-05",
    title: "Participa en la encuesta",
  },
];

const calendar = [
  {
    id: "calendar-01",
    title: "Sesión de seguimiento",
  },
  {
    id: "calendar-02",
    title: "Revisión de propuestas",
  },
  {
    id: "calendar-03",
    title: "Evento para donar juguetes",
  },
  {
    id: "calendar-04",
    title: "Junta semanal de equipo",
  },
  {
    id: "calendar-05",
    title: "Revisión de pendientes con cliente",
  },
];

const people = [
  {
    id: "people-01",
    title: "Juan Perez",
  },
  {
    id: "people-02",
    title: "Marcos Rivas",
  },
  {
    id: "people-03",
    title: "Sergio Martinez",
  },
  {
    id: "people-04",
    title: "Laura Jimenez",
  },
  {
    id: "people-05",
    title: "Horario Martinez",
  },
];

function App() {
  const [selection, setSelection] = useState("all");
  const [items, setItems] = useState([...people, ...emails, ...calendar]);

  function handleClick(e) {
    const current = e.target.name;
    switch (current) {
      case "all":
        setSelection("all");
        setItems([...people, ...emails, ...calendar]);
        break;
      case "people":
        setSelection("people");
        setItems([...people]);
        break;
      case "calender":
        setSelection("calender");
        setItems([ ...calendar]);
        break;
      case "email":
        setSelection("email");
        setItems([ ...emails]);
        break;

    }
  }

  return (
    <div className="App">

      <div className="btnsContainer">
        <button onClick={handleClick} name="people">people</button>
        <button onClick={handleClick} name="calender">calender</button>
        <button onClick={handleClick} name="email">email</button>
        <button onClick={handleClick} name="all">all</button>
      </div>
     <SearchBar items={items} />
    </div>
  );
}

export default App;
