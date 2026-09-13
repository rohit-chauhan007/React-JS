import TicketNum1 from "./TicketNum1";
export default function Ticket({ticket}){
    return (
        <div>
           {ticket.map((num,idx)=>{
             return <TicketNum1 num = {num} key={idx} />
           })}
        </div>
    )
}