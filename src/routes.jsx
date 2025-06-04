import CreatePortfolio from './pages/CreatePortfolio/CreatePortfolio'
import MainLocation from './pages/CreatePortfolio/Location/MainLocation'
import MyHome from './pages/MyHome/MyHome'
export let router = [
   {path:'/bazrafkan-portfolio',element:<MyHome />},
   {path:'/bazrafkan-portfolio/CreatePortfolio',element:<CreatePortfolio />},
   {path:'/bazrafkan-portfolio/SelectLocation',element:<MainLocation />}

]
