import React, { FC, useMemo } from 'react';
import { FieldTr } from './FieldTr';

export interface FieldProps {
  id: string;
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
  id,
  name,
  label,
  value,
  options,
  help,
  onChange,
}) => {
  //Create the props for select element
  const attrs = useMemo(() => {
    let _attrs: any = {
      id,
      name,
      label,
      value,
      className: 'postform',
    };
    if (help) {
      _attrs['aria-describedby'] = `${name}-description`;
    }
    return _attrs;
  }, [name, label, value, help]);

  return (
    <FieldTr name={name} label={label} help={help} id={id}>
      <select
        {...attrs}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
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

export const Input: FC<InputProps> = ({ id, name, value, type, onChange }) => {
  return (
    <input
      name={name}
      type={type ? type : 'text'}
      id={id}
      defaultValue={value}
      className="regular-text ltr"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
export const TrInput: FC<InputProps> = ({
  name,
  label,
  value,
  type,
  id,
  help,
  onChange,
}) => {
  return (
    <FieldTr name={name} label={label} id={id} help={help}>
      <Input
        label={label}
        name={name}
        value={value}
        type={type}
        id={id}
        onChange={onChange}
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
  label?: string;
}

export const TrSubmitButton: FC<SubmitProps> = ({
  name,
  variant,
  value,
  disabled,
  onClick,
  label,
  id,
}) => (
  <FieldTr
    name={name}
    label={label ? label : value}
    hideLabel={label ? false : true}
    id={id}
  >
    <input
      type="submit"
      name={name}
      id={id}
      className={`button button-${variant ? variant : 'primary'} button-hero`}
      value={value}
      disabled={disabled}
      onClick={onClick}
    />
  </FieldTr>
);
