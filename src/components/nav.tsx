import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import Task1 from "../page/task1";
import Task2 from "../page/task2";
import Task3 from "../page/task3";
import Task4 from "../page/task4";
import Task5 from "../page/task5";
import Task6 from "../page/task6";
import Task7 from "../page/task7";
import { NavS } from "../style/style";



function Nav():JSX.Element {
   return (<Router>
      <NavS>
         <nav>
            <ul>
               <li>
                  <NavLink exact to="/" activeClassName="active">Задание 1</NavLink>
               </li>
               <li>
                  <NavLink to="/task2" activeClassName="active">Задание 2</NavLink>
               </li>
               <li>
                  <NavLink to="/task3" activeClassName="active">Задание 3</NavLink>
               </li>
               <li>
                  <NavLink to="/task4" activeClassName="active">Задание 4</NavLink>
               </li>
               <li>
                  <NavLink to="/task5" activeClassName="active">Задание 5</NavLink>
               </li>
               <li>
                  <NavLink to="/task6" activeClassName="active">Задание 6</NavLink>
               </li>
               <li>
                  <NavLink to="/task7" activeClassName="active">Задание 7</NavLink>
               </li>
            </ul>
         </nav>
   </NavS>
   <Switch>
          
          <Route path="/task2">
            <Task2 />
          </Route>
          <Route path="/task3">
            <Task3 />
          </Route>
          <Route path="/task4">
            <Task4 />
          </Route>
          <Route path="/task5">
            <Task5 />
          </Route>
          <Route path="/task6">
            <Task6 />
          </Route>
          <Route path="/task7">
            <Task7 />
          </Route>
          <Route path="/">
            <Task1 />
          </Route>
        </Switch>
   </Router>);
 }
 
 export default Nav;