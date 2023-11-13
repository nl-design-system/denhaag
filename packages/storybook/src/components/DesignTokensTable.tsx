import React from 'react';
export const path2css = (path) => `var(--${path.join('-')})`;

interface DesignTokensTableProps {
  tokens: {
    comment: string;
    name: string;
    path: string;
    value: string;
  }[];
}

export const DesignTokensTable = ({ tokens }: DesignTokensTableProps) => (
  <table>
    <thead>
      <tr>
        <th>CSS Variable</th>
        <th>CSS Value</th>
      </tr>
    </thead>
    <tbody>
      {tokens.map(({ name, path, value }) => (
        <tr key={name}>
          <td>
            <code>{path2css(path)}</code>
          </td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
