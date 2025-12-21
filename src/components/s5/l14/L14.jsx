import { Component } from "react";
import { Wrapper, List, Question, Answer } from "./Style/L14";

export class L14 extends Component {
  state = {
    articles: [],
    openIds: [], 
  };

  async fetchArticles() {
    try {
      const r = await fetch("https://hn.algolia.com/api/v1/search?query=react&hitsPerPage=10");

      if (!r.ok) {
        throw new Error(`Request error: ${r.status}`);
      }
      const data = await r.json();
      this.setState({ articles: data.hits });
    } catch (error) {
      console.log(error.message);
    }
  }

  componentDidMount() {
    this.fetchArticles();
  }

  toggleFAQ = (id) => {
    this.setState((prev) => {
      if (prev.openIds.includes(id)) {
        return { openIds: prev.openIds.filter((openId) => openId !== id) };
      } else {
        return { openIds: [...prev.openIds, id] };
      }
    });
  };

  render() {
    const { articles, openIds } = this.state;

    return (
      <Wrapper>
        <h2 >FAQ по статтям</h2>
        <List>
          {articles.map((article) => {
            const isOpen = openIds.includes(article.objectID);
            return (
              <Question
                key={article.objectID}
                onClick={() => this.toggleFAQ(article.objectID)}
              >
                <h3>{article.title}</h3>
                {isOpen && (
                  <Answer>
                    <p>
                      <a href={article.url} target="_blank" rel="noreferrer">
                        {article.url}
                      </a>
                    </p>
                    <p>
                      <h3>Автор:</h3> {article.author}
                    </p>
                    <p>
                      <h3>Дата:</h3>{" "}
                      {new Date(article.created_at).toLocaleString()}
                    </p>
                  </Answer>
                )}
              </Question>
            );
          })}
        </List>
      </Wrapper>
    );
  }
}
