import { TextField } from "@mui/material";

export default function InputText({id, label, name, type, error, value}) {
  return (
    <TextField
        error={error}
        margin="normal"
        required
        fullWidth
        type={type}
        id={id}
        label={label}
        name={name}
        autoFocus
        defaultValue={value}
    />
  )
}
