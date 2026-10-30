import Header from "@/components/layouts/header";

import Footer from "@/components/layouts/footer";





export default function WebsiteLayout({

  children,

}: {

  children: React.ReactNode;

}) {

  return (

    <>

      <Header />

      {children}



      <Footer />

    </>

  );

}

