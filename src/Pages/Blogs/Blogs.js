import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>
            <Row>
                <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    <h5 className='mt-4'>What is the Difference between authorization and authentication?</h5>
                    <p>
                        <strong>Ans: </strong>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Authorization</th>
                                    <th scope="col">Authentication</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Authorization মাধ্যমে কেউ কোন resources এ access করতে পারবে কিনা তা যাচাই করা যায়।</td>
                                    <td>Authentication এর মাধ্যমে কারো identity যাচাই করা যায়।</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>এটি settings এর মাধ্যমে রক্ষনাবেক্ষনকারী সংস্থা দ্বারা নির্দিষ্ট করা হয়।</td>
                                    <td>এটি email, password, one time pin, biometric information ইত্যাদির মাধ্যমে যাচাই করা যায়।</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>এটি Authentication এর পরে করতে হয়। </td>
                                    <td>এটি প্রথম ধাপ</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>এটির মাধ্যমে ব্যাবহারকারী কি কি ব্যাবহার করতে পারবে সেটা সেটা সম্পর্কে তথ্য পাওয়া যায়।</td>
                                    <td>এটির মাধ্যমে ব্যাবহারকারীর তথ্য যাচাই করা যায়।
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                    <h5 className='mt-4'>Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p>
                        <strong>Ans: </strong>
                    </p>
                    <h5 className='mt-4'>What other services does firebase provide other than authentication</h5>
                    <p>
                        <strong>Ans: </strong>
                    </p>

                </Col>
            </Row>
        </Container>
    );
};

export default Blogs;