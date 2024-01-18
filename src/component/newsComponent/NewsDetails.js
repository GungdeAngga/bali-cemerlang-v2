import React from 'react'
    
export default function NewsDetails() {
    const newsData = [
        {
            id: 1,
            title: '5 Recommended Indonesia Tourist attractions in March 2023',
            image: './assets/news2.png',
            author: 'Admin Bali Cemerlang',
            date: 'March 10, 2023',
        },
        {
            id: 2,
            title: '5 Recommended Indonesia Tourist attractions in April 2023',
            image: './assets/news3.png',
            author: 'Admin Bali Cemerlang',
            date: 'March 10, 2023',
          },
          {
            id: 3,
            title: '5 Recommended Indonesia Tourist attractions in Mei 2023',
            image: './assets/news4.png',
            author: 'Admin Bali Cemerlang',
            date: 'March 10, 2023',
          },
        // Add more news items as needed
      ];

  return (
    <div className='px-8 pb-10'>
        <div className='rounded-lg border-2 border-gray-600 shadow-md'>
            <span className='ml-2 lg:ml-7'>Latest Article</span>
            {newsData.map((newsItem) => (
            <div className='h-44 md:h-64 bg-LightGrayishViolet px-1 rounded-lg'>
                
                {/* <div className='flex flex-col'> */}

                    <div className='flex flex-row'>
                        <div className='basis-1/2 p-1 mt-4 md:flex md:justify-center'>
                            <img src={newsItem.image} alt='' className='w-28 h-28 md:w-48 md:h-48'/>
                        </div>
                        <div className='basis-1/2 p-1 mt-4'>
                            <div className='flex flex-col text-xs md:text-sm lg:text-base'>
                                <span className='font-bold'>{newsItem.title}</span>
                                <div className='flex mt-2'>
                                    
                                    <div>
                                        <div>
                                            {newsItem.author}
                                        </div>
                                        <span>
                                            {newsItem.date}
                                        </span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                {/* </div> */}
                
            </div>
            ))}
        </div>  
    </div>
  )
}
