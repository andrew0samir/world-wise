import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>world wise</h1>

      <Link to="/app">go to app </Link>
    </div>
  );
}

export default HomePage;
