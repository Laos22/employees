
import "./app-filter.css";

const AppFilter = (props) => {

    const butonsData = [
        {name: "allEmployees", labe: "Все сотрудники"},
        {name: "onIncrease", labe: "На повышение"},
        {name: "salaryMore1000", labe: "З/П больше 1000$"},
    ];

    const buttons = butonsData.map(({name, labe}) => {
        const active = props.filter === name;
        const clazz = active ? "btn btn-light" : "btn btn-outline-ligh";

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
        </div>
    )
}

export default AppFilter;