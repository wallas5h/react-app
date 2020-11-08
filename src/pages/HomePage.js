import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: 'Byc albo nie być, oto jest pytanie',
        author: 'Jan Nowak',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quisquam culpa facilis, similique nihil, molestias adipisci iure obcaecati officia asperiores ut, nobis id quaerat accusantium voluptates cum cumque veniam corrupti."
    },
    {
        id: 2,
        title: "Czym jest paradoks fermiego?",
        author: "Ania Kwiatkowska",
        text: "2222Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."
    },
    {
        id: 3,
        title: "Ciemna materia i ciemna energia?",
        author: "Jan Kowalski",
        text: "4444Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."
    }
]

const artList = articles.map(article => (
    <Article key={article.id} {...article} />
))
const HomePage = () => {
    return (<div className='home'>
        {artList}
    </div>);
}

export default HomePage;