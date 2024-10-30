"use client"
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

const page = () => {

    const options = [
        { value: 'Monday', label: 'Monday' },
        { value: 'Tuesday', label: 'Tuesday' },
        { value: 'Wednesday', label: 'Wednesday' },
        { value: 'Thursday', label: 'Thursday' },
        { value: 'Friday', label: 'Friday' },
        { value: 'Saturday', label: 'Saturday' },
        { value: 'Sunday', label: 'Sunday' },
    ];

    const { control, register, handleSubmit } = useForm({
        defaultValues: {
            products: [{ product_name: '', product_price: '' }],
            users: [{ name: '', email: '' }],
            weekdays: []
        }
    });

    const {
        fields: fieldArray,
        append: appendFieldArray,
        remove: removeFieldArray
    } = useFieldArray({
        control,
        name: 'products'
    })

    const {
        fields: userArray,
        append: appendUserArray,
        remove: removeUserArray
    } = useFieldArray({
        control,
        name: 'users'
    })


    return (
        <div className='px-10 pt-10'>
            
            {/* --------------------------------------------
            array of object for products
            -------------------------------------------- */}
            {fieldArray.map((field, index) => (
                <div className='flex flex-row items-center gap-x-10'>
                    <div className='flex flex-col justify-start'>
                        <label htmlFor="">Product Name</label>
                        <input
                            key={field.id}
                            className='border border-black px-5 h-10 w-80 rounded-md'
                            {...register(`products.${index}.product_name`)}
                        />
                    </div>
                    <div className='flex flex-col justify-start'>
                        <label htmlFor="">Product Price</label>
                        <input
                            key={field.id}
                            className='border border-black px-5 h-10 w-80 rounded-md'
                            {...register(`products.${index}.product_price`)}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => removeFieldArray(index)}
                        className='bg-red-500 cursor-pointer mt-5  text-white rounded-md px-4 py-2'
                    >
                        Remove
                    </button>
                </div>
            ))}
            <div
                onClick={() => appendFieldArray({ product_name: '', product_price: '' })}
                className='bg-black mt-5 cursor-pointer rounded-md px-4 py-2 flex justify-center items-center w-28'
            >
                <span className='text-white font-semibold'>Add</span>
            </div>

            {/* --------------------------------------------
            array of object for user
            -------------------------------------------- */}

            {userArray.map((field, index) => (
                <div className='flex flex-row items-center gap-x-10'>
                    <div className='flex flex-col justify-start'>
                        <label htmlFor="">Name</label>
                        <input
                            key={field.id}
                            className='border border-black px-5 h-10 w-80 rounded-md'
                            {...register(`users.${index}.name`)}
                        />
                    </div>
                    <div className='flex flex-col justify-start'>
                        <label htmlFor="">Email</label>
                        <input
                            key={field.id}
                            className='border border-black px-5 h-10 w-80 rounded-md'
                            {...register(`users.${index}.email`)}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => removeUserArray(index)}
                        className='bg-red-500 cursor-pointer mt-5  text-white rounded-md px-4 py-2'
                    >
                        Remove
                    </button>
                </div>
            ))}
            <div
                onClick={() => appendUserArray({ name: '', email: '' })}
                className='bg-black mt-5 cursor-pointer rounded-md px-4 py-2 flex justify-center items-center w-28'
            >
                <span className='text-white font-semibold'>Add</span>
            </div>

            {/* --------------------------------------------
            array of string
            -------------------------------------------- */}

            {options.map((day) => (
                <>
                    <input
                        type="checkbox"
                        id={day.value}
                        value={day.value}
                        {...register('weekdays')}
                        className="mr-2"
                    />
                    <label htmlFor={day.value}>{day.label}</label>
                </>
            ))}
            
            <div
                onClick={handleSubmit(data => console.log(data))}
                className='bg-blue-500 cursor-pointer mt-10 rounded-md px-4 py-2 flex justify-center items-center w-28'
            >
                <span className='text-white font-semibold'>Submit</span>
            </div>
        </div>
    )
}

export default page


