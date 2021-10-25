import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from './Blog';
import './Blog.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blogData.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            })
    }, [])
    return (
        <div>
            <Container>
                <h2 className="text-center mt-4">Know Our Latest News</h2>
                <Row className="g-4 my-3">
                    {
                        blogs.map(blog => <Blog detail={blog} key={blog.id}></Blog>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Blogs;