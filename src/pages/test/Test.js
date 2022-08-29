import React, { useContext, useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { LanguageContext } from '../../context/LanguageContext';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



function AutoComplete({top100Films}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{
        width: 300,}}
      renderInput={(params) => <TextField {...params} variant="outlined" />}
    />
  );
}
export default function Test() {
  const top100Films = [
    { label: "The Shawshank Redemption", id: 1994 },
    { label: "The Godfather", id: 1972 },
    { label: "The Godfather: Part II", id: 1974 },
    { label: "The Dark Knight", id: 2008 },
    { label: "12 Angry Men", id: 1957 },
    { label: "Schindler's List", id: 1993 },
    { label: "Pulp Fiction", id: 1994 },
    { label: "The Lord of the Rings: The Return of the King", id: 2003 },
    { label: "The Good, the Bad and the Ugly", id: 1966 },
    { label: "Fight Club", id: 1999 },
    { label: "The Lord of the Rings: The Fellowship of the Ring", id: 2001 },
    { label: "Star Wars: Episode V - The Empire Strikes Back", id: 1980 },
    { label: "Forrest Gump", id: 1994 },
    { label: "Inception", id: 2010 },
    { label: "The Lord of the Rings: The Two Towers", id: 2002 },
    { label: "One Flew Over the Cuckoo's Nest", id: 1975 },
    { label: "Goodfellas", id: 1990 },
    { label: "The Matrix", id: 1999 },
    { label: "Seven Samurai", id: 1954 },
    { label: "Star Wars: Episode IV - A New Hope", id: 1977 },
    { label: "City of God", id: 2002 },
    { label: "Se7en", id: 1995 },
    { label: "The Silence of the Lambs", id: 1991 },
    { label: "It's a Wonderful Life", id: 1946 },
    { label: "Life Is Beautiful", id: 1997 },
    { label: "The Usual Suspects", id: 1995 },
    { label: "Léon: The Professional", id: 1994 },
    { label: "Spirited Away", id: 2001 },
    { label: "Saving Private Ryan", id: 1998 },
    { label: "Once Upon a Time in the West", id: 1968 },
    { label: "American History X", id: 1998 },
    { label: "Interstellar", id: 2014 },
    { label: "Casablanca", id: 1942 },
    { label: "City Lights", id: 1931 },
    { label: "Psycho", id: 1960 },
    { label: "The Green Mile", id: 1999 },
    { label: "The Intouchables", id: 2011 },
    { label: "Modern Times", id: 1936 },
    { label: "Raiders of the Lost Ark", id: 1981 },
    { label: "Rear Window", id: 1954 },
    { label: "The Pianist", id: 2002 },
    { label: "The Departed", id: 2006 },
    { label: "Terminator 2: Judgment Day", id: 1991 },
    { label: "Back to the Future", id: 1985 },
    { label: "Whiplash", id: 2014 },
    { label: "Gladiator", id: 2000 },
    { label: "Memento", id: 2000 },
    { label: "The Prestige", id: 2006 },
    { label: "The Lion King", id: 1994 },
    { label: "Apocalypse Now", id: 1979 },
    { label: "Alien", id: 1979 },
    { label: "Sunset Boulevard", id: 1950 },
  ];
  // const color = useContext(LanguageContext);
  //
  // console.log(color);
  //
  // const [items, setItems] = useState([]);
  //
  // const [newTodo, setNewTodo] = useState();
  //
  // useEffect(() => {
  //   setItems(JSON.parse(localStorage.getItem('todos')));
  // }, [items]);
  //
  // const handleChecked = (id) => {
  //   const listItems = items.map((item) => ((item.id === id)
  //     ? { ...item, checked: !item.checked } : item));
  //   setItems(listItems);
  //   localStorage.setItem('todos', JSON.stringify(listItems));
  // };
  //
  // const handleDelete = (id) => {
  //   const listItems = items.filter((item) => (item.id !== id));
  //   setItems(listItems);
  //   localStorage.setItem('todos', JSON.stringify(listItems));
  // };
  //
  // const handleTextChange = (e) => {
  //   setNewTodo(e.target.value);
  // };
  //
  // const handleAdd = () => {
  //   const listItems = JSON.parse(localStorage.getItem('todos'));
  //   const todo = {
  //     id: Math.random(),
  //     item: newTodo,
  //     checked: false,
  //   };
  //   if (listItems) {
  //     listItems.push(todo);
  //     localStorage.setItem('todos', JSON.stringify(listItems));
  //     setItems(listItems);
  //   } else {
  //     localStorage.setItem('todos', JSON.stringify([todo]));
  //     setItems([todo]);
  //   }
  // };






  return (
    <div>
      {/*<div>*/}
      {/*  <span>New: </span>*/}
      {/*  <input*/}
      {/*    type="text"*/}
      {/*    placeholder="todo..."*/}
      {/*    onChange={handleTextChange}*/}
      {/*  />*/}
      {/*  <MdOutlineAddCircleOutline*/}
      {/*    onClick={handleAdd}*/}
      {/*    size={30}*/}
      {/*    cursor="pointer"*/}
      {/*    color="blue"*/}
      {/*  />*/}
      {/*</div>*/}
      {/*{items && items.map((element) => (*/}
      {/*  <div key={element.id} className="item">*/}
      {/*    <input*/}
      {/*      type="checkbox"*/}
      {/*      checked={element.checked}*/}
      {/*      onChange={() => handleChecked(element.id)}*/}
      {/*    />*/}
      {/*    <label*/}
      {/*      htmlFor="j"*/}
      {/*      style={(element.checked) ? { textDecoration: 'line-through' } : null}*/}
      {/*      onDoubleClick={() => handleChecked(element.id)}*/}
      {/*    >*/}
      {/*      {element.item}*/}
      {/*    </label>*/}
      {/*    <FaTrashAlt*/}
      {/*      onClick={() => {*/}
      {/*        handleDelete(element.id);*/}
      {/*      }}*/}
      {/*      role="button"*/}
      {/*      color="red"*/}
      {/*      size="5%"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*))}*/}
      <AutoComplete top100Films={top100Films}/>

    </div>

  );
}
