import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function AddNotes(props) {
  const validate = () => {
    if (props.note.title.length === 0 || props.note.description.length === 0) {
      alert("Title and Description cannot be empty!");
    } else {
      props.handlePositive(props.note);
    }
  };

  return (
    <>
      <Dialog open={props.dialogState} onClose={props.handleClose}>
        <DialogTitle>{props.dialogTitle}</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            id="title"
            required
            name="title"
            variant="outlined"
            label="Title"
            value={props.note.title}
            onChange={props.onChange}
            type="text"
            fullWidth
          />

          <TextField
            margin="normal"
            id="tag"
            name="tag"
            variant="outlined"
            label="Tag"
            value={props.note.tag}
            onChange={props.onChange}
            type="text"
            fullWidth
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            fullWidth
            required
            name="description"
            value={props.note.description}
            onChange={props.onChange}
            margin="normal"
            multiline
            maxRows={10}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleNegative}>Cancel</Button>
          <Button
            onClick={() => {
              validate();
            }}
            type="submit"
          >
            {props.positiveButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddNotes;
