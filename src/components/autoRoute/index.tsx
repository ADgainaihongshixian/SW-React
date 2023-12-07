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
        {routeMaps.map((route:any,idx:number) => (
          <Switch key={`${route}-${idx}`}>
            <Route exact path={route.to} component={lazy(route.com)}></Route>
          </Switch>
        ))}
      </Suspense>
    </>

  );
};
export default AutoRoute;
