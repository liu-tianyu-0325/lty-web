import Register from '../pages/register/index.tsx'
import {Navigate} from 'react-router-dom'
import Login from '../pages/login/index.tsx'

export default [
	{
		path:'/login',
		element:<Login/>
	},
	{
		path:'/register',
		element:<Register/>
	},
	{
		path:'/',
		element:<Navigate to="/login"/>
	}
]