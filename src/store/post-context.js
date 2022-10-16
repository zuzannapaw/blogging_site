import React, {useState} from "react";

const PostContext = React.createContext({
  posts: [],
  onManagingFav: () => { },
  onLogin: () => { },
  clickedMore: false,
  onClickMore: () => { },
  currAccount: {},
  onLogout:()=>{},
});


const account1 = {
  owner: "Susan Bones",
  email: "susan@",
  password: "1111111",
  username: "susan1",
  favorites: [],
}

const account2 = {
  owner: "David Penguin",
  email: "david@",
  password: "2222222",
  username: "david2",
  favorites: [],
}

const accounts = [account1, account2];


const DUMMY_POSTS = [
  {
    title: "Shopping today!",
    description:
      "Today i went shopping, because i wanted to buy dress for my halloween party! Can't wait for that day, im really excited. I was thinking about a witch costume with a real black cat. Totally crazy. Let me know what do you think about this idea. Can't wait for halloween this year!!!!",
    author: "samantha123",
    isFav: false,
    id: "1",

  },
  {
    title: "That test is stressing me out...",
    description:
      "Help me guys! Tomorrow I have important math test, and i can't concentrate at all! :( Tomorrow I have important math test, and i can't concentrate at all! :(Tomorrow I have important math test, and i can't concentrate at all! :(Tomorrow I have important math test, and i can't concentrate at all! :(Tomorrow I have important math test, and i can't concentrate at all! :(",
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
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const [currAccount, setCurrAccount] = useState(null);
  const [isLoggedOut,setIsLoggedOut] = useState(false);

  const onLogin = (loginData) => {
    const current = accounts.find(account => loginData.email === account.email && loginData.password === account.password);
    setCurrAccount(current);
    console.log(`Welcome ${current.owner}`);

  };



  const onManagingFav = (postId) => {

    if (currAccount) {

      const updatedPosts = posts.map(post => { return { ...post } });
      const updatedCurrAccount = { ...currAccount };

      const selectedIndex = updatedPosts.findIndex(post => post.id === postId);
      const selectedPost = updatedPosts[selectedIndex];

      if (!selectedPost.isFav) {
        updatedPosts[selectedIndex].isFav = true;

        updatedCurrAccount.favorites.push(selectedPost);

      } else {
        updatedPosts[selectedIndex].isFav = false;
        const indexToRemove = updatedCurrAccount.favorites.findIndex(favPost => favPost.id === postId);
        currAccount.favorites.splice(indexToRemove, 1);

      }
      console.log(currAccount.favorites);
      setCurrAccount(updatedCurrAccount);
      setPosts(updatedPosts);

    }
  };

  const onClickMore = (postId) => {
    const selectedPost = posts.find((post) => post.id === postId);
    selectedPost.moreClicked = !selectedPost.moreClicked;
  };

  const onAddPost =(postData)=>{
    const updatedPosts = posts.map(post => { return { ...post } });
    updatedPosts.unshift(postData);
    setPosts(updatedPosts);

  };

  const onLogout = ()=>{
    setCurrAccount(null);
    setIsLoggedOut(true);
  };

  const loggedOutOkHandler = ()=>{
    setIsLoggedOut(false);
  };

  const loggedOutCancelHandler= ()=>{
    setIsLoggedOut(false);
  };

  const contextValue = {
    posts: posts,
    onLogin,
    onManagingFav,
    onClickMore,
    currAccount,
    onAddPost,
    onLogout,
    isLoggedOut: isLoggedOut,
    loggedOutOkHandler,
    loggedOutCancelHandler,
  };


  return (
    <PostContext.Provider value={contextValue}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContext;
