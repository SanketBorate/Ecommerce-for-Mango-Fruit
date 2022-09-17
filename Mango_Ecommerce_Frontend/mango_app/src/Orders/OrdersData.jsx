import React from 'react';

export default function OrdersData(props) {

    const {posts} = props;

    return <div>
        <ul className='list-group mb-4'>
            {posts.map(post => (
                <li key={post.id} className='list-group-item'>
                    {post.title}
                </li>
            ))}
        </ul>
    </div>;
}
