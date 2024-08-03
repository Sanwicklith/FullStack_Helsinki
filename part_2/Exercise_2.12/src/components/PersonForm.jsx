

const PersonForm = ({handleFormChange, handleFormSubmit, person}) => {
  return (
    <div>
          <form onSubmit={(e)=>handleFormSubmit(e)}>
        <div>
          name: <input name="name" onChange={(e)=>handleFormChange(e)} type="text" value={person.name} />
        </div>
        <div>
          number: <input name="number" onChange={(e)=>handleFormChange(e)} type="text" value={person.number} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm