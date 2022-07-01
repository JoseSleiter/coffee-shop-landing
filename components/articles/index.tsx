import React, { useEffect, useState } from "react";
import * as articleService from "../../services/articles";
import { IArticle } from "../../types";
import Image from 'next/image'

 const Articles = () => {
    const [items, setItems] = useState<IArticle[]>([]);
    useEffect(()=>{    
        async function fetchData(){
            const response = await articleService.get();
            setItems(response);
        }
        fetchData()
    }, [])

    return (
        <div>
            {!items.length && (
            <>
                Don't find data
            </>
           )}
           {!!items.length && items.map( (item) =>         
            <a key={item.id} href={item.url}>
                {item.category}
                {item.content}
                <div style={{width: '100%', height: '20%'}}>
                <Image 
                    src={item.image}  
                    alt={item.title} 
                    width='250px' 
                    height='250px'
                    />
                </div>
                {item.title}
                {item.url}
                {item.createdAt}
            </a>
           )}           
        </div>
    );
};

export default Articles