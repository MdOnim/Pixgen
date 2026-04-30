import PhotooCard from "@/components/PhotooCard";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { PiDownloadSimple } from "react-icons/pi";

const page = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const res = await fetch("https://pixgen-mauve.vercel.app/data.json");
  const photos = await res.json();
  const photo = photos.find((photo) => photo.id === parseInt(id));
  console.log(photo);
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4 max-w-2xl my-4">All Photos</h1>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5   ">
        <Card className="border">
          <div className="relative w-full aspect-square  ">
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className=" object-cover rounded-xl"
            />

            <Chip className="absolute top-2 right-2">{photo.category}</Chip>
          </div>

          <div>
            <p>{photo.title}</p>
            <p>{photo.prompt}</p>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <p>
                <FaHeart />
              </p>
              <p>{photo.likes}</p>
            </div>
            <div className="flex items-center gap-2">
              <p>
                <PiDownloadSimple />
              </p>
              <p>{photo.downloads}</p>
            </div>
          </div>
          <Link href={`/all-photos/${photo.id}`}>
            <Button variant="outline" className="w-full">
              view
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default page;
