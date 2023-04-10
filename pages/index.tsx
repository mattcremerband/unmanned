import { Button } from '@mantine/core';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`${inter.className} flex w-full justify-center bg-slate-600`}
    >
      <div className="">
        <Button variant="outline" color="yellow" size="md" uppercase>
          Start
        </Button>
      </div>
    </main>
  );
}
