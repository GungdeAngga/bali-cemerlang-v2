import React from 'react'

export default function Slide({ content }) {
  const { title, description, image } = content;
  return (
    <div className="slide" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay"></div>
      <div className="slide-content">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  )
}
