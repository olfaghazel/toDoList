import { Form, Button } from 'react-bootstrap'

const Add = ({ item, setItem, handleAddItem }) => {
    return (
        <Form.Group className='add'>
            <Form.Control plaintext placeholder="Enter new task" value={item} onChange={(e) => setItem(e.target.value)} />
            <Button onClick={handleAddItem} variant="primary">Add</Button>
        </Form.Group>
    );
}
export default Add;