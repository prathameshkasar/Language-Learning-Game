import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

  return (
    <div className = 'container'>
        <h1 className='title text-light'>Language Learning Game</h1>

        <ol>
            <li>Give the answers of the follwing questions.</li>
            {/* <li>You will be asked 10 question one afer another.</li>
            <li>You will be asked 10 question one afer another.</li>
            <li>You will be asked 10 question one afer another.</li>
            <li>You will be asked 10 question one afer another.</li> */}
        </ol>
        <form id='form'>
            <input ref= {inputRef} className="userid" type="text" placeholder='Username*' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>

    </div>
  )
}
