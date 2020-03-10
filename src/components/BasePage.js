import React from 'react';
import DetailsButton from './DetailsButton';
import DetailsModal from './DetailsModal';
import Modal from 'react-modal';
import content from './../content/content.json'

Modal.setAppElement('#app')

// Content
const mydata = content;
const contentBlockOne = mydata.contentBlocks[0].properties
const contentBlockTwo = mydata.contentBlocks[1].properties

export default class BasePage extends React.Component {
    state = {
        modalContentType: null,
        isDetailsModalOpen: false
    };

    handleDetailsButton = (modalContentType) => {
        this.setState(() => ({
            modalContentType,
            isDetailsModalOpen: true
        }));
        console.log(this.state.isDetailsModalOpen)
    };

    handleCloseDetailsModal = () => {
        this.setState(() => ({
            isDetailsModalOpen: false
        }));
    };

    getModalContent() {
        switch (this.state.modalContentType) {
            case 'CONTENT_1':
                return {
                    title: contentBlockOne.title,
                    content: contentBlockOne.body
                };
            case 'CONTENT_2':
                return {
                    title: contentBlockTwo.title,
                    content: contentBlockTwo.body
                };
            default:
                return {
                    title: '',
                    content: null
                };
        }
    }

    render() {
        const modalContent = this.getModalContent();
        
        return (
            <div>
                <div className="container">
                    <p>
                        Introduction to my documentation project, currently using react modal.
                    </p>
                    <DetailsButton
                        handleDetailsButton={() => this.handleDetailsButton('CONTENT_1')}
                        buttonName={contentBlockOne.title}
                    />
                    <DetailsButton
                        handleDetailsButton={() => this.handleDetailsButton('CONTENT_2')}
                        buttonName={contentBlockTwo.title}
                    />
                </div>
                <DetailsModal
                    isDetailsModalOpen={this.state.isDetailsModalOpen}
                    handleDetailsButton={this.handleDetailsButton}
                    handleCloseDetailsModal={this.handleCloseDetailsModal}
                    title={modalContent.title}
                >
                    <section dangerouslySetInnerHTML={{ __html: modalContent.content }} />
                </DetailsModal>
            </div>
        );
    };
}
