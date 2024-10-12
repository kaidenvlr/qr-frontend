import search from '../../../assets/svgs/search.svg';
import './AppSearch.scss';

function AppSearch({height, width} ) {
    return (
        <img src={search} className="AppSearch-icon" alt="search" width={width} height={height}/>
    );
}

export default AppSearch;
