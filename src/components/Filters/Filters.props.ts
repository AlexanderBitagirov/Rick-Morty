import { Dispatch } from "react";

export interface IFiltersProps {
    setStatus: Dispatch<React.SetStateAction<string>>;
    setGender: Dispatch<React.SetStateAction<string>>;
    setName: Dispatch<React.SetStateAction<string>>;
    setType: Dispatch<React.SetStateAction<string>>;
    setSpecies: Dispatch<React.SetStateAction<string>>;
}