import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateGoal } from '../features/goals/goalSlice'

function GoalUpdateForm({goal}) {
  const [text, setText] = useState('')
  const [goalId, setGoalId] = useState('')
  let goalData={}
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    
    goalData={text:text}
    //console.log(goalData)
    dispatch(updateGoal( {goalId, goalData} ))
    setText('')
  }

  useEffect(()=>{
    setGoalId(goal._id)
    setText(goal.text)  
  }, [])

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Update Goal</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Update Goal
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalUpdateForm
