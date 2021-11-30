import React, { FC, ReactChild, ReactElement } from 'react';

export type FormProps = {
  children: ReactChild;
  onSubmit: () => void;
  title?: string;
  id?: string;
};
export const Form: FC<FormProps> = ({ children, onSubmit, title, id }) => {
  return (
    <form onSubmit={onSubmit} title={title} id={id}>
      {title ? <h2 className="title">{title}</h2> : null}

      {children}
    </form>
  );
};

export type FormTableProps = {
  children: ReactElement<FormProps>;
  title?: string;
};
export const FormTable: FC<FormTableProps> = ({ children, title }) => {
  return (
    <>
      {title ? <h2 className="title">{title}</h2> : null}
      <table className="form-table" role="presentation">
        <tbody>{children}</tbody>
      </table>
    </>
  );
};
