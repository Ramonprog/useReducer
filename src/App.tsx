import { ChangeEvent, useState } from "react";
import "./App.css";
import { usePeopleList } from "./hook/usePeopleList";

function App() {
  const [list, dispatch] = usePeopleList();
  const [name, setName] = useState("");

  const handleAddButton = () => {
    if (name) {
      dispatch({
        type: "ADD",
        payload: {
          name,
        },
      });
    }
    setName("");
  };

  const handleInputName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={name} onChange={handleInputName} />
      <button onClick={handleAddButton}>Adicionar</button>
      <button
        onClick={() =>
          dispatch({
            type: "ORDER",
          })
        }
      >
        Ordernar
      </button>
      <hr />
      Lista de pessoas:
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() =>
                dispatch({
                  type: "DEL",
                  payload: {
                    id: item.id,
                  },
                })
              }
            >
              [ Deletar]
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
