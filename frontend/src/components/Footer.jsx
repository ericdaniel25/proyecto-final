import { Footer } from "flowbite-react";

const PageFooter = () => {
  return (
    <Footer className="bg-azul6 " container>
      <img src="../../public/img/logo2.png" className="mr-3 h-6 sm:h-9" alt="" />
      <Footer.Copyright href="#" by="L&E copyright" year={2025} />
    </Footer>
  );
};

export default PageFooter;
