import React ,{forwardRef} from 'react'


// we can distruct by {typeof, placeholder , onKeyDown} instead of props
function Input(props , ref) {
    return (
        <div>
            <input {...props} ref={ref}/>
        </div>
    )
}

const forwardInputRef = forwardRef(Input)

export default forwardInputRef
