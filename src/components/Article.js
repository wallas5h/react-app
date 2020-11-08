import React from 'react';

const Article = ({ author, title, text }) => {
    const styles = {
        marginTop: '40px'
    }
    return (
        <article style={styles}>
            <h3 style={{
                marginBottom: 3,
                textTransform: 'uppercase'
            }}>{title}</h3>
            <span style={{ display: 'block', fontSize: '12px', marginBottom: '3px' }}>{author}</span>
            <p style={{ fontSize: 15 }}>{text}</p>
        </article>);
}

export default Article;