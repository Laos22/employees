

import "./app-info.css";

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {props.allEmployees}</h2>
            <h2>Премию получат: {props.increaseEmployees}</h2>
        </div>
    )
}

export default AppInfo;