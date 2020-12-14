import { Button, Modal, Form } from "react-bootstrap";


const EditModal = ({ item, setShow, saveChange, setChangedItem, setChangedIndex, index }) => {
    return (
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Edit</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Control plaintext defaultValue={item} onChange={(e) => { setChangedItem(e.target.value); setChangedIndex(index) }} />
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => setShow(false)} variant="secondary">Close</Button>
                <Button onClick={() => { saveChange(); setShow(false) }} variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>);
}
export default EditModal;