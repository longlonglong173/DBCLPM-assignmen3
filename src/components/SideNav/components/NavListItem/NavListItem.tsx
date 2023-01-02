import React, { FC, memo } from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import objstr from "obj-str";
import { Link as RouterLink } from "react-router-dom";

import { RouteItemDef, RouterLocation } from "types/routes.types";

import { useStyles } from "./NavListItem.styles";

interface NavListItemProps {
  item: RouteItemDef;
  location: RouterLocation;
  nested: boolean;
  sideNavToggle?: () => void;
}

const NavListItem: FC<NavListItemProps> = ({
  item,
  location,
  nested,
  sideNavToggle,
}) => {
  const classes = useStyles();

  return (
    <ListItem
      key={item.navigationTitle}
      className={objstr({ [classes.nested]: nested, [classes.link]: true })}
      onClick={sideNavToggle}
      button
      component={RouterLink}
      to={item.path}
      selected={item.path === location.pathname}
    >
      <ListItemText primary={item.navigationTitle} />
    </ListItem>
  );
};

export default memo(NavListItem);
