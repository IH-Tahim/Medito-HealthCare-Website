import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HomeBlog = ({ blog }) => {
    console.log(blog);
    const { title, img, name, details, date } = blog;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} className="w-100" height="300px" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <small className="text-muted">By {name}</small>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Publish On : {date}</small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default HomeBlog;