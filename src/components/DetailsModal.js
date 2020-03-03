import React from 'react';
import Modal from 'react-modal';

const DetailsModal = (props) => (
    <Modal
        isOpen={!!props.isDetailsModalOpen}
        contentLabel="isDetailsModalOpen"
    >
        <h2>Details...</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>{props.content}</p>
        <button onClick={props.handleCloseDetailsModal}>Close</button>
    </Modal>
);

export default DetailsModal;