import React from 'react';

export const AboutPage: React.FC = () => {
    return (
        <>
            <h1>About this website</h1>
            <h2>client tech stack:</h2>
            <ul>
                <li>Webpack</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Scss</li>
                <li>Redux Toolkit</li>
            </ul>
            <h2>server tech stack</h2>
            <ul>
                <li>node.js</li>
                <li>express</li>
            </ul>
            <p>
                More infromation: in this project i try use architectural
                methodology Feature-Sliced Design
            </p>
        </>
    );
};
