import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Modal from "react-bootstrap/Modal";

const ButtonModal = ({ sesion }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ver Sesion
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles de Sesion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>Fecha: {sesion.fecha}</Container>
          <Container>Motivo: {sesion.motivo} </Container>
          <Container>Evaluacion: {sesion.evaluacion}</Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ButtonModal;
