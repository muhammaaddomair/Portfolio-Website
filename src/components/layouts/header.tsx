"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/lib/site-config";
import styles from "./header.module.css";
const links=[{label:"Home",href:"/"},{label:"Skills",href:"/#solutions"},{label:"Projects",href:"/#projects"}];
export default function Header({ as: Tag = "header" }: { as?: "header" | "footer" }){
 const [open,setOpen]=useState(false);const pathname=usePathname();
 return <Tag className={styles.header}>
  <div className={styles.bar}>
   <nav aria-label={Tag === "footer" ? "Footer navigation" : "Main navigation"} className={styles.nav}>{links.map(item=><Link key={item.label} href={item.href} className={item.label==="Home"&&pathname==="/"?styles.active:undefined}>{item.label}</Link>)}</nav>
   <button className={styles.menuButton} onClick={()=>setOpen(!open)} aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open}>{open?<X size={22}/>:<Menu size={22}/>}</button>
   <Link className={styles.mark} href="/" aria-label="Muhammad Omair home"><span className={styles.animatedTitle} aria-hidden="true">Muhammad Omair</span></Link>
   <div className={styles.socials}>
    <a href={siteConfig.social.x} target="_blank" rel="noreferrer" aria-label="X" className={styles.twitter}><FaXTwitter/></a>
    <a href="https://github.com/muhammaaddomair" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub/></a>
    <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.linkedin}><FaLinkedin/></a>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammaddomair%40gmail.com" aria-label="Email" className={styles.email}><Mail/></a>
   </div>
  </div>
  {open&&<nav aria-label={Tag === "footer" ? "Footer mobile navigation" : "Mobile navigation"} className={styles.mobileNav}>{links.map(item=><Link key={item.label} href={item.href} onClick={()=>setOpen(false)}>{item.label}</Link>)}</nav>}
 </Tag>;
}
