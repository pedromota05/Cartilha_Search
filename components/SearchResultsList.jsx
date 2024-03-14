import Link from 'next/link';
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  const mappedResults = results.map(item => ({
    ...item,
    chapterId: item.id // Supondo que o id seja equivalente ao chapterId
  }));

  return (
    <div className="results-list">
      {mappedResults.map((result, id) => (
        <Link className='result-link' href={`/edicao-completa?activeChapter=${result.chapterId}#capitulo_${result.chapterId}`} key={id} passHref>
          <SearchResult result={result} />
        </Link>
      ))}
    </div>
  );
};