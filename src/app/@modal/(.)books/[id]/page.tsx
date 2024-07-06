"use client"
import { useState } from "react"
import BookDisplay from "~/components/BookDislpay"

import CloseModal from "~/components/CloseModal"
import { Button } from "~/components/ui/button"

interface Chapter {
  id: number;
  title: string;
  content: string;
}

interface Book {
  author: string;
  title: string;
  year: string;
  image: string;
  chapters: Chapter[];
}

const Page: React.FC = () => {
  return (
    <div className='fixed inset-0 bg-zinc-900/20 z-10'>
      <div className='container flex items-center h-full max-w-lg mx-auto'>
        <div className='relative bg-white w-full h-fit py-12 px-2 rounded-lg'>
          <div className='absolute top-4 right-4'>
            <CloseModal />
          </div>
          <div className="flex mb-4">
            <div className="w-1/3 mr-4">
              <div className="bg-gray-300 h-44 rounded-lg flex items-center justify-center text-gray-600">
                Book Image
              </div>
            </div>
            <div className="w-2/3 ml-4">
              <div className="text-lg font-bold ">
                <span>Madilog</span>
                <span className="font-normal text-base text-gray-700"> by Tan Malaka</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Published in 2023</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium ornare nisl, luctus laoreet quam dapibus nec. Vivamus neque neque. (info about chapter 1)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <Button variant="outline">Chapter 1</Button>
            <Button variant="outline">Chapter 1</Button>
            <Button variant="outline">Chapter 1</Button>
            <Button variant="outline">Chapter 1</Button>
            <Button variant="outline">Chapter 1</Button>
            <Button variant="outline">Chapter 1</Button>
            <Button variant="outline">Chapter 1</Button>
            <Button variant="outline">Chapter 1</Button>
            <Button variant="outline">Chapter 1</Button>
            <Button variant="outline">Chapter 1</Button>
            <Button variant="outline">Chapter 1</Button>
            <Button variant="outline">Chapter 1</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

