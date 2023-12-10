import React from 'react'
import { Link } from 'react-router-dom'

const Followers = () => {
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
    return (
        <div className='px-10 py-4 flex flex-col gap-4'>
            {
                followers.map((follower) => {
                    return (
                        <Link to={`/follower/${follower.id-1}`} className='bg-slate-200 flex justify-between p-4'>
                            <div className='flex gap-4'>
                                {follower.img}
                                <h4>{follower.name}</h4>
                            </div>
                            <button className='bg-blue-700 text-white p-1 rounded-md'>unfollow</button>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Followers