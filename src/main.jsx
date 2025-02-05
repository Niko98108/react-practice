import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
  return (
    <>
      <Book />
      <Book />
      <Book />
    </>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Tittle />
      <Author />
    </article>
  );
};

const Tittle = () => <h2>The Let Them Theory</h2>;
const Image = () => (
  <img
    src="./images/image-3.jpg"
    alt="The Let Them Theory"
  />
);
const Author = () => <h2> Mel Robbins</h2>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
