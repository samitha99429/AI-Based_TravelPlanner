
import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Input } from '@/components/ui/input'
import { SelectBudgetOptions, SelectTravelList } from '@/constants/options'


const CreateTrip = () => {


   const [place,setPlace] = useState()

  return (
    <div className='sm:px-10 md:px-32 xl:px-56 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferencs!</h2>

<p className='text-gray-500 mt-3 text-xl'>hello plase provide detailes of your trip prefer</p>


<div className='mt-20 flex flex-col gap-10'>
  <div>
    <h2 className='font-medium  text-xl'>
      What is destination of choice? 
      <GooglePlacesAutocomplete
      
      apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
      selectProps={{

        place,
        onChange:(v) => {setPlace(v);console.log(v)}
      }}
      />
    </h2>
  </div>

  <div>
  <h2 className='font-medium  text-xl mt-4 '> How many days are you gonna stay in ?</h2>
<Input  placeholder="Ex.3" type="number"     />
  </div>


  <div>

  <h2 className='font-medium  text-xl mt-4 '> How many people are you traveling with?</h2>
 <div className='grid grid-cols-3 gap-5 mt-5 '>
  {SelectBudgetOptions.map((item, index) =>(
    <div key={index} className='p-4 border rounded-lg cursor-pointer hover:shadow-md' >
       <h2>{item.icon}</h2>
       <h2  className='font-bold text-lg'>{item.title} </h2>
       <h2 className='text-sm text-gray-500'>{item.desc}</h2>

      </div>
  ))}

 </div>
  </div>


  <div>

  <h2 className='font-medium  text-xl mt-4 '> How many people are you traveling with?</h2>
 <div className='grid grid-cols-3 gap-5 mt-5 '>
  {SelectTravelList.map((item, index) =>(
    <div key={index} className='p-4 border rounded-lg cursor-pointer hover:shadow-md' >
       <h2>{item.icon}</h2>
       <h2>{item.People}</h2>
       <h2  className='font-bold text-lg'>{item.title} </h2>
       <h2 className='text-sm text-gray-500'>{item.desc}</h2>

      </div>
  ))}

 </div>
  </div>
</div>





    </div>
  )
}

export default CreateTrip
