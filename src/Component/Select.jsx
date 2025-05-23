import React, { forwardRef, useId } from 'react'

const Select = ({
    options,
    label,
    className = "",
    ...props
}, ref) => {
    const id = useId()
  return (
    <div>
      {label && <label htmlFor={id} className=''></label>}
      <select 
      {...props}
      id={id}
      ref={ref}
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 decoration-200 border border-gray-200 w-full ${className}`}
              
      >

      {options?.map((items)=>(
        <option
        key={items}
        value={items}
        id={id}
        ref={ref}
        >{items}</option>
      ))}

      </select>
    </div>
  )
}

export default forwardRef(Select)
