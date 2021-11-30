import React, { FC, ReactChild } from 'react';

export const FieldTr: FC<{
  children: ReactChild;
  name: string;
  label: string;
  help?: string;
  hideLabel?: boolean;
}> = ({ children, name, label, help, hideLabel }) => {
  return (
    <tr>
      <th scope="row">
        <label
          htmlFor={name}
          className={hideLabel ? 'sr-only screen-reader-text' : ''}
        >
          {label}
        </label>
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
