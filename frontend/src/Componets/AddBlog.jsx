import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddBlog = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/blogs', data);
            console.log('Blog successfully added:', response.data);
            alert('Blog added successfully!');
        } catch (error) {
            console.error('Error adding blog:', error);
            alert('Failed to add the blog. Please try again.');
        }
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h2>Add Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Blog Name</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: 'Blog Name is required' })}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        {...register('description', { required: 'Description is required' })}
                    />
                    {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
                </div>
                <div>
                    <label htmlFor="author">Author Name</label>
                    <input
                        type="text"
                        id="author"
                        {...register('author', { required: 'Author Name is required' })}
                    />
                    {errors.author && <p style={{ color: 'red' }}>{errors.author.message}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddBlog;