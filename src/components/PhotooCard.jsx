import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { PiDownloadSimple } from 'react-icons/pi';

const PhotooCard = ({photo}) => {
    return (
        <div>
            <Card className='border'>
                <div className='relative w-full aspect-square  '>
                <Image
                        src={photo.imageUrl}
                        alt={photo.title}
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className=' object-cover rounded-xl'
                        />

                        <Chip className='absolute top-2 right-2'>{photo.category}</Chip>
                </div>

                <div>
                    
                    <p>{photo.title}</p>
                </div>

               <div className='flex justify-between' >
                 <div className='flex items-center gap-2' >
                    <p><FaHeart /></p>
                    <p>{photo.likes}</p>
                </div>
                <div className='flex items-center gap-2' >
                    <p><PiDownloadSimple /></p>
                    <p>{photo.downloads}</p>
                </div>
               </div>
             <Link href={`/all-photos/${photo.id}`} ><Button variant='outline' className='w-full'>view</Button></Link>
            </Card>
        </div>
    );
};

export default PhotooCard;