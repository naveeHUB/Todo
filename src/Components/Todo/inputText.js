import React from 'react'

export default function InputText({ className = "", placeholder = "", type = "", onChange = (e) => { }, value = "",disabled=false}) {
  return (
    <div>
      <input className={className} placeholder={placeholder} type={type} onChange={onChange} value={value} disabled={disabled}/>
    </div>
  )
}
