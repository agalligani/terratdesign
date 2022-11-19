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
            <figure className={this.props.className} onClick={this.openModal}>
                <img src={this.props.children.props.src} className="gallery__img" alt={this.props.children.props.alt} />
            </figure>
        <Modal className="modal fade modal-lg" show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.children.props.alt}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <img src={this.props.children.props.src} onClick={this.closeModal} className="modal__img" alt={this.props.children.props.alt} />
          </Modal.Body>
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