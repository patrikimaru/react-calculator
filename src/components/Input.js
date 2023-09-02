export const Input = ({type,placeholder, onChange, defaultValue, step}) => 
<input type={type} step={step} placeholder={placeholder} onChange={onChange} defaultValue={defaultValue} required/>;