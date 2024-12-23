import React from 'react';

const NavigationButtons = ({ currentPage, handlePrevPage, handleNextPage, maxPage }) => (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center gap-4">
        <button
            onClick={handlePrevPage}
            className="bg-brown-600 text-white w-12 h-12 rounded-full flex items-center justify-center disabled:opacity-50"
            disabled={currentPage === 0}
        >
            ←
        </button>
        <button
            onClick={handleNextPage}
            className="bg-brown-600 text-white w-12 h-12 rounded-full flex items-center justify-center disabled:opacity-50"
            disabled={currentPage === maxPage}
        >
            →
        </button>
    </div>
);

export default NavigationButtons;