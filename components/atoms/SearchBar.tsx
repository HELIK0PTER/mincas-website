"use client";
import React from "react";

import { FaSearch } from "react-icons/fa";

import { Input } from "@/components/ui/input";

const SearchBar = () => {
  const [search, setSearch] = React.useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
  };

  return (
    <div
      className={`relative bg-primary rounded-full pr-2 my-1 min-w-44 flex justify-between items-center`}
    >
      <form onSubmit={handleSearch} className={`flex`}>
        <Input
          id={`search`}
          type={`text`}
          placeholder={`Pinot noir, Espumante, etc...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`bg-primary text-clear w-full h-full p-3 rounded-full
                      border-none
                      focus-visible:ring-0
                      focus-visible:ring-offset-0
		                  hover:cursor-text
		                  placeholder:focus:invisible
					            text-sm
                      [&_datalist]:bg-white [&_datalist]:text-primary
					           `}
        />
        <button
          type={`submit`}
          className={`text-clear`}
          disabled={search == ""}
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
