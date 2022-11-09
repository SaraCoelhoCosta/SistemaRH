import "./home.css";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";


export default function Home() {

    return (
        <div className="home-tela">
            <div className="sidebar-home">
                <Sidebar />
            </div>
            
            <div className="footer-home">
                <Footer />
            </div>
            
        </div>
        
    );
}