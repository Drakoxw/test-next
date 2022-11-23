/* eslint-disable react/display-name */
import React, { useState } from "react";
import { useForm, SubmitHandler, } from "react-hook-form";
import { InputExt } from "./input";

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[] };

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...props }, ref) => (
    <select ref={ref} {...props}>
      {options.map(({ label, value }) => (
        <option key={String(label)} value={value}>{label}</option>
      ))}
    </select>
  )
);

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  sex: string;
}

export default function App() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <form className="bg-gray-300 p-6" onSubmit={handleSubmit(onSubmit)}>
      <InputExt {...register("firstName")} />
      <br />
      <InputExt {...register("lastName")} />
      <br />
      <InputExt type="email" {...register("email")} />
      <br />
      <Select
        {...register("sex")}
        options={[
          { label: "Female", value: "female" },
          { label: "Male",   value: "male" },
          { label: "Other",  value: "other" }
        ]}
      />
      <br />
      <br />


      <input className="btn btn-secondary" type="submit" />
    </form>
  );
}
