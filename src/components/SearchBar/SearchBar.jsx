import css from './SearchBar.module.css'

const SearchBar = ({ onSearch }) => {    
  return (
  <header className={css.SearchBar}>
  <form onSubmit={onSearch} className={css.SearchBarform}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name='searchInput'
      className={css.SearchBarInput}
    />
    <button type="submit" className={css.SearchBarBtn}>Search</button>
  </form>
</header>)
}    

export default SearchBar