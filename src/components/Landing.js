import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Landing() {
    return (
        <div className="landing-page">
            <div className="landing-title-div">
                <h1 className="landing-title p-0 m-0">park it</h1>
                <h3 className="landing-sub mb-3">national park resource guide</h3>
                <Navbar className="mt-5 bg-*">
                    <Form inline className="landing-search justify-content-center align-items-center">
                        <Form.Control type="text" placeholder="Search" className="landing-search-input mr-sm-2" />
                        <Button type="submit" className="landing-button">
                            <svg 
                                width="1em" 
                                height="1em" 
                                viewBox="0 0 16 16" 
                                className="landing-button-svg bi bi-chevron-down" 
                                fill="currentColor" 
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </Button>
                    </Form>
                    </Navbar>
            </div>
            
        </div>
        
    )
}
