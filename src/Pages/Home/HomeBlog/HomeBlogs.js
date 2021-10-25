import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeBlog from './HomeBlog';

const HomeBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./blogData.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            });
    }, []);
    const homeBlog = blogs.slice(0, 3);

    return (
        <Container>
            <h2 className="text-center mt-5 mb-4">Our Latest News & Blogs</h2>

            <Row xs={1} md={2} lg={3} className="g-4 mb-4">
                {
                    homeBlog.map(blog => <HomeBlog key={blog.id} blog={blog}></HomeBlog>)
                }
            </Row>

        </Container>
    );
};

export default HomeBlogs;