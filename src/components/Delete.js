import { Button } from 'react-bootstrap'

const Delete = ({ index, handleDelete }) => {

    return (
        <Button className='button' onClick={() => handleDelete(index)} variant="danger">Delete</Button>
    );
}
export default Delete;