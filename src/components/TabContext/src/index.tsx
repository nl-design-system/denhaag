import React from "react";
import MaterialTabContext from "@material-ui/lab/TabContext";
import { BaseChildrenProps } from "@gemeente-denhaag/baseprops/src";

export interface TabContextProps extends BaseChildrenProps {
  /**
   * The value of the currently selected Tab.
   */
  value: string;
}

/**
 * Serves as a wrapper for the Tabs component.
 * @param props The properties of a TabContext component.
 * @constructor Constructs an instance of TabContext.
 */
export const TabContext: React.FC<TabContextProps> = (props: TabContextProps) => {
  return <MaterialTabContext {...props}>{props.children}</MaterialTabContext>;
};

export default TabContext;
