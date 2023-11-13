import React from 'react';
export const path2css = (path) => `var(--${path.join('-')})`;

interface HorizontalSpaceExampleProps {
  size: string;
}

const HorizontalSpaceExample = ({ size }: HorizontalSpaceExampleProps) => (
  <div
    style={{
      backgroundColor: 'black',
      height: '1em',
      width: size,
    }}
  ></div>
);

interface VerticalSpaceExampleProps {
  size: string;
}

const VerticalSpaceExample = ({ size }: VerticalSpaceExampleProps) => (
  <div
    style={{
      backgroundColor: 'black',
      width: '1em',
      height: size,
    }}
  ></div>
);

interface BlockSpaceExampleProps {
  size: string;
}

const BlockSpaceExample = ({ size }: BlockSpaceExampleProps) => (
  <div
    style={{
      backgroundColor: 'black',
      inlineSize: '1em',
      blockSize: size,
    }}
  ></div>
);

interface InlineSpaceExampleProps {
  size: string;
}

const InlineSpaceExample = ({ size }: InlineSpaceExampleProps) => (
  <div
    style={{
      backgroundColor: 'black',
      blockSize: '1em',
      inlineSize: size,
    }}
  ></div>
);

interface SpaceTokensTableProps {
  orientation?: 'horizontal' | 'vertical' | 'block' | 'inline';
  tokens: {
    comment: string;
    name: string;
    path: string;
    value: string;
  }[];
}

export const SpaceTokensTable = ({ tokens, orientation }: SpaceTokensTableProps) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Variable</th>
        <th>Value</th>
        <th>Preview</th>
      </tr>
    </thead>
    <tbody>
      {tokens.map(({ comment, name, path, value }) => (
        <tr key={name}>
          <td>{comment}</td>
          <td>
            <code>{path2css(path)}</code>
          </td>
          <td>{value}</td>
          <td>
            {orientation === 'horizontal' ? (
              <HorizontalSpaceExample size={value} />
            ) : orientation === 'vertical' ? (
              <VerticalSpaceExample size={value} />
            ) : orientation === 'block' ? (
              <BlockSpaceExample size={value} />
            ) : orientation === 'inline' ? (
              <InlineSpaceExample size={value} />
            ) : (
              <HorizontalSpaceExample size={value} />
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
