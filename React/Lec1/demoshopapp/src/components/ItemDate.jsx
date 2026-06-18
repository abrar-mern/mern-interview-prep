import "./ItemDate.css"

function ItemDate(props){
    const day = 20;
    const month = 'October';
    const year = 1998;
 return (
    <div className="mfg-dates">
        <span>{props.day}</span>
        <span>{props.month}</span>
        <span>{props.year}</span>
    </div>
 )
}

export default ItemDate;