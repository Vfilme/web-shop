import React from 'react';
import './aboutPage.scss';

export const AboutPage: React.FC = () => {
    return (
        <>
            <h1>About this website</h1>
            <div className="container-stacks">
                <div className="stack">
                    <h2>Client-Side Stack:</h2>
                    <ul>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Scss</li>
                        <li>Redux Toolkit</li>
                    </ul>
                    <h3>Build Tool</h3>
                    <ul>
                        <li>Webpack</li>
                    </ul>
                    <h3>Architectural Methodology</h3>
                    <ul>
                        <li>Feature-Sliced Design</li>
                    </ul>
                </div>

                <div className="stack">
                    <h2>Server-Side Stack</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>express</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="deployment">
                    <h3>Deployment</h3>
                    <ul>
                        <li>Client-Side: Deployed on Netlify</li>
                        <li>Server-Side: Deployed on Vercel</li>
                    </ul>
                    <h3>Application Type</h3>
                    <ul>
                        <li>Client-Server Application</li>
                    </ul>
                </div>
            </div>
        </>
    );
};
