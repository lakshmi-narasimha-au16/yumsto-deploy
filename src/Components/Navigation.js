import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.scss"

const Navigation = (props)=>{
    console.log(props)
    const conditionalRender = ()=>{
        const token = sessionStorage.getItem('_ltk')
        if(token===undefined || token==null){
            return(
                <React.Fragment>
                    <li><Link>Login</Link></li>
                    <li><Link>Register</Link></li>
                </React.Fragment>
            )
        }
        else{
            const username = sessionStorage.getItem('username') 
            return (
                <React.Fragment>
                    <li><Link>Welcome {username}</Link></li>
                </React.Fragment>
            )
        }
    }
    
    return(
        <header>
            <div className='navbarContainer'>
                <div className='logo'>
                    <h1><Link>Logo</Link></h1>
                </div>
                <div className='navLinks'>
                    <ul>
                        {conditionalRender()}
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Navigation