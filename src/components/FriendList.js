import Filter from "./Filter";
import Card from "./Card";
import Friend from "./Friend";
import classes from './FriendList.module.css'
import Input from "./Input";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Button from './Button';

const FriendList = () => {

    const [filterFavourite, setFilterFavourite] = useState(false);
    const [iterator, setIterator] = useState(0);
    const [tempArr, setTempArr] = useState([]);
    const [searchText, setSearchText] = useState('');

    const dispatch = useDispatch();
    const arrFriends = useSelector(state => state.friends);

    const handleOnChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleClickFilterFavourite = () => {
        setFilterFavourite(prevState => !prevState);
        setIterator(0);
    };

    const handleClickFavourite = (friend) => {
        dispatch(
            { type: 'makeFavourite', payload: friend}
        );
    };

    const handleClickDelete = (friend) => {
        let response = window.confirm('Do you want to delete ' + friend.name + ' from you friend list?');
        if (response) {
            dispatch(
                { type: 'deleteFriend', payload: friend }
            );
        }
    };

    const handleClickAddFriend = () => {
        const newFriend = {name: searchText, favourite: false};
        dispatch(
            { type: 'addFriend', payload: newFriend}
        );

        alert(searchText + ' has been added to your friend list');
    };

    const handleClickNext = () => {
        iterator < (tempArr.length-4) && setIterator(iterator+4);
    };

    const handleClickPrevious = () => {
        iterator > 0 && setIterator(iterator-4);
    };

    useEffect(() => {
        let arr = filterFavourite ? arrFriends.filter( item => item.favourite === true) : arrFriends;
        arr = arr.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
        setTempArr(arr);
    }, [filterFavourite, arrFriends, searchText]);

    return (
        <Card className={classes.friendList}>
            <h1>Friend List</h1>
            <Input onChange={handleOnChange} />
            {(tempArr.length !== 0 || filterFavourite) &&
                <Filter
                    filterFavourite={filterFavourite}
                    handleClickFilterFavourite={handleClickFilterFavourite}
                />}
            {
                tempArr.length === 0 ?
                    (filterFavourite ? <p>No favourite friend found.</p>
                    : <p>No friend found. Click Add Friend to add a friend by this name</p>)
                    :
                    tempArr.slice(iterator, iterator + 4).map(item =>
                        <Friend
                            key={Math.random()}
                            friend={item}
                            handleClickFavourite={handleClickFavourite}
                            handleClickDelete={handleClickDelete}
                        />)
            }
            {tempArr.length !== 0 ?
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: 5 }}>
                    <Button text='Previous' onClick={handleClickPrevious} />
                    <Button text='Next' onClick={handleClickNext} />
                </div> 
                : (!filterFavourite && <Button text='Add Friend' onClick={handleClickAddFriend} />)
            }
        </Card>
    );
};

export default FriendList;