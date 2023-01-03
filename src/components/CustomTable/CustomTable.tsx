import React, { FC, memo, useState } from "react";

import {
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export type TableCellType = {
  text: string | number;
  colSpan?: number;
};

interface CustomTableProps {
  header: string[];
  body: TableCellType[][];
  isShowOptions?: boolean;
}

const CustomTable: FC<CustomTableProps> = ({
  header,
  body,
  isShowOptions = true,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleShowRowPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {header.map(head => (
              <TableCell key={head}>{head}</TableCell>
            ))}
            {isShowOptions && <TableCell />}
          </TableRow>
        </TableHead>
        <TableBody>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={!!anchorEl}
            onClose={() => setAnchorEl(null)}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            MenuListProps={{
              style: {
                minWidth: 180,
              },
            }}
          >
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
              }}
            >
              Chỉnh sửa
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
              }}
            >
              Xóa
            </MenuItem>
          </Menu>
          {body.map((row, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableRow key={`row-${index}`}>
              {row.map((cell, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <TableCell key={`row-${index}-cell-${i}`}>
                  {cell.text}
                </TableCell>
              ))}
              {isShowOptions && (
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={event => handleShowRowPopover(event)}
                  >
                    <MoreVertIcon color="action" />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(CustomTable);
