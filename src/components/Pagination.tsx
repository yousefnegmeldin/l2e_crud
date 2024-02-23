import React,{FC} from 'react'

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
  }

  return (
    <div className='flex justify-center items-center gap-4 text-white'>
      <button className='bg-blue-800 rounded-lg p-4 shadow-2xl' onClick={handlePrevClick} >PREV</button>
      <p className='text-black'>{props.page}</p>
      <button className='bg-blue-800 rounded-lg p-4 shadow-xl' onClick={handleNextClick}>NEXT</button>
    </div>
  )
}

export default Pagination