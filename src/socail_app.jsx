import React, { useContext } from 'react'
import { appcontext } from './context';

function socail_app() {

  let { crtn_user , logout } = useContext(appcontext)
  // console.log(crtn_user);

  return (
    <div className='w-full h-mx py-5 bg-[whitesmoke] select-none'>
      <div className='w-full h-[70px] bg-white shadow-black-50 fixed top-0 left-0 shadow-md flex justify-between items-center px-5'>
        <p className='text-xl  text-black'>welcome Back <span className='text-[#008080] font-bold '> {crtn_user.name} </span> ... </p>
        <button className='bg-[#008080] py-0.5 px-3 rounded-lg text-white font-bold tracking-[1px] cursor-pointer shadow-sm shadow-[#008080] transition-all ease-linear duration-150 active:scale-90' onClick={logout} >log_out</button>
      </div>


    </div>
  )
}

export default socail_app