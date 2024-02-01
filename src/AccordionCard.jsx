import { useState } from "react"


export default function AccordionCard({faqQuestion , faqAnswer ,setcurOpen ,curOpen ,qaID }) {

const isOpen = qaID === curOpen;

    const onOpen = ()=>{
       setcurOpen(isOpen ? null : qaID)
    }


  return (
    <div className='accord' onClick={onOpen}>
       <div className="accord__header">
       <h2>{faqQuestion}</h2>
       <span className="accord__entity">{isOpen ? '-':'+'}</span>
       </div>
      {isOpen &&   <div className="accord_cont">
            {faqAnswer}
        </div>
        }
    </div>
  )
}
