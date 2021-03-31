import React from "react";
import MaterialTypography from "@material-ui/core/Typography";
import BaseDataDisplayProps from "@gemeente-denhaag/basedatadisplayprops/src";

export interface TypographyProps extends BaseDataDisplayProps {
  /**
   * Set the text-align on the component.
   */
  align?: "inherit" | "left" | "center" | "right" | "justify";

  /**
   * The color of the component.
   * It supports those theme colors that make sense for this component.
   */
  color?: "initial" | "inherit" | "primary" | "secondary" | "textPrimary" | "textSecondary" | "error";

  /**
   * Controls the display type
   */
  display?: "initial" | "block" | "inline";

  /**
   * If true, the text will have a bottom margin.
   */
  gutterBottom?: boolean;

  /**
   * If true, the text will not wrap,
   * but instead will truncate with a text overflow ellipsis.
   */
  noWrap?: boolean;

  /**
   * If true, the text will have a bottom margin.
   */
  paragraph?: boolean;

  /**
   * Applies the theme typography styles.
   */
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "srOnly"
    | "inherit";

  /**
   * The component maps the variant prop to a range of different HTML element types.
   */
  variantMapping?: Record<string, unknown>;
}

/**
 * Allows developers to present and design content clearly and efficiently.
 * @param props The properties of a Typography component.
 * @constructor Constructs an instance of Typography.
 */
export const Typography: React.FC<TypographyProps> = (props: TypographyProps) => {
  return <MaterialTypography {...props}>{props.children}</MaterialTypography>;
};

export default Typography;
