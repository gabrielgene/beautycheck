import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog = ({ profileUrl, open, handleClose }) => (
  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Compartilhar meu perfil</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="profileUrl"
        label="Link do perfil"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Copiar
      </Button>
    </DialogActions>
  </Dialog>
);

export default FormDialog;
