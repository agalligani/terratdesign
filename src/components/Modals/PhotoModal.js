import React from "react";
import { Modal, Button } from "react-bootstrap";

class PhotoModal extends React.Component {

    state = {
        isOpen: false
      };
    
      openModal = () => this.setState({ isOpen: true });
      closeModal = () => this.setState({ isOpen: false });
    
    render() {
      return (
        <React.Fragment>
            <figure className="gallery__item gallery__item--1" onClick={this.openModal}>
                <img src="images/hotel/hotel_006.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
            </figure>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={(this.closeModal)}>
                Close
            </Button>
          </Modal.Footer>
        </Modal>
        </React.Fragment>
      );
    }
  }
  
  export default PhotoModal;