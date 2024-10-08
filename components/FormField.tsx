import React from 'react'
import {FormControl, FormDescription, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Controller} from "react-hook-form";

interface FormFieldProps <T extends FieldValues> {
    control: Control <T>;
    label: string;
    name: Path <T>;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'file';
}

const FormField = ({control, name, label, placeholder, type="text"} : FormFieldProps<T>) => (
    <Controller name={name} control={control} render={({field}) => (
            <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                    <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage/>
            </FormItem>
        ))
    />
}
export default FormField
