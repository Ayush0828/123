import Image from 'next/image'
import mountains from '../../public/123.jpg'
 
export default function Background() {
  return (
    <Image
      alt="WEB"
      src={mountains}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}