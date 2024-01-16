import React from 'react'
import Slider from './Slider';

export default function Content() {
  const slides = [
    [
      {
        title: 'Slide 1',
        description: 'This is the first slide for Slider 1.',
        image: './assets/image1.png',
      },
      {
        title: 'Slide 2',
        description: 'This is the second slide for Slider 1.',
        image: './assets/image2.png',
      },
      {
        title: 'Slide 3',
        description: 'This is the third slide for Slider 1.',
        image: './assets/image3.png',
      },
      {
        title: 'Slide 1',
        description: 'This is the first slide for Slider 1.',
        image: './assets/image1.png',
      },
      {
        title: 'Slide 2',
        description: 'This is the second slide for Slider 1.',
        image: './assets/image2.png',
      },
      {
        title: 'Slide 3',
        description: 'This is the third slide for Slider 1.',
        image: './assets/image3.png',
      },
      {
        title: 'Slide 1',
        description: 'This is the first slide for Slider 1.',
        image: './assets/image1.png',
      },
      {
        title: 'Slide 2',
        description: 'This is the second slide for Slider 1.',
        image: './assets/image2.png',
      },
      {
        title: 'Slide 3',
        description: 'This is the third slide for Slider 1.',
        image: './assets/image3.png',
      },
    ],
  ];

  return (
    <div className="App">
      {slides.map((slideContent, index) => (
        <Slider key={index} slides={slideContent} />
      ))}
    </div>
  )
}
