import { DetailedHTMLProps, Dispatch, HtmlHTMLAttributes, SetStateAction } from "react";
import { ISingleCharacter } from "../../interfaces/SingleCharacter.interfacer";

export interface CardCharacterProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    data: ISingleCharacter;
    setActive : Dispatch<SetStateAction<boolean>>;
    setCurrent: Dispatch<React.SetStateAction<ISingleCharacter | null>>;
}


