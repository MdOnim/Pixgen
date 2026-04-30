import React from 'react';
import PhotooCard from './PhotooCard';


const TopGenaration = async () => {

    const res = await fetch('https://pixgen-mauve.vercel.app/data.json');
    const photos = await res.json();
    const Tophotos = photos.slice(0, 8);
    console.log(Tophotos,"Tophotos");

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 max-w-2xl my-4">Top Genaration</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {Tophotos.map((photo) => (
              <PhotooCard key={photo.id} photo={photo} ></PhotooCard>
                ))}
            </div>
        </div>
    );
};

export default TopGenaration;