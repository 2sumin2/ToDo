import React, { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
    const [toDo, setToDo] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setToDo(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(toDo);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} placeholder="Write a to do" />
                <button>Add</button>
            </form>
        </div>
    )
} */

function ToDoList() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onValid = (data: any) => {
        console.log(data);
    };
    console.log(errors);
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>
                <input {...register("email", {
                    required: '"email required"',
                    minLength: {
                        value: 5,
                        message: 'Your password is too short',
                    },
                    pattern: {
                        value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                        message: "Only naver.com email allowed"
                    }
                })} placeholder="Email" />
                <span>{errors?.email?.message}</span>
                <button>Add</button>
            </form>
        </div>
    );
}
export default ToDoList;