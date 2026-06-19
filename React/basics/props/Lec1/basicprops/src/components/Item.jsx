import "./Item.css"

function Item(props){
    const itemName = 'Nirma'
    return (
        <div className="parent">
            <p className="child">
                {props.name}
            </p>
            <p>
                {props.children}
            </p>
        </div>
    )
}

export default Item;