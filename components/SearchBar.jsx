import { useState } from "react";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    console.log("Valor da pesquisa:", value);
    fetch("http://localhost:1337/api/capitulos")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados retornados pela API:", data);
        const results = data.data.filter((capitulo) => {
          return (
            value &&
            capitulo.attributes &&
            capitulo.attributes.title &&
            capitulo.attributes.title.toLowerCase().includes(value.toLowerCase())
          );
        });
        console.log("Resultados filtrados:", results);
        setResults(results);
      });
  };  

  const handleChange = (value) => {
    setInput(value);
    fetchData(value.toLowerCase());
  };

  return (
    <div className="input-wrapper">
      <i id="search-icon" className="fas fa-search"></i>
      <input
        className="navbar-input"
        placeholder="Buscar"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
