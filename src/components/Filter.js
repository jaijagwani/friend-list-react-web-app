import { StarBorder, Star } from "@mui/icons-material";
import classes from './Filter.module.css';

const Filter = (props) => {
    return (
        <div className={classes.filter}>
            <p>Click star to filter favourites</p>
            {props.filterFavourite ? <Star onClick={props.handleClickFilterFavourite} /> : <StarBorder onClick={props.handleClickFilterFavourite} />}
        </div>
    );
};

export default Filter;