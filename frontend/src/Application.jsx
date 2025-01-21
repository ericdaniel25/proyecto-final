import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import PageFooter from "./components/Footer";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Login from "./components/Login";
import Register from "./components/Register";
import Ticket from "./components/Ticket";
import TicketList from "./components/TicketList";
import TicketView from "./components/TicketView";
import CRUD from "./components/CRUD";
import Boton from "./components/Button";
import SideBar from "./components/SideBar";
import Tarjeta from "./components/Tarjeta";
import Landingpage from "./pages/Landingpage";
import NavBar from "./components/NavBar";
import InicioSesion from "./pages/InicioSesion";


/*
    colors: {
      azul1: "#9CFFE5",
      azul2: "#6C9DFF",
      azul3: "#4491A1",
      azul4: "#074572",
      azul5: "#0B2545",
      azul6: "#00171F",
    }
    */
const Application = () => {
  const styles = {
    background: "bg-gradient-to-tr from-azul4 via-[#52A2AB] to-azul1",
    background_feed:
      "bg-gradient-to-b from-[#EFFFFB] via-[#BFCCC8] to-[#8f9996]",
  };

  return (
    <Flowbite>
      <div
        className={`${styles.background} font-roboto`}
      >
        {/* */}
        <NavBar />
        <Routes>
          <Route path="/" element={<>Inicio</>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/test" element={<Test />} />
          <Route path="/ticketlist" element={<TicketList />} />
          <Route path="/ticketview" element={<TicketView />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/button" element={<Boton />} />
          <Route path="/CRUD" element={<CRUD />} />
          <Route path="/tarjeta" element={<Tarjeta />} />
          <Route path="/landingpage" element={<Landingpage />} /> 
          <Route path="/iniciosesion" element={<InicioSesion />} /> 
          <Route path="/*" element={<>not found</>} />
        </Routes>
        <PageFooter />
      </div>
{/*       <div className="grid place-items-center my-2">
        <DarkThemeToggle />
      </div> */}
    </Flowbite>
  );
};

export default Application;
