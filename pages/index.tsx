import { Inter } from "next/font/google";
import { Preloader } from "@/components/preloader";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Hero } from "@/components/hero";
import { Revolution } from "@/components/revolution";
import { Services } from "@/components/services";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Preloader className={`${inter.className}`} />;
  }
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`flex min-h-screen w-full ${inter.className}`}
    >
      <Header />

      <main className="pt-[1.6rem] w-full relative">
        <Hero />
        <Revolution />
        <Services />
      </main>
    </motion.main>
  );
}
