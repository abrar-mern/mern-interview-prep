import "./Item.css"


function Item(props){
    const itemName = 'Nirma'
    return (
        <div className="parent">
            <p className="child">
                {props.name}
            </p>
        </div>
    )
}

export default Item;