

const Filter = ({filter, handleFilterChange}) => {
  return (
    <div className="filter">
        filter shown with: 
        <input
          name="filter"
          type="text"
          placeholder="Filter names"
          value={filter}
          onChange={(e)=>handleFilterChange(e)}
        />
      </div>
  )
}

export default Filter