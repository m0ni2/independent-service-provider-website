import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='py-5'>
            <Row>
                <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    <h5 className='mt-4'><strong>Q-1: </strong>What is the Difference between authorization and authentication?</h5>
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
                    <h5 className='mt-4'><strong>Q-2: </strong>Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p>
                        <strong>Ans: </strong>
                        Website এ Authentication এর জন্য আমি firebase ব্যাবহার করি। এর বিভিন্ন method যেমন ইমেইল-পাসওয়ার্ড method, গুগল / ফেসবুক/ গিটহাব  ইত্যাদি method এর মাধ্যমে খুব সহজেই website এ Login system তৈরি করা যায়।
                        <br />
                        অন্যান্য Authentication platforms হচ্ছেঃ-
                        <br />
                        ১. Amazone cognito
                        <br />
                        ২. OneLogin
                        <br />
                        ৩. Okta
                        <br />
                        ৪. Stytch
                        <br />
                        ৫. Ory
                        <br />
                        ৬. Supabase
                        <br />
                        ৭. Pingldentity
                        <br />
                        ৮. Keyloak
                        <br />
                        ৯. Frontegg
                        <br />
                        ১০. Authress
                        <br />
                        ১১. Auth0.
                    </p>
                    <h5 className='mt-4'><strong>Q-3: </strong>What other services does firebase provide other than authentication</h5>
                    <p>
                        <strong>Ans: </strong> Firebase IOS, Android, Web, Game এর বিভিন্ন functionalities প্রদানের মাধ্যমে backend development এ সহায়তা করে।
                        <br />
                        এখানে Real time database এবং cloud filestore এর সুবিধা পাওয়া যায়। এছাড়াও এখানে hosting সুবিধা পাওয়া যায় যার মাধ্যমে খুব সহজেই কোন project এর live site তৈরি করা যায়। এছাড়াও এতে custom domain ব্যাবহার করা যায়।
                    </p>

                </Col>
            </Row>
        </Container>
    );
};

export default Blogs;