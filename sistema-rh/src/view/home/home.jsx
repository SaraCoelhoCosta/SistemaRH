import "./home.css";
import { useNavigate } from "react-router-dom";
import { sair } from "../../controller/userController";
import Sidebar from "../components/sidebar";


export default function Home() {
    const navigate = useNavigate();

    async function enviar(ev) {
        ev.preventDefault();
        await sair().then((res) => {
            if (res) {
                navigate('/');
            }
        });
    };

    return (
        <div className="home-tela">
            <Sidebar />
        </div>
        
    );
}