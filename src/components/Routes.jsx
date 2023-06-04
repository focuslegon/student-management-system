
import {Switch, Route, Redirect} from 'react-router-dom';
import Result from './Result';

export const Routes = () => {
  return (
    <div className="p-4 ">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path={['/search','/images','/vidoes','/news']}>
          <Result /> 
        </Route>
      </Switch>
    </div>
  )
}
