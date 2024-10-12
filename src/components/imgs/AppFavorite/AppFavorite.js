import favorite from '../../../assets/svgs/favorite.svg';
import './AppFavorite.scss';

function AppFavorite({height, width} ) {
    return (
        <img src={favorite} className="AppFavorite-icon" alt="favorite" width={width} height={height}/>
    );
}

export default AppFavorite;
