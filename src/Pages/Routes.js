import { BrowserRouter,Route } from 'react-router-dom'
// import Home from './Home'
import SearchResults from './SearchResults'
// import Navigation from '../Components/Navigation'
import LoginPage from '../Components/Auth/LoginPage'
import AddingMeal from '../Components/Add_Meal/Add_Meal'
import Home from './Home'

const Routes= ()=>{
    return(
        <BrowserRouter >
            <Route path={'/yumsto-deploy'} exact component={Home} />
            <Route path={'/yumsto-deploy/login'} exact component={LoginPage} />
            <Route path={'/yumsto-deploy/addmeal'} exact component={AddingMeal} />
            <Route path={'/yumsto-deploy/searchresults'} exact component={SearchResults} />
        </BrowserRouter>
    )
    
}
export default Routes