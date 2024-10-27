import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onLoadMore }) => {
    return (
        <button
            type="button"
            className={css.LoadMoreBtn}
            onClick={onLoadMore}            
        >
            Load more
        </button>
    )
}

export default LoadMoreBtn