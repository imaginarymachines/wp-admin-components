import React, { FC, ReactChild } from 'react';

export const FieldTr: FC<{
  id: string;
  children: ReactChild;
  name: string;
  label: string;
  help?: string;
  hideLabel?: boolean;
}> = ({ children, name, label, help, hideLabel, id }) => {
  return (
    <tr>
      <th scope="row">
        <label
          id={`${id}-label`}
          htmlFor={id}
          className={hideLabel ? 'sr-only screen-reader-text' : ''}
        >
          {label}
        </label>
        {help ? (
          <p id={`${name}-description`} className="description">
            {help}
          </p>
        ) : null}
      </th>
      <td>{children}</td>
    </tr>
  );
};
