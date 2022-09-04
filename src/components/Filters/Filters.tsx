import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import styles from "./Filters.module.css";
import { IFiltersProps } from "./Filters.props";

const Filters = ({
  setStatus,
  setGender,
  setName,
  setType,
  setSpecies,
}: IFiltersProps) => {
  const [statusSelect, setStatusSelect] = useState<string>("");
  const [genderSelect, setGenderSelect] = useState<string>("");
  const [nameInput, setNameInput] = useState<string>("");
  const [typeInput, setTypeInput] = useState<string>("");
  const [speciesInput, setSpeciesInput] = useState<string>("");

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatusSelect(event.target.value as string);
  };

  const handleChangeGender = (event: SelectChangeEvent) => {
    setGenderSelect(event.target.value as string);
  };

  const handleChangeName = (value: string) => {
    setNameInput(value);
  };

  const handleChangeType = (value: string) => {
    setTypeInput(value);
  };

  const handleChangeSpecies = (value: string) => {
    setSpeciesInput(value);
  };

  const clearAllFilters = () => {
    setStatusSelect("");
    setGenderSelect("");
    setNameInput("");
    setTypeInput("");
    setSpeciesInput("");
    setGender("");
    setName("");
    setStatus("");
    setType("");
    setSpecies("");
  };

  return (
    <div className={styles.filters}>
      <div>
        <Button color="error" onClick={() => clearAllFilters()}>
          Clear All
        </Button>
      </div>
      <FormControl>
        <InputLabel>Status</InputLabel>
        <Select
          label="Status"
          onChange={handleChangeStatus}
          value={statusSelect}
        >
          <MenuItem onClick={() => setStatus("alive")} value={10}>
            Alive
          </MenuItem>
          <MenuItem onClick={() => setStatus("dead")} value={20}>
            Dead
          </MenuItem>
          <MenuItem onClick={() => setStatus("unknown")} value={30}>
            Unknown
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Gender</InputLabel>
        <Select
          label="Gender"
          onChange={handleChangeGender}
          value={genderSelect}
        >
          <MenuItem value={10} onClick={() => setGender("female")}>
            Female
          </MenuItem>
          <MenuItem value={20} onClick={() => setGender("male")}>
            Male
          </MenuItem>
          <MenuItem value={30} onClick={() => setGender("genderless")}>
            Genderless
          </MenuItem>
          <MenuItem value={50} onClick={() => setGender("unknown")}>
            Unknown
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Name"
        variant="outlined"
        value={nameInput}
        onChange={(e) => handleChangeName(e.target.value)}
      />
      <div>
        <Button
          size="small"
          variant="contained"
          onClick={() => setName(nameInput)}
        >
          Add
        </Button>
      </div>
      <TextField
        label="Type"
        variant="outlined"
        value={typeInput}
        onChange={(e) => handleChangeType(e.target.value)}
      />
      <div>
        <Button
          size="small"
          variant="contained"
          onClick={() => setType(typeInput)}
        >
          Add
        </Button>
      </div>
      <TextField
        label="Species"
        variant="outlined"
        value={speciesInput}
        onChange={(e) => handleChangeSpecies(e.target.value)}
      />
      <div>
        <Button
          size="small"
          variant="contained"
          onClick={() => setSpecies(speciesInput)}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Filters;
