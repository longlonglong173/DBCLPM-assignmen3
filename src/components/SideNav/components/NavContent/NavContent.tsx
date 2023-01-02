import React, { FC, memo } from "react";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line no-restricted-imports
import { HOME_SCREEN } from "features/home/routes/home.routes";
import { ROUTE_LIST } from "routes/routes.config";
import { RouteItemDef, RouterLocation } from "types/routes.types";

import NavListItem from "../NavListItem/NavListItem";
import NestedListItem from "../NestedListItem/NestedListItem";
import { useStyles } from "./NavContent.styles";

interface NavContentProps {
  sideNavToggle?: () => void;
}
const NavContent: FC<NavContentProps> = ({ sideNavToggle }) => {
  const classes = useStyles();

  const navLinks: RouteItemDef[] = ROUTE_LIST.filter(
    route => !route.isAuthRoute && route.navigationTitle
  );

  // Making default path "/" to be placed in top of navBar
  navLinks.sort((x, y) => {
    if (x.path === "/") {
      return -1;
    }
    if (y.path === "/") {
      return 1;
    }
    return 0;
  });

  const location: RouterLocation = useLocation();

  return (
    <div>
      <div className={classes.toolbar} />
      {/* TODO: refactor route config */}
      <NavListItem
        item={{ ...HOME_SCREEN, navigationTitle: "Home" }}
        location={location}
        sideNavToggle={sideNavToggle}
        nested={false}
      />
      <Divider />
      <List>
        {navLinks.map(navItem => (
          <React.Fragment key={navItem.navigationTitle}>
            {navItem.subMenuItems ? (
              <NestedListItem
                item={navItem}
                location={location}
                sideNavToggle={sideNavToggle}
              />
            ) : (
              <NavListItem
                item={navItem}
                location={location}
                sideNavToggle={sideNavToggle}
                nested={false}
              />
            )}
          </React.Fragment>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default memo(NavContent);
