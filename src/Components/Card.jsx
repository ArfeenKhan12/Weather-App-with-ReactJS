import React from 'react'

const Card = ({ location, condition }) => {
    return (
        <>
            <div className="max-w-md p-8 mx-auto rounded-lg bg-slate-100 text-gray-800 border shadow-md">
                <div className="flex justify-between space-x-8">
                    <div className="flex flex-col items-center">
                        <img
                            src={condition.current.condition.icon}
                            viewBox="0 0 512 512"
                            className="w-24 h-24 p-2 text-yellow-500 fill-current"
                        >
                        </img>
                        <h1 className="text-xl font-semibold">{location.name}</h1>
                    </div>
                    <span className="font-bold text-8xl">{condition.current.temp_c}</span>
                </div>
            </div>

        </>
    )
}

export default Card