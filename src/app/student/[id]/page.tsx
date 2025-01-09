import React from 'react'

const Student = ({params}:{params:{id:string}}) => {
  return (
    <div>
      <h1>student Detail</h1>
      <h3>Name : {params.id}</h3>
    </div>
  )
}

export default Student
