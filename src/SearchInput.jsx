
function SearchInput({onChange}) {
    console.log('render SearchInput')

  return (
    <>
      <input type='text' placeholder='Поиск...'
      onChange={(e)=> onChange(e.target.value)}/>
    </>
  );
}

export default SearchInput;