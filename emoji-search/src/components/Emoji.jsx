import React, { useEffect, useState } from "react";
import axios from "axios";
import LoaderSpinner from "./LoaderSpinner";

const key = import.meta.env.VITE_ACCESS_KEY;

const Emoji = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchEmojis = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://emoji-api.com/emojis?access_key=${key}`
      );
      setData(res.data);
      setLoading(false);
    };
    fetchEmojis();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async () => {
    if (search !== "") {
      setLoading(true);
      const res = await axios.get(
        `https://emoji-api.com/emojis?search=${search}&access_key=${key}`
      );
      setData(res.data);
      setLoading(false);
    }
  };

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className="App">
      <div className="menu grid place-items-center">
        <div className="menu_text center flex flex-col gap-2">
          <h1 className="text-[3em] tracking-[3px]">Emoji Search</h1>
          <p>A simple Emoji Search using ReactJs</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              className="mt-[3em] px-[0.7em] py-[1em] border-2 rounded-[20px] outline-none w-[30em] h-[5em] hover:shadow -[0 2px 15px rgba(150, 150, 150, 0.55)] "
              value={search}
              onChange={(e) => handleSearch(e)}
            />
            <button
              className="search"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleEnter();
              }}
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        {data.length ? (
          data?.map((e, idx) => (
            <div key={idx} className="card">
              <p className="emo">{e.character}</p>
              <p className="name">{e.unicodeName.slice(5)}</p>
            </div>
          ))
        ) : (
          <div className="not-found-frame">
            <iframe
              src="https://lottie.host/embed/66324f88-e60f-4497-95ed-356cda72dad9/T8kzJDmqCL.json"
              alt="error"
            />
            <h2 className="not-found">Not found!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Emoji;
