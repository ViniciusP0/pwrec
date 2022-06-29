import App from "./App";
import Button from "./Button";
import "./Plano.css"
function Plano({titulo, preco, usuarios, qnt_projetcs}){
    return(
        <div  className="plano-container">
            <h1 className="plano-titulo">{titulo}</h1>
            <h2 className="plano-preco">{preco}</h2>
            <p className="plano-info">{usuarios}</p>
            <p className="plano-info">{qnt_projetcs}</p>
            <Button/>
        </div>
    );
}
export default Plano;