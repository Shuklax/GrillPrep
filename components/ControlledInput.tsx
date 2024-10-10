import React from 'react'
import {Input} from "@/components/ui/input";
import {Control, Controller, FieldValues, Path} from "react-hook-form";
import {FormControl, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
// @ts-ignore
import {T} from "tailwindcss/dist/types-B254mqw1";


interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    label: string;
    name: Path<T>;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'file';
}

const ControlledInput = ({control, name, label, placeholder}: FormFieldProps<T>) =>
    <Controller name={name}
                control={control}
                render={({field}) =>
                    <FormItem>
                        <FormLabel
                            className="label">{label}</FormLabel>
                        <FormControl>
                            <Input
                                className="input"


                                placeholder={placeholder}
                                {...field}
                            />
                        </FormControl>

                        <FormMessage/>
                    </FormItem>}
    />
export default ControlledInput