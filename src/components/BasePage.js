import React from 'react';
import Header from './Header';
import DetailsButton from './DetailsButton';
import DetailsModal from './DetailsModal';
import Modal from 'react-modal';

Modal.setAppElement('#app')

// let rawdata = fs.readFileSync('./../content/content.json');
// let content = JSON.parse(rawdata);
// console.log(content);

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
                    title: 'Content I',
                    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
                };
            case 'CONTENT_2':
                return {
                    title: 'Content II',
                    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
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
                        buttonName="Button 1"
                    />
                    <DetailsButton
                        handleDetailsButton={() => this.handleDetailsButton('CONTENT_2')}
                        buttonName="Button 2"
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
