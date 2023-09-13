import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/organisms/header';
import data from '../../data/data.json';

export default function Crew() {
  const [index, setIndex] = useState(0);

  const current = data.crew[index];

  return (
    <>
      <Header/ >
      <Image src={current.images.webp} alt={current.name} />
      <h1>{current.name}</h1>
      <p>{current.description}</p>
    </>
  );
}
