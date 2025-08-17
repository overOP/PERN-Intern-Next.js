import FooterLarge from "@/components/layout/footer/FooterLarge";
import FooterSmall from "@/components/layout/footer/FooterSmall";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* lg & up */}
      <FooterLarge year={year} />

      {/* <lg */}
      <FooterSmall year={year} />
    </>
  );
};

export default Footer;
