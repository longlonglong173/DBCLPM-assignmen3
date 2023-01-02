import React, { FC, memo, Suspense } from "react";

import { Route, Switch } from "react-router-dom";

import Loader from "components/Loader/Loader";
import DefaultLayout from "layouts/DefaultLayout/DefaultLayout";
import { RouteItemDef } from "types/routes.types";

import { ROUTE_LIST } from "./routes.config";

const RouteWrapper: FC<RouteItemDef> = ({
  component: Component,
  layout,
  path,
}) => {
  const RouteLayout: FC = layout || DefaultLayout;

  return (
    <Route
      exact
      path={path}
      render={(props): React.ReactElement => {
        const Content = (): JSX.Element => (
          <RouteLayout>
            <Component {...props} />
          </RouteLayout>
        );

        return <Content />;
      }}
    />
  );
};

const Routes: FC = () => {
  return (
    <Suspense fallback={<Loader isFullScreen />}>
      <Switch>
        {ROUTE_LIST.map((route, id, arr) => {
          console.log(route.path, arr);
          return <RouteWrapper key={route.id} {...route} />;
        })}
      </Switch>
    </Suspense>
  );
};

export default memo(Routes);
