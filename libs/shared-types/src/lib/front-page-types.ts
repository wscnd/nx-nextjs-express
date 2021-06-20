import { ParsedUrlQuery } from 'querystring';

import { Pokemon } from './shared-types';

export interface PageProps {
  pokemon: Pokemon[];
  q: string;
}

// export interface ServerSideProps extends ParsedUrlQuery {
// }
export type ServerSideProps = ParsedUrlQuery;
