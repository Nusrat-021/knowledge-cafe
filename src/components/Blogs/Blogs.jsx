import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='flex flex-col md:flex-row w-full'>
            <div className='md:w-2/3 space-y-4'>
            {
                blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}
                ></Blog>)
            }
            </div>
            <div className='w-1/3'>

            </div>
        </div>
        
    );
};

export default Blogs;