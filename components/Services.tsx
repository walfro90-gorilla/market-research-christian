import Image from 'next/image';

export default function Services() {
  return (
    <section>
      <h2>Our Services</h2>
      <ul>
        <li>
          <Image src="/service1.jpg" alt="Service 1" width={50} height={50} />
          <p>Service 1</p>
        </li>
        <li>
          <Image src="/service2.jpg" alt="Service 2" width={50} height={50} />
          <p>Service 2</p>
        </li>
        <li>
          <Image src="/service3.jpg" alt="Service 3" width={50} height={50} />
          <p>Service 3</p>
        </li>
      </ul>
    </section>
  );
}