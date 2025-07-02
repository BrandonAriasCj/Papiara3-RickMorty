import { useEffect, useState } from "react";
import Header from "../component/Header";
import { fetchRickMorty } from "../service/api";
import CardList from "../component/CardList";
const Home = () => {
    const [datos, setDatos] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const datos = await fetchRickMorty();
            setDatos(datos);
            console.log(datos);
        };
        fetchData();
    }, []);
    return (
        <>
        <Header/>
         <h1 className="text-center">Pagina para listar</h1>
         <div className="px-4 py-4">
            <CardList data={datos}></CardList>
         </div>
        </>
    )
}

export default Home;