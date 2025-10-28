import { useEffect, useState, useMemo } from "react";
import s from "./NASA.module.scss";
import axios from "axios";

axios.defaults.baseURL = "https://images-api.nasa.gov";

export const NASA = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Moon");
  const [filter, setFilter] = useState("all");
  const [visibleItems, setVisibleItems] = useState(12);
  const itemsPerLoad = 12;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(`/search?q=${searchTerm}`);
        const results = res.data.collection.items.map((item) => {
          const data = item.data[0];
          const link = item.links?.[0]?.href || "https://via.placeholder.com/300x300?text=No+Image";
          return {
            id: data.nasa_id,
            title: data.title,
            media_type: data.media_type,
            image: link,
          };
        });
        setItems(results);
        setVisibleItems(itemsPerLoad);
      } catch (err) {
        console.error("Error fetching NASA data", err);
        setItems([]);
      }
    };

    fetchItems();
  }, [searchTerm]);

  const filteredItems = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((item) => item.media_type === filter);
  }, [items, filter]);

  const paginatedItems = filteredItems.slice(0, visibleItems);

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + itemsPerLoad);
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}> NASA Image Search</h1>

      <div className={s.searchWrapper}>
        <form className={s.searchForm} onSubmit={(e) => e.preventDefault()}>
          <input type="text" className={s.searchInput} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" />
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className={s.searchInput}>
            <option value="all">All</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
        </form>
      </div>

      <div className={s.grid}>
        {paginatedItems.length > 0 ? (
          paginatedItems.map((item) => (
            <div className={s.card} key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className={s.overlay}>
                <span>{item.title}</span>
              </div>
            </div>
          ))
        ) : (
          <p>{"There is nothing :((("}</p>
        )}
      </div>

      {visibleItems < filteredItems.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className={s.loadMoreButton} onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
