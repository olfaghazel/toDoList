import { useState } from 'react';
import './App.css';
import Add from './components/Add';
import Item from './components/Item';

function App() {
  const [list, setList] = useState(
    [
      "Travel with family",
      "Learn how to meditate",
      "Read at list 30 books",
    ]
  )
  const [item, setItem] = useState("");
  const [changedItem, setChangedItem] = useState('')
  const [changedIndex, setChangedIndex] = useState(-1)

  const handleAddItem = () => {
    item && setList([...list, item]);
    setItem("");
  }
  const handleDelete = (index) => {
    console.log("deleteIndex", index)
    setList(list.filter((e, i) => i !== index))
  }

  const saveChange = () => {
    console.log(changedItem, changedIndex)
    setList(list.map((e, i) => i === changedIndex ? changedItem : e))
  }






  return (

    <div className="App">
      <Add item={item} setItem={setItem} handleAddItem={handleAddItem} />

      {list.map((e, i) => <Item key={i} item={e} index={i} handleDelete={handleDelete} saveChange={saveChange} setChangedItem={setChangedItem} setChangedIndex={setChangedIndex} />)}

    </div>
  );
}

export default App;
