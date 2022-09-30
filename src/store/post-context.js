import React, { useCallback, useEffect, useState } from "react";

const PostContext = React.createContext({
  posts: [],
  addedToFav: false,
  onAddToFav: () => {},
});

const DUMMY_POSTS = [
  {
    title: "Shopping today!",
    description:
      "Today i went shopping, because i wanted to buy dress for my halloween party!",
    author: "samantha123",
    isFav: false,
    id: "1",
  },
  {
    title: "That test is stressing me out...",
    description:
      "Help me guys! Tomorrow I have important math test, and i can't concentrate at all! :(",
    author: "Matias190",
    isFav: false,
    id: "2",
  },
  {
    title: "Music makes me lose control",
    description: "This new song is just AMAZING! I dance all day!",
    author: "elisa_na",
    isFav: false,
    id: "3",
  },
  {
    title: "Nice page!",
    description: "Hey im new! I wanted to join you guys!",
    author: "Melisaa3",
    isFav: false,
    id: "4",
  },
];

export const PostContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [addedToFav, setIsAddedToFav] = useState(false);

  useEffect(() => {
    setPosts(DUMMY_POSTS);
  }, []);

  const onAddToFav = (postId) => {
    setIsAddedToFav(true);

    const selectedPost = posts.find((post) => post.id === postId);
    selectedPost.isFav = true;
  };

  const contextValue = {
    posts: posts,
    addedToFav,
    onAddToFav,
  };

  return (
    <PostContext.Provider value={contextValue}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContext;
