
import PropTypes from 'prop-types';
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className='p-4 m-4 bg-lime-500 rounded-xl'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;