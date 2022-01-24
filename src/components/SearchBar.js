import React from 'react';

class SearchBar extends React.Component{
  state ={term:''}

   onFormSubmit=(event)=>{
       event.preventDefault()
       this.props.onSubmit(this.state.term);
   };
    render(){
        return (
        <div  style={{backgroundColor:'#2d6a4f'}} className='ui segment'>
            <form  onSubmit={this.onFormSubmit} className='ui form'>
                <div className='field'>
                    <label style={{color:'#081c15',fontSize: '16px'}}>Image Search</label>
                <input type='text' value={this.state.term} onChange={(e)=> this.setState({term:e.target.value})}/>
                </div>
               
            </form>
        </div>
        );
    };
}


export default SearchBar;