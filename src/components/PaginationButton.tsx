import React,{FC} from 'react'

type ButtonProps = {
    text:string,
}

const PaginationButton:FC<ButtonProps> = (props) => {
    return (
        <button className='bg-blue-800 rounded-lg p-4 shadow-xl'>{props.text}</button>
    )
}

export default PaginationButton;
