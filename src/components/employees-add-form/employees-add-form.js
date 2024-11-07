import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: ""
        }
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    addItem1 =  (e) => {
        e.preventDefault();
        if (this.state.name.length > 3 && this.state.salary > 0) {
            this.props.addItem(this.state.name, this.state.salary);

        }


        // console.log(this.state.name + this.state.salary);

    }




    render() {
        const {name, salary} = this.state;
        // const {addItem} = this.props;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.addItem1} >

                    <input 
                        
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name='name'
                        value={name} 
                        onChange={this.onChangeValue}
                    />

                    <input

                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name='salary'
                        value={salary} 
                        onChange={this.onChangeValue} 
                    />
    
                    <button type="submit" className="btn btn-outline-light">
                                Добавить
                    </button>
                </form>
            </div>
        )
    }
    
}

export default EmployeesAddForm;