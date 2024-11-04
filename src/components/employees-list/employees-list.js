import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {
    console.dir(data);

    

    return (
        <ul className="app-list list-group">
            <EmployeesListItem name={data[0].name} salary={1000}/>
            <EmployeesListItem name="Fylhtq" salary={5000}/>
            <EmployeesListItem name="JON" salary={5000}/>

        </ul>
    )
}

export default EmployeesList;