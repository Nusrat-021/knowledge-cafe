import React from 'react';

const Blog = ({blog}) => {
    console.log(blog);
    const {cover} = blog;
    return (
        <div>
            <img className='w-full rounded-lg' src={cover} alt="" />
        </div>
    );
};

export default Blog;