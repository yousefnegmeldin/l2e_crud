import React,{FC} from 'react'

type ButtonProps = {
    text:string,
    handlerFunction:void,
}



const Button:FC<ButtonProps> = (props) => {
    return (
        <button className='bg-blue-800 rounded-lg p-4 shadow-xl' onClick={handlerFunction}>{props.text}</button>
    )
}

export default PaginationButton;
