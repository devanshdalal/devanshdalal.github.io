import React from 'react';
import './AboutMe.css';

import {DISPLAYNAME, GITUSER, LINKEDIN, STACKOVERFLOW, HACKERRANK, KAGGLE, RESEARCHGATE, PERSONAS} from 'config.json'

const AboutMe = () => {

    const styles = [
        ["green-white", "icons-social-gw"],
        ["grey-white", "icons-social-gw1"],
        ["indigo-white", "icons-social-iw"],
        ["red-white", "icons-social-rw"],
        ["white-blue", "icons-social-wb"],
        ["white-grey", "icons-social-wg"],
        ["white-indigo", "icons-social-wi"],
        ["white-red", "icons-social-wr"],
        // ["yellow-black", "icons-social-yb"],
    ]
    const chooseStyle = () => {
        const today = new Date()
        const choice = (today.getDate() * 24 + today.getHours()) % styles.length
        return choice
    }
    
    const choice = chooseStyle()
    const github = `https://github.com/${GITUSER}`

    return (
        <main className={styles[choice][0]}>
            <div className="intro">Hello, I'm {DISPLAYNAME}!</div>
            <div className="tagline"> {PERSONAS.join(' | ')} </div>
            <div className={'icons-social ' + styles[choice][1]}>
            <a rel="noopener noreferrer" target="_blank" href={github}><i className="fab fa-github" /></a>
            <a rel="noopener noreferrer" target="_blank" href={LINKEDIN}><i className="fab fa-linkedin" /></a>
            <a rel="noopener noreferrer" target="_blank" href={STACKOVERFLOW}><i className="fab fa-stack-overflow" /></a>
            <a rel="noopener noreferrer" target="_blank" href={HACKERRANK}><i className="fab fa-hackerrank" /></a>
            <a rel="noopener noreferrer" target="_blank" href={KAGGLE}><i className="fab fa-kaggle" /></a>
            <a rel="noopener noreferrer" target="_blank" href={RESEARCHGATE}><i className="fab fa-researchgate" /></a>
            </div>
        </main>
    );
};

export default AboutMe;
