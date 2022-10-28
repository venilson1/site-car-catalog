import { TextField } from "@mui/material";

export default function InputText({id, label, name}) {
  return (
    <TextField
        margin="normal"
        required
        fullWidth
        id={id}
        label={label}
        name={name}
        autoFocus
    />
  )
}
