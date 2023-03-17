import React, { useState } from 'react'
import EditableText from '../GeneralUse/InputFields/EditableText'

const Profile = () => {
  const [a,setA] = useState('starting name')
  return (
    <div>
      <EditableText value={a} handleChange={(value) => setA(value)}/>

    </div>
  )
}

export default Profile