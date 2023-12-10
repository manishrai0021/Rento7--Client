import React from 'react'
import { useParams } from 'react-router-dom'

const MarketItem = () => {
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
    const id = useParams().id;
    return (
        <div className='flex flex-col sm:flex-row gap-4 p-4 sm:p-16 md:p-24 lg:p-32 lg:gap-12'>
            <div className='bg-slate-100 h-[30vh] flex justify-center items-center p-2 sm:w-[50%]'>
                <div>{items[id].image}</div>
            </div>
            <div className='bg-blue-100 flex flex-col gap-4 text-center p-8 sm:w-[50%]'>
                <div className='flex justify-between'>
                    <h3>{items[id].name}</h3>
                    <p>{items[id].location}</p>
                </div>
                <p>Rs. {items[id].price}</p>
                <p className='text-[14px] italic'>{items[id].desc}</p>
            </div>
            <div></div>
        </div>
    )
}

export default MarketItem