"use client";

import Link from "../ui/Link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "just", delay: 1.5, ease: "easeInOut" }}
      className="p-4 md:p-8 flex items-center justify-between font-medium"
      id="top"
    >
      <img src="/logo.svg" alt="logo" className="w-28 md:w-32" />
      <nav className="hidden md:flex items-center gap-8">
        <Link href="#about">About Us</Link>
        <Link href="#work">Work</Link>
        <Link href="#services">Services</Link>
        {/* <Link href='/blog'>Blog</Link> */}
        <Link href="#contact">Contact</Link>
      </nav>
      {/* TODO: Make a hamburger menu */}
    </motion.header>
  );
}
