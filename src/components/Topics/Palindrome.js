import react, { Component } from 'react';

class Palindrome extends Component {
    
    constructor (){
        super();

        this.state = {
        userInput = [],
        palindrome = '',
        }
    }
    
    handleChange(val){
        this.setState({userInput: val});
    }
    
    isPalindrome(userInput){
        var forwards = userInput;
        var backwards = userInput;
        backwards = backwards.reverse();
        backwards = backwards.split('');
        backwards = backwards.join(',');

        if( forwards === backwards){
            this.setState({palindrome: 'true'});
        } else {
            this.setState({palindrome: 'false'});
        }
    }
    
    render () {
        return (
            <div className='puzzleBox filterStringPB'>
            <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className='confirmationButton' onClick={ () => this.isPalindrome(this.state.userInput)}> Check </button>
            <span className='resultsBox'> Palindrome: { (this.state.palindrome) }</span>
            <h4> Palindrome </h4>
            </div>
        )
    }
}

export default Palindrome;
