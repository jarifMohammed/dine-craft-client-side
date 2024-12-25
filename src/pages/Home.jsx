import Banner from "../components/Banner";
import Carousel from "../components/Carousel";

import NewAdded from "../components/NewAdded";
import Testimonials from "../components/Testimonials";
import TopFoods from "../components/TopFoods";

const Home = () => {
  return (
    <div>
      
      <Banner />

     <div className="">
     <TopFoods  />
     </div>

      <div className="mx-auto  flex justify-center p-5">
        <NewAdded />
      </div>

      <div className=" py-10 mt-">
        <div className="max-w-6xl mx-auto px-4">
          <Testimonials />
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
