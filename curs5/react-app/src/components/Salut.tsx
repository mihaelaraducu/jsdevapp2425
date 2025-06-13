// interface SalutInfo{
//     nume?: string;
//     curs?: string; 
// }

type SalutInfo = {
    nume: string;
    curs?: string; 
}
export default function Salut(props:SalutInfo) {
    if(props.curs !== undefined) {
        return(
            <div>Salut {props.nume} esti inscris la cursul de {props.curs}</div>
        )
    }
    else{
        return(
            <div>Salut {props.nume} nu esti inscris la niciun curs</div>
        )
    }
  return (
    <div>Salut {props.nume} {props.curs}</div>   //rfc = react function component
  )
}
