import Chart from '../components/Chart.jsx';
import FeaturedInfo from '../components/FeaturedInfo.jsx'
import '../css/page/home.css'
import { userData } from "../dummyData.js";
import WidgetSm from '../components/WidgetSm.jsx';
import WidgetLg from '../components/WidgetLg.jsx';
import Topbar from '../components/Topbar.jsx';
import Sidebar from '../components/AdminSidebar.jsx';
import AdminNavbar from '../components/AdminNavbar/AdminNavbar.jsx';

function Home() {
  return (
    <div className="home">
      <Topbar/>
      <AdminNavbar/>
      <div className="container">
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
      </div>
      
    </div>
  );
}

export default Home;