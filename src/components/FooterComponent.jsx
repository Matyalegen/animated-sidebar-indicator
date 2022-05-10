import React, { Component } from 'react';

//import './App.scss';


class FooterComponent extends Component {
   constructor(props){
       super(props)                                                                                                                                                                                                                            
       this.state={

       }
   }
    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted"> 
                    <i className='bx bx-bell ring'></i>
                    <i className='bx bx-envelope'></i>
                    <i className='bx bx-cog'></i>
                    <i className='bx bx-power-off'></i>
                    </span>

                </footer>
            </div>
        );
    }
}

export default FooterComponent;
