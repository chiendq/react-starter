import React, { useContext, useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { LanguageContext } from '../../context/LanguageContext';

export default function Test() {
  const color = useContext(LanguageContext);

  console.log(color);

  const [items, setItems] = useState([]);

  const [newTodo, setNewTodo] = useState();

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('todos')));
  }, [items]);

  const handleChecked = (id) => {
    const listItems = items.map((item) => ((item.id === id)
      ? { ...item, checked: !item.checked } : item));
    setItems(listItems);
    localStorage.setItem('todos', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => (item.id !== id));
    setItems(listItems);
    localStorage.setItem('todos', JSON.stringify(listItems));
  };

  const handleTextChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAdd = () => {
    const listItems = JSON.parse(localStorage.getItem('todos'));
    const todo = {
      id: Math.random(),
      item: newTodo,
      checked: false,
    };
    if (listItems) {
      listItems.push(todo);
      localStorage.setItem('todos', JSON.stringify(listItems));
      setItems(listItems);
    } else {
      localStorage.setItem('todos', JSON.stringify([todo]));
      setItems([todo]);
    }
  };

  return (
    <div>
      <div>
        <span>New: </span>
        <input
          type="text"
          placeholder="todo..."
          onChange={handleTextChange}
        />
        <MdOutlineAddCircleOutline
          onClick={handleAdd}
          size={30}
          cursor="pointer"
          color="blue"
        />
      </div>
      {items && items.map((element) => (
        <div key={element.id} className="item">
          <input
            type="checkbox"
            checked={element.checked}
            onChange={() => handleChecked(element.id)}
          />
          <label
            htmlFor="j"
            style={(element.checked) ? { textDecoration: 'line-through' } : null}
            onDoubleClick={() => handleChecked(element.id)}
          >
            {element.item}
          </label>
          <FaTrashAlt
            onClick={() => {
              handleDelete(element.id);
            }}
            role="button"
            color="red"
            size="5%"
          />
        </div>
      ))}
    </div>
  );
}
