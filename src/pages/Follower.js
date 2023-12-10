import React from 'react'
import { useParams } from 'react-router-dom'

const Follower = () => {
    const followers = [
        {
            id: 1,
            name: "Himesh Rana Magar",
            img: "😲"
        },
        {
            id: 2,
            name: "Dinesh Rana Magar",
            img: "😲"
        },
        {
            id: 3,
            name: "Vinesh Rana Magar",
            img: "😲"
        },
        {
            id: 4,
            name: "Nimesh Rana Magar",
            img: "😲"
        },
    ]
    const id = useParams().id;

    const contents = [
        {
            id: 1,
            name: "Himesh Rana Magar",
            img: "😲"
        },
        {
            id: 2,
            name: "Dinesh Rana Magar",
            img: "😲"
        },
        {
            id: 3,
            name: "Vinesh Rana Magar",
            img: "😲"
        },
        {
            id: 4,
            name: "Nimesh Rana Magar",
            img: "😲"
        },
    ]
  return (
    <div className='px-10 py-4 flex flex-col gap-6'>
        <div className='flex justify-between p-4 bg-slate-100'>
            <div className='bg-blue-200 w-[120px] flex justify-center items-center'>{followers[id].img}</div>
            <div>
                <h4>{followers[id].name}</h4>
                <p>Address</p>
                <p>Number</p>
            </div>
        </div>
        <div className='grid grid-flow-row grid-cols-3 gap-4'>
            {
                contents.map((content)=> {
                    return(
                        <div className='bg-slate-100'>
                            <div>
                                <p>{content.name}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Follower