import React from 'react';
import Header from './Header';
import DetailsButton from './DetailsButton';
import DetailsModal from './DetailsModal';

export default class BasePage extends React.Component {
    state = {
        isDetailsModalOpen: false
    };
    handleDetailsButton = () => {
        this.setState(() => ({
            isDetailsModalOpen: true
        }));
        console.log(this.state.isDetailsModalOpen)
    };
    handleCloseDetailsModal = () => {
        this.setState(() => ({
            isDetailsModalOpen: false
        }));
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <DetailsButton 
                        handleDetailsButton={this.handleDetailsButton}
                        modalOpen={this.state.isDetailsModalOpen}
                    />
                    <DetailsButton 
                        handleDetailsButton={this.handleDetailsButton}
                        modalOpen={this.state.isDetailsModalOpen}
                    />
                </div>
                <DetailsModal
                    isDetailsModalOpen={this.state.isDetailsModalOpen}
                    handleDetailsButton={this.handleDetailsButton}
                    handleCloseDetailsModal={this.handleCloseDetailsModal}
                />  
            </div>
        );
    };
}