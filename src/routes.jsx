import MainLocation from './components/Location/MainLocation'
import CreatePortfolio from './pages/CreatePortfolio/CreatePortfolio'
import MyHome from './pages/MyHome/MyHome'
export let router = [
   {path:'/bazrafkan-portfolio',element:<MyHome />},
   {path:'/bazrafkan-portfolio/CreatePortfolio',element:<CreatePortfolio />},
   {path:'/bazrafkan-portfolio/SelectLocation',element:<MainLocation />}
]
