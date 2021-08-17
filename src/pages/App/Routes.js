import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../Home/Home'));
const CreatePost = React.lazy(() => import('../CreatePost/CreatePost'));
const ViewPost = React.lazy(() => import('../ViewPost/ViewPost'));
const Promotion = React.lazy(() => import('../Promotion/Promotion'));

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/create" component={CreatePost} />
    <Route exact path="/view/:postId" component={ViewPost} />
    <Route exact path="/promotion/:promotionId" component={Promotion} />
  </Switch>
);

export default Routes;
