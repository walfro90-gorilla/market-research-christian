import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Market Research Report for Christian</title>
      </Head>
      <Hero />
      <Services />
      <ContactForm />
    </>
  );
}