function Search({search, setSearch}){
    return (
        <div>
            <input value={search} onChange={setSearch}></input>
        </div>
    )
}

export default Search;