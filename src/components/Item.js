import { Form } from 'react-bootstrap'
import { useState } from 'react'
import EditModal from './EditModal';
import Delete from './Delete'
import Edit from './Edit'
import MarkAsComplete from './MarkAsComplete';

const Item = ({ item, index, handleDelete, saveChange, setChangedItem, setChangedIndex }) => {
    const [show, setShow] = useState(false);
    const [markButton, setMarkButton] = useState('Complete')
    let [completed, setCompleted] = useState({
        textDecoration: 'none'
    })
    const handleComplete = () => {
        setMarkButton('Undo')
        setCompleted({
            textDecoration: 'line-through'
        })
    }

    const handleUndo = () => {
        setMarkButton('Complete')
        setCompleted({
            textDecoration: 'none'
        })
    }
    return (
        <Form.Group >
            <div className='item'>
                <Form.Control style={completed} plaintext readOnly value={item} />
                <Edit item={item} setShow={setShow} />
                <MarkAsComplete markButton={markButton} handleComplete={handleComplete} handleUndo={handleUndo} />
                <Delete index={index} handleDelete={handleDelete} />
            </div>
            { show && <EditModal item={item} setShow={setShow} saveChange={saveChange} setChangedItem={setChangedItem} setChangedIndex={setChangedIndex} index={index} />}
        </Form.Group>
    );
}
export default Item;