import Slider from "react-slick";
import projectImage1 from '../assets/images/img/p1.png';
import projectImage2 from '../assets/images/img/p2.png'; 
import projectImage3 from '../assets/images/img/p3.png'; 
import projectImage4 from '../assets/images/img/p4.png';
import projectImage5 from '../assets/images/img/p5.png';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ProjectsCarousel() {
  const settings = {
    dots: true,       
    infinite: true,   
    speed: 500,       
    slidesToShow: 3,  
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section id="projects" className="bg-white py-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Projetos Realizados</h2>

        {/* Carrossel de projetos */}
        <Slider {...settings}>
          <div className="p-2">
            <img src={projectImage1} alt="Projeto 1" className="object-cover w-full h-72 rounded-lg" />
          </div>
          <div className="p-2">
            <img src={projectImage2} alt="Projeto 2" className="object-cover w-full h-72 rounded-lg" />
          </div>
          <div className="p-2">
            <img src={projectImage3} alt="Projeto 3" className="object-cover w-full h-72 rounded-lg" />
          </div>
          <div className="p-2">
            <img src={projectImage4} alt="Projeto 4" className="object-cover w-full h-72 rounded-lg" />
          </div>
          <div className="p-2">
            <img src={projectImage5} alt="Projeto 5" className="object-cover w-full h-72 rounded-lg" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default ProjectsCarousel;
