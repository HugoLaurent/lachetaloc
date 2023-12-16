import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AccomodationCard from "../components/AccomodationCard/AccomodationCard";

function Card() {
  const { id } = useParams();
  console.log(useParams());

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/public/card/${id}`);
      const data = await response.json();
      console.log("coucou", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <AccomodationCard />
    </div>
  );
}

export default Card;
