import "./LinkButtons.css";
import resume from "../assets/Michael Li Resume.pdf";

interface LinkButtonsProps {
  buttonText: string;
  url: string;
  classname: string;
}

const LinkButtons = ({ buttonText, url, classname }: LinkButtonsProps) => {
  // classname="button " + {classname};
  return (
    <>
      <a className={"button " + classname} href={url} target="_blank">
        {buttonText}
      </a>
    </>
  );
};

export default LinkButtons;
