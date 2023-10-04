import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSidenav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";



const Home = () => {

    const news = useLoaderData()
    console.log(news)

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className="text-3xl font-poppins font-bold">This is Home</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className=""><LeftSideNav></LeftSideNav></div>
                <div className="md:col-span-2 ">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews} ></NewsCard>)
                    }


                </div>
                <div className=""><RightSideNav ></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;