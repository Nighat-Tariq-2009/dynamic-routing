import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div>
      <h1>student list</h1><br/>
      <ul>
        <li><Link href="student/Hunain" >Hunain</Link></li>
        <li><Link href="student/Rija" >Rija</Link></li>
        <li><Link href="student/Faiq" >Faiq</Link></li>
        <li><Link href="student/Saif" >Saif</Link></li>
        <li><Link href="student/Nimra" >Nimra</Link></li>
      </ul>
    </div>
  )
}

export default Page
