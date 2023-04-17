export interface basicPokemonInformation {
  name: string;
  url: string;
}
//TODO: delete if don't use this
// export interface IResponseAllPokemon {
//   count: number;
//   next: string;
//   previous: string;
//   results: basicPokemonInformation[];
// }
export interface IFetcherParams {
  [k: string]: any;
}
