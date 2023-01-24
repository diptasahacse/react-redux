import React, { useReducer } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const SimpleCounterWithUseReducer = () => {
    const initialState = 0;
    const reducer = (state, action)=>{
        // console.log(action)
        if(action.type == 'decrement'){
            return state-action.payload
        }
        else if(action.type == 'increment'){
            return state+action.payload.value
        }

        return state+action.payload.value

    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className='container'>
            <>
            <div>
                <p className='mb-5'>{state}</p>
            <ButtonGroup size="lg" className="mb-2">
                    <Button onClick={()=> dispatch({type: "decrement", payload: {value: 5}})}>-</Button>
                    <Button onClick={()=> dispatch({type: "increment", payload: {value: 5}})}>+</Button>
                </ButtonGroup>
            </div>
                

            </>
        </div>
    )
}

export default SimpleCounterWithUseReducer