import './search-panel.css';

const SearchPanel = (props) => {

    const {term, onTerm} = props;

    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={term}
                onChange={(e) => onTerm(e.target.value)}/>
    )
    
}


export default SearchPanel;