export interface ILocation {
    name: string;
    url: string;
}


export interface ISingleCharacter {
    id: number;
    name: string;
    status: string;
    species: string
    type: string;
    gender: string;
    origin: ILocation;
    location: ILocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}