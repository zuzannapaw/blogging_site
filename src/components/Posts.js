import Post from "./Post";
import { PostsCard, PostsContainer } from "./styles/PostsContainer.styled";

const DUMMY_POSTS = [
  {
    title: "Shopping today!",
    description:
      "Today i went shopping, because i wanted to buy dress for my halloween party!",
    author: "samantha123",
  },
  {
    title: "That test is stressing me out...",
    description:
      "Help me guys! Tomorrow I have important math test, and i can't concentrate at all! :(",
    author: "Matias190",
  },
  {
    title: "Music makes me lose control",
    description: "This new song is just AMAZING! I dance all day!",
    author: "elisa_na",
  },
  {
    title: "Nice page!",
    description: "Hey im new! I wanted to join you guys!",
    author: "Melisaa3",
  },
]

const Posts = () => {
  return (
    <PostsContainer>
      <PostsCard>
        {DUMMY_POSTS.map(post =>{
            return(<Post
            title={post.title}
            description={post.description}
            author={post.author}
          />);
        })}
      </PostsCard>
    </PostsContainer>
  );
};

export default Posts;
