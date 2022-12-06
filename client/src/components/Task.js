import { FaTimes } from 'react-icons/fa'

export default function Task  ({ task ,onDelete, onToggle})  {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
      <h3>
        {task.id}{''}
        <FaTimes style={{ color: 'red ', cursor: 'pointer' }}
         onClick={()=>onDelete(task.id)} />
      </h3>
      <p>{task.title}</p>
    </div>
  )
}
