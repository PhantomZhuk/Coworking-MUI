import React from 'react';
import MediaCard from '../components/Card';
import Header from '../components/Header';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <div className='flex flex-wrap gap-4 p-5'>
                <MediaCard />
            </div>
        </div>
    );
};

export default HomePage;