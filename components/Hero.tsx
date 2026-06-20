import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <Image src="/hero.jpg" alt="Hero Image" width={100} height={100} />
      <h1>Welcome to Market Research Report for Christian</h1>
      <p>This is a sample hero section.</p>
    </section>
  );
}