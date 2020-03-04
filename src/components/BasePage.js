import React from 'react';
import Header from './Header';
import DetailsButton from './DetailsButton';
import DetailsModal from './DetailsModal';
import Modal from 'react-modal';

Modal.setAppElement('#app')

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
                    title: 'Content 1',
                    content: '<p>Content 1</p>'
                };
            case 'CONTENT_2':
                return {
                    title: 'Content 2',
                    content: '<p>Content 2</p>'
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
                <Header />
                <div className="container">
                    <DetailsButton
                        handleDetailsButton={() => this.handleDetailsButton('CONTENT_1')}
                    />
                    <DetailsButton
                        handleDetailsButton={() => this.handleDetailsButton('CONTENT_2')}
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
