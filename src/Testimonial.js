import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Card3 from "./components/card3";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        marginTop: 50,

        boxShadow: "1px 2px 9px #0077b6",
        borderRadius: "1%",
        margin: "2em",
        padding: "1em",
      }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card1 img="https://www.tutorialrepublic.com/examples/images/clients/5.jpg" />
          <Card2 img="https://www.tutorialrepublic.com/examples/images/clients/6.jpg" />
          <Card3 img="https://www.tutorialrepublic.com/examples/images/clients/4.jpg" />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
