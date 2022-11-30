import React, { useContext } from 'react'
import Headline from '../components/Headline'
import Services from '../components/Services'
import eraConsult from '../assets/images/bizConsult.jpeg'
import eraTech from '../assets/images/eraTech.jpeg'
import eraTalk from '../assets/images/eraTalk.jpeg'
import Menu from '../components/Menu'
import { AppContext } from '../store/appReducers'

const Portfolio = () => {

  const appCtx = useContext(AppContext)
  return (
    <div className='w-screen  relative  h-full lg:h-screen flex flex-col bg-black  mx-4'>
      {   appCtx.showModal  &&  <Menu/>}
        <Headline title='what i does'/>
        <div className=' w-full mt-4 lg:my-auto m-2 flex flex-col  lg:flex-row items-center justify-around'>
            <Services image={eraConsult} text='Business   Consultation' description='Nunc ultrices interdum rutrum. Etiam semper, neque vitae volutpat bibendum, tellus est vestibulum velit, in volutpat est nibh ac magna. Nunc lobortis ipsum et tellus bibendum, a bibendum lacus efficitur.' />
            <Services image={eraTech} text='HR Technology'  description='Nunc ultrices interdum rutrum. Etiam semper, neque vitae volutpat bibendum, tellus est vestibulum velit, in volutpat est nibh ac magna. Nunc lobortis ipsum et tellus bibendum, a bibendum lacus efficitur.'/>
            <Services image={eraTalk} text='Era Talk'  description='Nunc ultrices interdum rutrum. Etiam semper, neque vitae volutpat bibendum, tellus est vestibulum velit, in volutpat est nibh ac magna. Nunc lobortis ipsum et tellus bibendum, a bibendum lacus efficitur.'/>
        </div>
    </div>
  )
}

export default Portfolio