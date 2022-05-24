import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center mt-4'>Answering Few Questions</h2>
            <div className='container'>
                <div>
                    <h5> 1. Difference between javascript and nodejs?</h5>
                    <p><span className='fw-bold'>A. JavaScript </span><br />
                        (i) Javascript is a programming language that is used for writing scripts on the website. <br />
                        (ii) Javascript can only be run in the browsers.<br />
                        (iii) It is basically used on the client-side.<br />
                        (iv) Javascript is capable enough to add HTML and play with the DOM.<br />
                        (v) Javascript is used in frontend development.<br />
                        (vi) It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++.<br />
                    </p>
                    <p>
                        <span className='fw-bold'>B. Nodejs</span> <br />
                        (i) NodeJS is a Javascript runtime environment.<br />
                        (ii) We can run Javascript outside the browser with the help of NodeJS.<br />
                        (iii) It is mostly used on the server-side.<br />
                        (iv) Nodejs does not have capability to add HTML tags.<br />
                        (v) Nodejs is used in server-side development.<br />
                        (vi) Nodejs is written in C, C++ and Javascript.
                    </p>
                </div>

                <div>
                    <h5>2. When should you use nodejs and when should you use MongoDB?</h5>
                    <p>
                        Node.js, the open source JavaScript server environment, has the ability to connect to both SQL and NoSQL databases such as MySQL and MongoDB (respectively).In order to use these databases, On the other hand
                        Mongodb should be used in places that require simple queries, easy and fast integration of data and have data whose structure changes constantly with time.
                    </p>
                </div>

                <div>
                    <h5>3. Differences between SQL and noSQL databases?</h5>
                    <p>
                        <span className='fw-bold'>SQL</span><br />
                        (i) These databases have fixed or static or predefined schema. <br />
                        (ii) These databases are not suited for hierarchical data storage. <br />
                        (iii) These databases are best suited for complex queries. <br />
                        (iv) Vertically Scalable. <br />
                        (v) Follows ACID property
                    </p>
                    <p>
                        <span className='fw-bold'>NoSQL</span><br />
                        (i) They have dynamic schema. <br />
                        (ii) These databases are best suited for hierarchical data storage. <br />
                        (iii) These databases are not so good for complex queries. <br />
                        (iv) Horizontally scalable. <br />
                        (v) Follows CAP(consistency, availability, partition tolerance)
                    </p>
                </div>

                <div>
                    <h5>4. What is the purpose of jwt and how does it work?</h5>
                    <p>
                        A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange.The token is mainly composed of header, payload, signature. These three parts are separated by dots(.). JWT defines the structure of information we are sending from one party to the another, and it comes in two forms – Serialized, Deserialized.  The Serialized approach is mainly used to transfer the data through the network with each request and response. While the deserialized approach is used to read and write data to the web token.

                        JWT in the deserialized form contains only the header and the payload.Both of them are plain JSON objects.

                        A header in a JWT is mostly used to describe the cryptographic operations applied to the JWT like signing/decryption technique used on it. It can also contain the data about the media/content type of the information we are sending.This information is present as a JSON object then this JSON object is encoded to BASE64URL. The cryptographic operations in the header define whether the JWT is signed/unsigned or encrypted and are so then what algorithm techniques to use.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;