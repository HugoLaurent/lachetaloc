import Hero from "../components/Hero/Hero";
import LatestLoc from "../components/LatestLoc/LatestLoc";

function Home({ logo }) {
  return (
    <>
      <Hero logo={logo} />
      <LatestLoc />
    </>
  );
}

export default Home;
