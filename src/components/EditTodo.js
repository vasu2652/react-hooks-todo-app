import React, { useState, useContext } from "react";
import Store from "../context";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Box, IconButton, TextField } from "@material-ui/core";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  console.log("Hey Stupid, Your poking me");
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Edit Todo</h2>
            <Box container spacing={0} display="flex" justifyContent="center">
                <Box item xs={12} sm={10} flexGrow={2}>
                    <br/>
                    <TextField
                    fullWidth
                    id="standart-basic"
                    label="Enter new todo"
                    value={props.curTodoValue}
                    onChange={e => props.setCurTodo(e.target.value)}
                    onKeyUp={e=>{
                      if(e.keyCode=== 13){
                        props.handleEdit()
                      }
                    }}
                    />
                </Box>
                <Box item xs={12} sm={2}>
                    <br />
                    <br />
                    <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={props.handleEdit}
                    >
                    <CheckCircleRoundedIcon color="primary"/>
                    </IconButton>
                </Box>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}