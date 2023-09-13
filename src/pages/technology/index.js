import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/organisms/header';
import data from '../../data/data.json';

export default function Technology() {
  const [index, setIndex] = useState(0);

  const current = data.technology[index];

  return (
    <>
      <Header/ >
      <Image src={current.images.webp} alt={current.name} />
      <h1>{current.name}</h1>
      <p>{current.description}</p>
    </>
  );
}
