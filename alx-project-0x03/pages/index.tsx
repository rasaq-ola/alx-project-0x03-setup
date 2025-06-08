import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Welcome to Splash App</h1>
    </div>
  );
};

export default Home;
