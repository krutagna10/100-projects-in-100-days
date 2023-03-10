import data from "./data.json";
import React, { useState } from "react";
import EmojiList from "./EmojiList";
import classes from "./EmojiSearch.module.css";

const EmojiSearch = () => {
  const [emojis, setEmojis] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.keywords.includes(searchTerm.toLowerCase())
  );

  return (
    <div className={classes["emoji-search"]}>
      <h1>Emoji Search</h1>
      <input
        className={classes["emoji-search__input"]}
        onChange={handleSearchTermChange}
        type="text"
        placeholder="Search..."
      />
      <EmojiList emojis={filteredEmojis} />
    </div>
  );
};

export default EmojiSearch;
