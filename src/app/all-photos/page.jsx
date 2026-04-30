
import PhotooCard from '@/components/PhotooCard';
import React from 'react';

const AllPhotosPage = async () => {
    const res = await fetch('https://pixgen-mauve.vercel.app/data.json');
    const photos = await res.json();
    console.log(photos,"all Photos");
    return (
        <div >
            <h1 className="text-2xl font-bold mb-4 max-w-2xl my-4">All Photos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5" >
                {photos.map((photo) => (
                <PhotooCard key={photo.id} photo={photo}></PhotooCard>
            ))}
            </div>
        </div>
    );
};

export default AllPhotosPage;