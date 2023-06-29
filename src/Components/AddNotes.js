import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function AddNotes(props) {
  return (
    <>
      <Dialog open={props.dialogState} onClose={props.handleClose}>
        <DialogTitle>{props.dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.dialogTitleContent}</DialogContentText>

          <TextField
            autoFocus
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
            autoFocus
            margin="normal"
            id="tags"
            variant="outlined"
            label="Tags"
            name="tag"
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
          <Button onClick={props.handlePositive}>
            {props.positiveButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddNotes;
