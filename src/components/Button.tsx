import React,{FC} from 'react'

type ButtonProps = {
    text:string,
    size?:number,
}

const Button:FC<ButtonProps> = (props) => {
    return (
        <button className= "bg-blue-700 p-4 rounded-full text-white">
            {props.text}
        </button>
    )
}

export default Button;