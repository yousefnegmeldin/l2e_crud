import React,{FC} from 'react'

type TypographyProps = {
    title:string
}

const Typography:FC<TypographyProps> = (props) => {
  return (
    <div className='text-6xl'>
        {props.title}
    </div>
  )
}

export default Typography