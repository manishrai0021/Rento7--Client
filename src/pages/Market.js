import React from 'react'
import MarketFeed from '../components/MarketFeed'
import { Link } from 'react-router-dom'

const Market = () => {
    const options = [
        {
            name: "sell",
            img: "💰"
        },
        {
            name: "category",
            img: "📃"
        },
        {
            name: "shipment",
            img: "🚚"
        },
        {
            name: "profile",
            img: "🧑"
        },
    ]
    return (
        <div>
            <div className='flex justify-between text-[32px] font-semibold p-4'>
                <h2>Market</h2>
                <div>🔍</div>
            </div>
            <div className='flex justify-around p-4'>
                {options.map((option) => {
                    return (
                        <Link to={`/${option.name}`} className='w-[60px] h-[60px] rounded-full bg-slate-300 flex justify-center items-center'>{option.img}</Link>
                    )
                })}
            </div>
            <MarketFeed/>
        </div>
    )
}

export default Market