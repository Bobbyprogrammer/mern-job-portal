import useGetAllJobs from "@/hooks/useGetAllJobs";
import Category from "./Category";
import Footer from "./Footer";
import Hero from "./Hero";
import LatestJobs from "./LatestJobs";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useGetAllJobs();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div>
      <Hero />
      <Category />
      <LatestJobs />
      <Footer />
    </div>
  );
};
export default Home;
