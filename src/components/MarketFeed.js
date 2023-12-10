import React from 'react'
import { Link } from 'react-router-dom'

const MarketFeed = () => {
    const items = [
        {
            id: 1,
            name: "Chair",
            price: 1000,
            image: "🪑",
            location: "KTM",
            desc: "Very Good Table",
        },
        {
            id: 2,
            name: "Bed",
            price: 8000,
            image: "🛏️",
            location: "KTM",
            desc: "Very Good Table",
        },
        {
            id: 3,
            name: "PC",
            price: 80000,
            image: "💻",
            location: "KTM",
            desc: "Very Good Table",
        },
        {
            id: 4,
            name: "Camera",
            price: 40000,
            image: "📹",
            location: "KTM",
            desc: "Very Good Table",
        },
        {
            id: 5,
            name: "Phone",
            price: 30000,
            image: "📱",
            location: "KTM",
            desc: "Very Good Table",
        },
        {
            id: 6,
            name: "Cycle",
            price: 10000,
            image: "🚲",
            location: "KTM",
            desc: "Very Good Table",
        },
    ]
    return (
        <div className='flex flex-col gap-4 p-4 pb-24'>
            <div className='flex justify-between'>
                <h3 className='text-[18px] font-medium'>Latest Items</h3>
                <div>KTM</div>
            </div>
            <div className='grid grid-flow-row grid-cols-2 gap-2'>
                {
                    items.map((item) => {
                        return (
                            <Link to={`/marketitem/${item.id-1}`} className='bg-slate-200 text-[14px] p-2 flex flex-col items-center gap-2 '>
                                <div className='bg-white w-[160px] h-[160px] flex justify-center items-center p-2'>{item.image}</div>
                                <div className='w-full'>
                                    <div className='flex justify-between'>
                                        <h4>{item.name}</h4>
                                        <p>Rs. {item.price}</p>
                                    </div>
                                    <div>{item.location}</div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MarketFeed