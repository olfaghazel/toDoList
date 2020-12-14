import { Button } from 'react-bootstrap'

const MarkAsComplete = ({ markButton, handleComplete, handleUndo }) => {
    return (
        markButton === "Complete" ?
            (
                < Button className='button' onClick={handleComplete} variant="success" > Complete</Button >
            ) :
            (
                < Button className='button' onClick={handleUndo} variant="success" > Undo</Button >
            )
    );
}
export default MarkAsComplete;