"use client"
import InputComponent from '@/components/modules/Input';
import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import axios from 'axios'
import { toast } from 'sonner';

const BlogUpdate = () => {

    const form = useForm();

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('http://localhost:8000/blogs/66d4948794b9c6be848133b6')
                const data = await res.json()
                console.log(data.data);
                form.reset(data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    },[])



    const onSubmit = async (data: any) => {
        console.log("data: ", data);
        try {
            const res = await axios.patch('http://localhost:8000/blogs/66d4948794b9c6be848133b6', data)
            console.log(res);
            toast.success("Blog Updated successfully")
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }

    }

    return (
        <div className=' flex justify-center items-center py-4'>
            <div className='bg-white border rounded-lg p-8 shadow-lg'>
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='w-96'>
                        <InputComponent
                            form={form}
                            name="title"
                            label="Title"
                            placeholder="Enter Title"
                            type="text"
                        />
                        <InputComponent
                            form={form}
                            name="content"
                            label="Content"
                            placeholder="Enter Content"
                            type="text"
                        />
                        <Button type='submit' className='w-full mt-5'>
                            Update
                        </Button>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}

export default BlogUpdate
