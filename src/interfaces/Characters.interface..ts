import { IPagination } from "./Pagination.interface";
import { ISingleCharacter } from "./SingleCharacter.interfacer";

export interface ICharacters {
    info: IPagination;
    results: ISingleCharacter[]
}