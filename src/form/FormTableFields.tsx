import React, { FC, useMemo } from 'react';
import { FieldTr } from './FieldTr';

export interface FieldProps {
  name: string;
  label: string;
  value: string;
  help?: string;
  onChange: (value: string) => void;
}

export interface SelectProps extends FieldProps {
  options: {
    label: string;
    value: string;
  }[];
}
export const TrSelect: FC<SelectProps> = ({
  name,
  label,
  value,
  options,
  help,
  onChange,
}) => {
  const attrs = useMemo(() => {
    let a: any = {
      name,
      label,
      value,
      className: 'postform',
    };
    if (help) {
      a['aria-describedby'] = `${name}-description`;
    }
  }, [name, label, value, help]);
  return (
    <FieldTr name={name} label={label} help={help}>
      <select {...attrs} onChange={(e) => onChange(e.target.value)}>
        {options.map(({ value, label }) => (
          <option className="level-0" value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldTr>
  );
};

export interface InputProps extends FieldProps {
  type?: 'text' | 'number' | 'url';
}
export const TrInput: FC<InputProps> = ({
  name,
  label,
  value,
  type,
  onChange,
}) => {
  return (
    <FieldTr name={name} label={label}>
      <input
        name={name}
        type={type ? type : 'text'}
        id={name}
        value={value}
        className="regular-text ltr"
        onChange={(e) => onChange(e.target.value)}
      />
    </FieldTr>
  );
};

export interface SubmitProps {
  name: string;
  id: string;
  value: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
  label?:string;
}

export const TrSubmitButton: FC<SubmitProps> = ({
  name,
  variant,
  value,
  disabled,
  onClick,
  label
}) => (
  <FieldTr name={name} label={label ? label : value} hideLabel={label ? false : true}>
    <input
      type="submit"
      name={name}
      id={name}
      className={`button button-${variant ? variant : 'primary'} button-hero`}
      value={value}
      disabled={disabled}
      onClick={onClick}
    />
  </FieldTr>
);
