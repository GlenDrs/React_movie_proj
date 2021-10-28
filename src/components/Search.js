import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<MdSearch className='search-icons'  />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='La note que vous cherchez!'
			/>
		</div>
	);
};

export default Search;
