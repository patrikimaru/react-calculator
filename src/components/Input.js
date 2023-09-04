const Input = (props) => 
  <input 
    type={props.type} 
    step={props.step} 
    placeholder={props.placeholder} 
    defaultValue={props.defaultValue} 
    onChange={props.onChange} 
    required
  />;

export default Input;