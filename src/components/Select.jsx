import { useId } from "react" 

function Select({
    options,
    label,
    className ='',
    ...props
}, ref) {

    const id = useId()

  return (
    <div className="">
        { label && <label htmlFor={id}></label> }
        <select {...props} id={id} ref={ref} className={`px-3 ${className}`}>
            {options?.map((option)=> (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)