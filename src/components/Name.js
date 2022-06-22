import classes from './Name.module.css';

const Name = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p className={classes.name}>is your friend</p>
        </ div>
    );
};

export default Name;