import React, {useState, useEffect} from "react";
import {  Badge, Container } from "react-bootstrap";
import NewsItems from "./newsItems";
import NotFound from "./notFound";


const NewsBoard = ({category})=>{
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e4eee38fc9f445b193adfd91f6ef0fe1`;
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles)) 
        
        console.log()
    }, [category])
    return(
        <>
        
            <h2 className="text-center my-3"> Latest <Badge bg="danger" text="light">News</Badge> </h2>
            <Container className=" d-flex flex-row justify-content-center flex-wrap">
            {
                articles.length? (articles.map((news, index) => {
                    return(
                        <NewsItems key={index} 
                                    title={news.title} 
                                    description={news.description} 
                                    url={news.url} 
                                    urlToImage={news.urlToImage} />
                    )
                })): <NotFound />
            }
            </Container>
        </>
    )
}

export default NewsBoard;