import React from 'react'

const Card1 = () => {
  return (
    <>
        <div className="w-[1000px] h-[1000px] bg-slate-400 rounded box-border relative">
            <div className="w-[350px] h-[150px] bg-slate-200 absolute top-[22px] rounded flex">
                <div className="w-[140px] h-[130px] m-[10px] bg-slate-600">
                    <img src="#imageUrl" alt="img" />
                </div>
                <div className="w-[150px] h-[130px] m-[10px] flex flex-col">
                    <div className="w-fit m-1">Name</div>
                    <div className="w-fit m-1">Email</div>
                    <div className="w-fit m-1">contactNumber</div>
                    <div className="w-fit m-1">Address</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card1