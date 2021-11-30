import React, { FC, ReactChild } from 'react';

export const FieldTr: FC<{
  children: ReactChild;
  name: string;
  label: string;
  help?: string;
}> = ({ children, name, label, help }) => {
  return (
    <tr>
      <th scope="row">
        <label htmlFor={name}>{label}</label>
        {help ? (
          <span id={`${name}-description`} className="description">
            {help}
          </span>
        ) : null}
      </th>
      <td>{children}</td>
    </tr>
  );
};
