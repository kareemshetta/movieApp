import React from "react";
import ReactDOM from "react-dom";
import Card from "../card/Card";
import classes from "./LogoutModal.module.css";

const Backdrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={() => {
        props.onCancel(false);
      }}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <button className={classes.button} onClick={props.onLogout}>
          LogOut
        </button>
        <button
          className={classes.button}
          onClick={() => {
            props.onCancel(false);
          }}
        >
          Cancel
        </button>
      </footer>
    </Card>
  );
};

export default function LogoutModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCancel={props.onCancel}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onCancel={props.onCancel}
          onLogout={props.onLogout}
          title={props.title}
          message={props.message}
        ></ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
/**
   * <div>
      <div
        className={classes.backdrop}
        onClick={() => {
          props.onCancel(false);
        }}
      />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button className={classes.button} onClick={props.onLogout}>
            LogOut
          </button>
          <button
            className={classes.button}
            onClick={() => {
              props.onCancel(false);
            }}
          >
            Cancel
          </button>
        </footer>
      </Card>
    </div>
   * 
   */
