import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

function Confirmation(props) {
  return (
    <Dialog
      open={props.state}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>

      <DialogActions>
        <Button onClick={props.handleClose}>{props.negativeButton}</Button>
        <Button onClick={props.handlePositiveClick} autoFocus>
          {props.positiveButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Confirmation;
