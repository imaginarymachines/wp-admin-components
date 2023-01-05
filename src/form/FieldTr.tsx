import React, { FC, ReactChild } from 'react';

export const Label: FC<{
  id: string;
  hideLabel?: boolean;
  children: string | JSX.Element;
}> = ({ id, hideLabel, children }) => {
  return (
    <label
      id={`${id}-label`}
      htmlFor={id}
      className={hideLabel ? 'sr-only screen-reader-text' : ''}
    >
      {children}
    </label>
  );
};
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
        <Label id={id} hideLabel={hideLabel}>
          {label}
        </Label>
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
