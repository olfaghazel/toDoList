import { Button } from 'react-bootstrap'

const Edit = ({ setShow }) => {

    return (
        <Button className='button' onClick={() => setShow(true)} variant="dark">Edit</Button>
    );
}
export default Edit;