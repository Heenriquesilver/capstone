import DirectoryComponent from "../../components/directory/directory";
import { Outlet } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Bonés/Tocas",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Casual",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Tênis",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Feminino",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Masculino",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
    {
      id: 6,
      title: "Bebezinhos",
      imageUrl:
        "https://www.gestacaobebe.com.br/wp-content/uploads/2013/06/bebe-engatinhando.jpg",
    },
  ];

  return (
    <div>
      <DirectoryComponent categories={categories} />;
    </div>
  );
};

export default Home;
