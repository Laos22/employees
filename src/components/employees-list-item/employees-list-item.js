import './employees-list-item.css';



const EmployeesListItem = (props) => {
    
    const {name, salary, onDeleteItem, onToogleProp, rise, increase} = props;

    let clasnameIncrease = "list-group-item d-flex justify-content-between";
    if (increase) clasnameIncrease = clasnameIncrease + " increase";
    if (rise) clasnameIncrease = clasnameIncrease + " like";

    return (
        <li className={clasnameIncrease}>
            <span onClick={onToogleProp} className="list-group-item-label" data-toogle="rise" >{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + " $"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                    onClick={onToogleProp}
                    data-toogle="increase"
                    type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        onClick={onDeleteItem}
                        className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
    
    
}

export default EmployeesListItem;