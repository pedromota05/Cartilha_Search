import { useState } from "react";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [hasResults, setHasResults] = useState(true); // Inicialmente assumimos que há resultados

  const fetchData = (value) => {
    console.log("Valor da pesquisa:", value);
    fetch("https://api-cartilha-teste-production.up.railway.app/api/capitulos")
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
        setHasResults(results.length > 0); // Atualiza se há resultados ou não
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
        setResults([]); // Define os resultados como vazios em caso de erro
        setHasResults(false); // Não há resultados se houver erro
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
      {!hasResults && <div className="results-list"><p className='result-nulo'>Nenhum resultado encontrado.</p></div>}
    </div>
  );
};
