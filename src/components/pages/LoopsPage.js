import React from 'react';
import Modal from 'react-modal';
import RenderCodeBlock from '../../helpers/syntax-highlighter';
import content from './../../content/content.json'

// Content
const mydata = content;
const contentBlockThree = mydata.contentBlocks[2].properties
const snippet = contentBlockThree.body

Modal.setAppElement('#app')

export default class BasePage extends React.Component {

    render() {
        
        return (
            <div>
                <div className="container">
                    <h1>Loops</h1>
                    <p>
                        This project is designed to act as a living diary and documentation for recording and referencing the learning of vanilla js, node js and React.
                    </p>
                    <h2>Code Blocks</h2>
                    <p>
                        The use of code blocks and snippets throughout this course are employed through the react-syntax-highlighter package. Example below:
                    </p>
                    {RenderCodeBlock(snippet)}
                </div>
            </div>
        );
    };
}
