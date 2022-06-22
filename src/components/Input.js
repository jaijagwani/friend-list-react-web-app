import classes from './Input.module.css'


const Input = (props) => {
    return (
        <input className={classes.input} onChange={props.onChange} placeholder="Enter your friend's name..."/>
    );
};

export default Input;