import React, { useEffect, useState } from 'react'

const DataTable = () => {

    const [users, setUsers] = useState([])
    const userData = async() => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            console.log(data);
            setUsers(data)
        } catch (error) {
            console.log(error);   
        }
    }

    // useEffect(() => {
    //     userData()
    // }, []);

  return (
    <>
        <button className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-400 hover:text-black active:bg-blue-800 active:text-white" onClick={userData}>
            Render Data    
        </button>  
        <div>
            <table className="w-[1000px] min-h-min my-3 m-auto bg-slate-500 table-auto border-4 border-black border-separate border-spacing-2 rounded-xl">
                <tr>
                    <th className="border-2 capitalize rounded-md ">User ID</th>
                    <th className="border-2 capitalize rounded-md ">ID</th>
                    <th className="border-2 capitalize rounded-md ">Title</th>
                    <th className="border-2 capitalize rounded-md ">Body</th>
                </tr>
                {
                    users.map( (data)=>{
                        return(
                            <tr>
                                <td className="text-left capitalize border-2 border-slate-400 rounded-sm border-spacing-1">{data.userId}</td>
                                <td className="text-left capitalize border-2 border-slate-400 rounded-sm border-spacing-1">{data.id}</td>
                                <td className="text-left capitalize border-2 border-slate-400 rounded-sm border-spacing-1">{data.title}</td>
                                <td className="text-left capitalize border-2 border-slate-400 rounded-sm border-spacing-1">{data.body}</td>
                            </tr>
                        )
                    })
                }
                
            </table>
        </div>
    </>
  )
}

export default DataTable