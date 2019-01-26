import react, { Component } from 'react';

class FilterObject extends component{
    constructor(){
        super ();

        this.setState = {
            family: [
                {
                    name: 'Kelly',
                    title: 'Mom',
                    hobby: 'hanging with her kids'
                },
                {
                    name: 'Morgan',
                    title: 'Sister',
                    pets: 'Marv and Mila'
                },
                {
                    name: 'Ciara',
                    title: 'Sister',
                    kids: 4,
                },
                {
                    name: 'James',
                    title: 'Sister',
                    hobby: 'soccer'
                },
            ],
            userInput: '',
            filteredFamily: [],
        };    
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    filterFamily(prop){
        var family = this.state.family;
        var filteredFamily = [];

        for(let i=0; i<family.length; i++){
            if(family[i].hasOwnProperty(prop)){
                filteredFamily.push(family[i]);
            }
        }
        this.setState({filteredFamily: filteredFamily});
    }


    render () {
        return (
            <div classname='puzzleBox filterObjectPB'>
            <span className='puzzleText'> Original: {(this.setState.family)}</span>
            <button className='confirmationButton' onClick={ () => this.filterFamily(this.setState.userInput)}> Filter </button>
            <span className='resultsBox filterObjectRB'></span>
            <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)}></input>
            <h4>Filter Object</h4>
            </div>
        )
    }
}

export default FilterObject;