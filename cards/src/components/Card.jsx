import React,{useEffect, useState} from 'react'


const Card = () => {
    const [users, setUsers] = useState([])

    const getuser = async() => {
        try {
            const response = await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
            const data = await response.json()
            console.log(data);
            setUsers(data)
            
        } catch (error) {
            console.log(error);
        }     
        
    }

    // useEffect(() => {
    //     getuser();
    // }, []);

  return (
    <>  
        <button className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-400 hover:text-black active:bg-blue-800 active:text-white" onClick={getuser}>
            Render Data    
        </button>
        <div className="w-[1000px] min-h-min bg-slate-400 rounded box-border flex justify-between flex-wrap m-auto">
        {
            users.map((user)=>{
                return(
                    <div key={user.id}>
                        <div  className="w-[450px] h-[150px] bg-slate-200 top-[22px] rounded flex m-2">
                            <div className="w-[140px] h-[130px] m-[10px] bg-slate-600">
                                <img src={user.imageUrl} alt="img" className="w-fit h-fit" />
                            </div>
                            <div className="w-[150px] h-[130px] m-[10px] flex flex-col">
                                <div className="w-fit m-1">{`${user.firstName} ${user.lastName}`}</div>
                                <div className="w-fit m-1">{user.email}</div>
                                <div className="w-fit m-1">{user.contactNumber}</div>
                                <div className="w-fit m-1">{user.address}</div>
                            </div>
                        </div>
                    </div>
                    
                )
            })
        }
        </div>
    </>
    
  )
}

export default Card