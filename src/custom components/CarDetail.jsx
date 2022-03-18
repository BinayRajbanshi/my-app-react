import React from 'react'
import { useParams } from 'react-router-dom'
import { cars } from '../ShopUs';

export default function CarDetail() {
    let {carID} = useParams();
    let found = cars.find(myfunction => myfunction.id == carID)
  return (
    <div>
      <div className='container mx-auto my-3'>
          <div className='row'>
              <div className='col-4'>
                  <h2>{found.cName}</h2>
                  <img src='https://source.unsplash.com/400x500?racecar' className='img-fluid'/>
                  <strong>{found.price}</strong>
              </div>
              <div className='col-6 align-self-center'>
                  <p>
                      {found.cDetail}
                  </p>
              </div>
          </div>
      </div>
    </div>
  )
}
