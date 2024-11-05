import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const data = [
  {name: 'Alex', salary: 1000, increase: true, id: 1},
  {name: 'Ivan', salary: 2000, increase: false, id: 2},
  {name: 'Irina', salary: 5000, increase: true, id: 3},
  {name: 'Olga', salary: 6000, increase: false, id: 4},
  {name: 'Oleg', salary: 4000, increase: true, id: 5},
]

function App() {
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
