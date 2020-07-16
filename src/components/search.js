import React from 'react'

function Search ({ hndinput,search}) {
    return (
        <section className='searchbox-wrap'>
            <input 
				type="text" 
				placeholder="Search for a movie..." 
				className="searchbox" 
				onChange={hndinput}
				onKeyPress={search}
			/>

        </section>
    )
}

export default Search

