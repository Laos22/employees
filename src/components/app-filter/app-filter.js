
import "./app-filter.css";

const AppFilter = (props) => {


    const butonsData = [
        {name: "allEmployees", labe: "Все сотрудники"},
        {name: "onIncrease", labe: "На повышение"},
        {name: "salaryMore1000", labe: "З/П больше 1000$"},
    ];

    // console.log(props.filter)

    const buttons = butonsData.map(({name, labe}) => {

        const active = props.filter === name;

        const clazz = active ? "btn btn-light" : "btn btn-outline-ligh";

        // console.log(active)

        return (
            <button type="button"
                    className={clazz}
                    key={name}
                    onClick={() => props.onfilter(name)}>
                    {labe}
            </button>
        )
    })

    
    
    return (
        <div className="btn-group">
            {buttons}

            {/* <button type="button"
                    className="btn btn-light"
                    name="allEmployees"
                    onClick={(e) => props.onfilter(e.target.name)}>
                    Все сотрудники
            </button>
            <button type="button"
                    className="btn btn-outline-light"
                    name="onIncrease"
                    onClick={(e) => props.onfilter(e.target.name)} >
                    На повышение
            </button>
            <button type="button"
                    className="btn btn-outline-light"
                    name="salaryMore1000"
                    onClick={(e) => props.onfilter(e.target.name)}>
                    З/П больше 1000$
            </button> */}
        </div>
    )
}

export default AppFilter;