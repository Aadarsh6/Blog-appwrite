import { forwardRef, useId } from "react"

const Input = forwardRef(function Input({
    label,
    className = "",
    type = "text",
    ...props
}, ref){
    return (
        <div className="w-full">
            {}
        </div>
    )
})

export default Input
