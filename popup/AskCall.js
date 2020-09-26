import React, { Component } from 'react';
import TextField  from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './AskCall.css';

export default class AskCall extends Component {
constructor() {
  super();

  this.closeModal = this.closeModal.bind(this);
}
componentDidMount(){
}
closeModal = () => {
  document.getElementById('askCall').classList.add('d-none');
}

render() {
  return (
    <div id="askCall" className="col-12 pl-0 pr-0 d-none">
      <div className="col-12 col-md-7 col-lg-5 mx-auto">
        <i id="closeAskCall" class="far fa-times-circle" onClick={this.closeModal}></i>
        <DialogTitle id="form-dialog-title">Заказать звонок</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Ваш номер телефона"
            type="phone"
            fullWidth
          />
        </DialogContent>
        <Button className="d-flex mx-auto" id="sendNumber" variant="contained">
          Заказать
        </Button>
      </div>
    </div>
 );
 }
}