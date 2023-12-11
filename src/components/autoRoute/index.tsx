import React, { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import intl from 'react-intl-universal';

type AutoRouteType = {
  routeMaps: any[];
}

const AutoRoute: FC<AutoRouteType> = (props) => {
  const { routeMaps } = props;

  return (
    <>
      <Suspense fallback={'...'}>
        <Switch>
          {routeMaps.map((route:any,index:number) => (
            typeof route.to === 'string'
            ? <Route key={`${route}-${index}`} exact path={route.to} component={lazy(route.com)}></Route>
            : route.to?.map((r:any,idx:number) => <Route key={`${r}-${idx}`} exact path={r} component={lazy(routeMaps[index].com)}></Route>)
          ))}
        </Switch>
      </Suspense>
    </>

  );
};
export default AutoRoute;
