import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Alex', salary: 1000, increase: true, rise: false, id: 1},
        {name: 'Ivan', salary: 2000, increase: false, rise: true, id: 2},
        {name: 'Irina', salary: 5000, increase: true, rise: false, id: 3},
        {name: 'Olga', salary: 6000, increase: false, rise: false, id: 4},
        {name: 'Oleg', salary: 4000, increase: true, rise: false, id: 5},
      ],
      term: ''
    }
    this.idCount = 6;
  }

  onTerm = (term) => {
      this.setState({
        term: term
      })

    // console.log(this.state.trerm)

  }

  onToogleProp = (id, prop) => {
    this.setState(({data}) => {
      return {
        data: data.map(item => {
          if (item.id === id) {
            return {...item, [prop]: !item[prop]}
          }
          return item;
        })
      }
    })
  }

  onDeleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name: name, 
      salary: salary, 
      increase: false,
      rise: false, 
      id: this.idCount++
    }
    this.setState((state) => ({
      data: [...state.data, newItem]
    }))

  }

  render() {
    const {data, term} = this.state;
    const visibleData = data.filter(item => item.name.indexOf(term) > -1)
    const allEmployees = visibleData.length;
    const increaseEmployees = visibleData.filter(item => item.increase).length;

    return (
      <div className="app">
          <AppInfo allEmployees={allEmployees} increaseEmployees={increaseEmployees}/>
          <div className="search-panel">
              <SearchPanel onTerm={this.onTerm} term={term}/>
              <AppFilter/>
          </div>
          <EmployeesList data={visibleData} onDeleteItem={this.onDeleteItem} onToogleProp={this.onToogleProp}/>
          <EmployeesAddForm addItem={this.addItem}/>
      </div>
    )
  }
}

export default App;
