import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import Modal from 'react-modal';
import GoalUpdateForm from './GoalUpdateForm'

//Modal.setAppElement('#main');

function GoalItem({ goal }) {
  const dispatch = useDispatch()
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const itemClicked=()=>{
    openModal()
  }
  
  return (
    <>

      <div className='goal'>
        <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
        <h2 onClick={itemClicked}>{goal.text}</h2>
        <h2 >{goal.category}</h2>
        <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
          X
        </button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} >
          <GoalUpdateForm goal={goal}/>
      </Modal>

    </>
  )
}

export default GoalItem
