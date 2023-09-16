
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    return (
        <div>
            <h1 className='p-5 bg-white rounded-md my-2'>{bookmark.title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,

}

export default Bookmark;