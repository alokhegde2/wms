import React, { useEffect, useState } from 'react'
import '../styles/MainScreenStyles.css'
import Sun from '../assets/images/sun.png'

function HomeScreen () {
  var [date, setDate] = useState(new Date())

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup () {
      clearInterval(timer)
    }
  })

  return (
    <section className='main_container'>
      {/* Time Section  */}

      <div className='first_container'>
        <div className='timer_container_main'>
          <div className='timer_container'>
            <p className='time_string'>
              {date
                .toLocaleTimeString()
                .split(' ')[0]
                .slice(0, 5)}
            </p>
            <p className='time_string_2'>
              {date.toLocaleTimeString().split(' ')[1]}
            </p>
          </div>
          <p className='date_string'>{date.toDateString()}</p>
        </div>

        {/* Location Section  */}

        <div className='location_container'>
          <p className='current_location'>Moodbidri</p>
          <p className='country_location'>India</p>
        </div>
      </div>
      <div className='second_container'>
        <div className='temp_section'>
          <img src={Sun} alt='sun' srcset='' className='temp_sun_image' />
          <p className='temp_text'>
            42<sup>&deg;</sup>{' '}
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomeScreen
