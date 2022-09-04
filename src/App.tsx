import { Stack, Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import CharactersList from "./components/CharactersList/CharactersList";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import { generateQuery } from "./helpers/Helper";
import { ICharacters } from "./interfaces/Characters.interface.";

function App() {
  const [fetchedData, updateFetchedData] = useState<ICharacters>();
  const [numberOfPage, setPage] = useState<number>(1);
  const [status, setStatus] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get<ICharacters>(
        "https://rickandmortyapi.com/api/character/?" +
          generateQuery({
            page: numberOfPage.toString(),
            status: status,
            gender: gender,
            name: name,
            type: type,
            species: species,
          })
      )
      .then((res) => {
        updateFetchedData(res.data);
        setError(false)
      })
      .catch((err) => {
        err && setError(err);
      });
  }, [numberOfPage, status, gender, name, type, species]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={styles.app}>
      <Header text="Rick&Morty" />
      <div className={styles.container}>
        <div className={styles.filters}>
          <Filters
            setStatus={setStatus}
            setGender={setGender}
            setName={setName}
            setType={setType}
            setSpecies={setSpecies}
          />
        </div>
        <div>
          <div>
            {error ? (
              <div className={styles.error}> Not found </div>
            ) : (
              <CharactersList results={fetchedData?.results} />
            )}
          </div>
          {!error && 
          <div className={styles.pagination}>
            <Stack>
              <Pagination
                count={fetchedData?.info.pages}
                page={numberOfPage}
                onChange={handleChange}
                variant="outlined"
                color="primary"
              />
            </Stack>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
