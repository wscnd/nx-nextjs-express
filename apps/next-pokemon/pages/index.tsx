import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import type { Pokemon } from '@nx-pokemon/shared-types';

import styles from './index.module.css';

export function Index() {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchData(search: string) {
      const response = await fetch(process.env.API + `/search?q=${search}`);
      const data = await response.json();
      setPokemon(data);
    }
    fetchData(search);
  }, [search]);

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    []
  );

  return (
    <div className={styles.page}>
      <input type="text" value={search} onChange={onChangeInput} />
      <ul>
        {pokemon.map(({ name: { english } }) => (
          <li>{english}</li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
