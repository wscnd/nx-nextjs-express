import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import { GetServerSideProps } from 'next';
import getConfig from 'next/config';

import type {
  PageProps,
  Pokemon,
  ServerSideProps
} from '@nx-pokemon/shared-types';

import styles from './index.module.css';

export function Index({ pokemon: initialPokemon, q }: PageProps) {
  const [search, setSearch] = useState(q);
  const [pokemon, setPokemon] = useState<Pokemon[]>(initialPokemon);

  useEffect(() => {
    async function fetchData(search: string) {
      const { publicRuntimeConfig } = getConfig();
      console.log('public runtime port', publicRuntimeConfig.PORT);
      console.log('public runtime api', publicRuntimeConfig.API);
      // console.log('port being used:', process.env.PORT);
      // console.log(`api url: ${process.env.API}/`);
      // const response = await fetch(process.env.API + `/search?q=${search}`);
      const response = await fetch(
        publicRuntimeConfig.API + `/search?q=${search}`
      );
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
        {pokemon.map(({ name: { english }, id }) => (
          <li key={id}>{english}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  PageProps,
  ServerSideProps
> = async ({ query }) => {
  let pokemon = [];

  if (query.q) {
    const { serverRuntimeConfig } = getConfig();
    const response = await fetch(
      serverRuntimeConfig.API + `/search?q=${query.q}`
    );
    // const response = await fetch(process.env.API + `/search?q=${query.q}`);
    const data = await response.json();
    pokemon = data;
  }

  return {
    props: {
      pokemon,
      q: (query.q as string) ?? '',
    },
  };
};

export default Index;
