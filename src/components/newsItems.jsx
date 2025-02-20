import React from "react";
import { Card, Button } from "react-bootstrap";
import img from '../image/th.jpg'

const NewsItems = ({title, description, url, urlToImage})=>{
    return(
        <>
            
                <Card style={{ width: '18rem'}} className="mb-5 mx-2 p-2">
                    <Card.Img variant="top" src={urlToImage?urlToImage:img} style={{height: '200px'}} />
                    <Card.Body className="flex-column text-center" >
                        <Card.Title > {title.slice(0, 40)} </Card.Title>
                        <Card.Text >
                            {description? description.slice(0, 100): 'news news news news news news news news news news news newsnews news news news news news news news news news news news news news news news news newsnews news news news news news news news news'.slice(0, 99)}
                        </Card.Text>
                        <a href={url}> <Button variant="primary" > Read More </Button> </a> 
                    </Card.Body>
                </Card>
        
        </>
    )
}

export default NewsItems;