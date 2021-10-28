import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './HomeBlogs.css';
import HomeBlog from './HomeBlog';
import { Link } from 'react-router-dom';

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
        <div className="bg_custom">
            <Container>
                <h2 className="text-center mt-5 mb-4">Our Latest News & Blogs</h2>

                <Row xs={1} md={2} lg={3} className="g-4 mb-4">
                    {
                        homeBlog.map(blog => <HomeBlog key={blog.id} blog={blog}></HomeBlog>)
                    }
                </Row>
                <div className="text-center">
                    <Link to="/blogs">
                        <button className="btn btn-primary m-auto mt-3 mb-4 rounded-pill">See All Blogs</button>
                    </Link>
                </div>

            </Container>
        </div>
    );
};

export default HomeBlogs;