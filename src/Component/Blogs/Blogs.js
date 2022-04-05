import React from 'react';

const Blogs = () => {
    return (
        <div className='text-2xl mt-40'>
            <h1 className='font-bold text-center my-4 '>WellCome to My Blogs </h1>

            <div className='mx-40 my-10 '>
                <p className='font-bold '>Ques: what is context api ? </p>
                <p>Ans: the context apin is a special feture of react  the context api create a global variables and shared information all component do not help of props and assists in solving prop-drilling from all levels of your application.</p>
                <p className='font-bold '>Ques: what is semantic tag? </p>
                <p>Ans: The semantic tag help communicate developers , user with browser 

                    The following HTML semantic  tags <br />

                    header:  a header for a web page. <br />
                    nav:  a container for navigation links. <br />
                    section:  a section in a web page. <br />
                    article: This element contains the main part, containing information about the web page. <br />
                    aside: it  is often placed as a sidebar in a document. <br />
                    footer: a footer for a document or a section. </p>
                <p className='font-bold '>Ques: What is Inline block and Inline Block element</p>
                <p>Ans: </p>
            </div>
        </div>
    );
};

export default Blogs;