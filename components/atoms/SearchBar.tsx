'use client'
import React from 'react';

import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
	const [search, setSearch] = React.useState<string>('');

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(search);
		setSearch('');
	}

	return (
		<div className={`relative bg-primary rounded-full pr-2 my-1
		                 min-w-44
		                 flex justify-between items-center`}
		>
			<form onSubmit={handleSearch} className={`flex`}>
				<input
					id={`search`}
					type={`text`}
					placeholder={`Pinot noir, Espumante, etc...`}
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className={`bg-primary text-clear w-full h-full p-3 rounded-full
					           outline-none
		                 hover:cursor-text
		                 placeholder:focus:invisible
					           text-sm
					           `}

				/>
				<button type={`submit`} className={`text-clear`} disabled={search == ''}>
					<FaSearch/>
				</button>
			</form>
		</div>
	);
};

export default SearchBar;