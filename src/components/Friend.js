import { StarBorder, Star, DeleteOutline } from "@mui/icons-material";
import Card from "./Card";
import classes from './Friend.module.css'
import Name from "./Name";

const Friend = (props) => {
    return (
        <Card className={classes.friend}>
            <Name name={props.friend.name} />
            <div>
                {props.friend.favourite ? <Star onClick={() => props.handleClickFavourite(props.friend)} /> : <StarBorder onClick={() => props.handleClickFavourite(props.friend)} />}
                <DeleteOutline onClick={() => props.handleClickDelete(props.friend)} />
            </div>
        </Card>
    );
};

export default Friend;