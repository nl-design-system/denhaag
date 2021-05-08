import React from "react";
import { Typography } from "@gemeente-denhaag/typography";

export interface ListSubheaderProps {
  /**
   * The text shown in the List subheader
   */
  children: string;
}

/**
 * Primary UI component for user interaction
 */
export const ListSubheader: React.FC<ListSubheaderProps> = (props: ListSubheaderProps) => {
  return (
    <Typography color="inherit">{props.children}</Typography>
  );
};

export default ListSubheader;
