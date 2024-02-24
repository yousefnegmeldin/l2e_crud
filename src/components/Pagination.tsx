import React,{FC} from 'react'
import PaginationButton from './PaginationButton'

type PaginationProps ={
    page:number,
    setPage:React.Dispatch<React.SetStateAction<number>>,
    totalPages:number    
}



const Pagination:FC<PaginationProps> = (props) => {

  const handlePrevClick = () => {
    if (props.page === 1) return;
    props.setPage((prevPage) => prevPage - 1)
    
  }

  const handleNextClick = () => {
    if(props.page === props.totalPages) return;
    props.setPage((prevPage) => prevPage + 1)
    console.log('ypyoyoo')
  }

  return (
    <div className='flex justify-center items-center gap-4 text-white'>
      <div onClick={handlePrevClick}>
      <PaginationButton text="PREV"/>
      </div>
      
      <p className='text-black'>{props.page}</p>
      <div onClick={handleNextClick}>
        <PaginationButton text="NEXT"/>
      </div>
      
    </div>
  )
}

export default Pagination