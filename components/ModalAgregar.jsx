import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ModalAgregar( {show, handleClose, dataModal} ) {


  return (
    <>
      <Modal centered size="sm" show={show} onHide={handleClose}>
        <Modal.Header style={{justifyContent: "center"}}>
          <Modal.Title><p className='text-end' style={{fontSize:'1rem', color:'lightgrey'}}>Código {dataModal.codigo}</p>{dataModal.descripcion}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                placeholder="Ingresar la cantidad"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{justifyContent: "space-between"}}>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

