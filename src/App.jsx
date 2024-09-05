import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Card from './Components/Card'

const App = () => {

    const [addweather, setaddweather] = useState([])
    let inputRef = useRef()

    function checkStatus(event) {
        event.preventDefault()
        if (inputRef.current.value === '') {
            alert('Please Enter The City Name')
        }

        async function getData() {
            try {
                const weather = await axios(`https://api.weatherapi.com/v1/current.json?key=e3e98122324b454b92f44333241406&q=${inputRef.current.value}&aqi=no`)
                console.log(weather.data)
                addweather.push({...weather.data})
                setaddweather([...addweather])
                console.log(addweather);
            } catch {
                alert('The City is invalid')
            }
        }
        getData()
        inputRef.current.value = ''
    }

    return (
        <div>
            <h1 className='mt-5 text-4xl font-bold text-white text-center'>Weather App</h1>
            <form onSubmit={checkStatus} className='  justify-center text-center flex mt-5 '>
                <input id='input' className=' w-[325px] border-none px-2 py-3 ' type="text" placeholder='Enter The City' ref={inputRef} /> 
                <button className='py-3 px-7 bg-blue-600 rounded text-white'>Add</button>
            </form>

            <div className='flex justify-center gap-2 flex-wrap mt-3'>
                {addweather.length > 0 && (addweather.map((item,index) => (
                    <div key={index}>
                        <Card location={item.location} condition={item}/>
                    </div>
                )))}
            </div>
        </div>
    )
}

export default App