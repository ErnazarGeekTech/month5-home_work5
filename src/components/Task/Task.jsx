import React, { useState } from 'react'
import s from './Task.module.css'
import cross from './cross.png'
import { IoIosColorPalette } from 'react-icons/io'

const Task = ({ value, deleteTask, id, doneTask, isDone }) => {
  const [isColorChanged, setIsColorChanged] = useState(false); 

  const handleColorChange = () => {
    setIsColorChanged(!isColorChanged); 
  }

  return (
    <li className={s.box_task}>
      <label>
        <input type="checkbox"
          className={s.check}
          checked={isDone}
          onClick={() => doneTask(id)}
        />
        <p className={`${isDone ? s.box_task_done : null} ${isColorChanged ? s.color_changed : null}`}>{value}</p>
        {}
      </label>
      <button className={s.cross} onClick={() => deleteTask(id)}>
        <img className={s.img} src={cross} alt="" />
      </button>
      <button
        className={s.color_txt}
        checked={isDone}
        onClick={handleColorChange} 
      >
        <IoIosColorPalette />
      </button>
      <p className={`${isDone ? s.color_txt : null}`}></p>
    </li>
  )
}

export default Task;
