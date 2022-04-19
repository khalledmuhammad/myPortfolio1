import React from 'react'
import "./Quotes.css"
const quotes = [
  "Always humble while learning , never arrogant while coding",
  "Always learning new technologies , doesn't matter how hard it seems in the beginning , eventually i will master it ",
  "Relax, every problem have a solution"
]

function Quotes() {
  return (
    <div id="quotes" className='quotes-section'>
        <div className="quotes-inner d-flex flex-column">
        <h1 className="quotes-heading" data-aos="fade-in">Quotes</h1>
        <span className="quotes-sub text-capitalize" data-aos="fade-out">my derived quotes</span></div>
        <div className='row mx-5 ' style={{height:"60%"}} >
          {
            quotes.map(quotes=>{
              return <div data-aos="fade-in" className='col-lg-4 col-md-6 col-sm-12   d-flex justify-content-center align-items-center' >
                <span className='card shadow quotes-card d-flex flex-column '>
                  {quotes}

                </span>
              </div>
            })
          }
        </div>

    </div>
  )
}

export default Quotes