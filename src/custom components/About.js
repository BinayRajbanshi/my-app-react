import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react/cjs/react.development'


function About() {
  
  const [users , setusers] = useState([])

  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((resp)=>{
          setusers(resp.data);
      })
  },[])
  
  
    return (
    <div>
           <div className='container'>
               <>
       {users && users.map((ohKey)=>
       (
                   <div className='row'>
                        <div className='col-4'>
                             {ohKey.username}
                         </div>
                        <div className="col-2">
                            {ohKey.address.suite}
                        </div>
                    </div>
            )
     )}
                   </>   
              </div>
    </div>
  )
}

export default About
