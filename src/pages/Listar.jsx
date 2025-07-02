import { useEffect, useState } from "react";
import Header from "../component/Header";
import { fetchRickMorty } from "../service/api";
import CardList from "../component/CardList";
const Home = () => {
    const [datos, setDatos] = useState([])
    useEffect(()=>{
        const datos = fetchRickMorty();
        setDatos(datos)
        console.log(datos);
    })
    return (
        <>
        <Header/>
         <h1>Pagina para listar</h1>
         <CardList data={datos}></CardList>
        </>
    )
}

export default Home;