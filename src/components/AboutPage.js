import React from 'react';
import Modal from 'react-modal';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import RenderCodeBlock from '../helpers/syntax-highlighter';

const snippet = 'handleDetailsButton = (modalContentType) => {\nthis.setState(() => ({\nmodalContentType,\n isDetailsModalOpen: true\n})); \nconsole.log(this.state.isDetailsModalOpen)}';

Modal.setAppElement('#app')

export default class BasePage extends React.Component {

    render() {
        
        return (
            <div>
                <div className="container">
                    <h1>About</h1>
                    <p>
                        This project is designed to act as a living diary and documentation for recording and referencing the learning of vanilla js, node js and React.
                    </p>
                    Highlighted Code Snippet: {RenderCodeBlock(snippet)}
                </div>
            </div>
        );
    };
}
