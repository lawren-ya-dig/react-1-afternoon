import react, { Component } from 'react';

class FilterString extends Component {

    constructer (){
        super();

        this.state = {
            names = ['Ryder', 'Chris', 'Kelly', 'Lidia', 'Jeremy', 'Brandon', 'Hannah'],
            userInput = '',
            filteredArray = [],
        };
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    filteredNames(userInput){
        var names = this.state.names;
        var filteredNames = [];

        for(let i=0; i<names.length; i++){
            if( names[i].includes(userInput) ){
                filteredNames.push(names[i]);
            }
        }
        this.setState = ({filteredNames = filteredNames});
    }



    render () {
        return (
            <div className='puzzleBox filterStringPB'>
            <span className='puzzleText'> Names: {(this.state.names)}</span>
            <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className='confirmationButton' onClick={ () => this.FilterNames(this.state.userInput)}></button>
            <span className='resutsBox filterStringRB'> Filtered Names: {(this.state.filteredNames)}</span>
            <h4> Filter String </h4>
            </div>
        )
    }
}

export default FilterString;