import React from "react";
import "./styles/About.css";

const About = () =>
  <div>
    <div className="hero text-center" style={{backgroundImage: "url(" + 'https://i.imgur.com/qkdpN.jpg' + ")"}}>
      <h1 className="title">Pupster</h1>
      <h2 className="title">They're the Good Boys and Girls</h2>
    </div>
    
    <div className="main-section">
      <div className="row">
        <div className="col-md-1"></div>
          <div className="col-md-10">
            <h1>Welcome to Pupster!</h1>
          </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
          <div className="col-md-10">
            <p>
              Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer
              gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam.
              Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt
              fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent
              euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
              diam, sit amet facilisis lectus blandit at.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nunc aliquet diam tortor, id consequat mauris ullamcorper eu. 
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
              Pellentesque et dui id justo finibus sollicitudin at et metus. 
              Ut feugiat tellus nec metus commodo, sed suscipit nisi gravida. 
              Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin turpis semper, et interdum risus lobortis. 
              Vestibulum suscipit nunc non egestas tristique. Proin hendrerit efficitur malesuada. 
              Mauris lorem urna, sodales accumsan quam non, tristique tempor erat. 
              Nullam non sem facilisis, tempus tortor sit amet, volutpat nisl. 
              Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus. 
              Praesent suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
            </p>
            <p>
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. 
              Sed malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi ac mi hendrerit semper. 
              Nulla tincidunt accumsan lobortis. Mauris convallis sapien non nibh porta accumsan. Nunc volutpat tempus porttitor. 
              Nunc congue dictum egestas. Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. 
              Maecenas vel porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
            <p>
              Etiam ut massa efficitur, gravida sapien non, condimentum sapien. 
              Suspendisse massa tortor, facilisis in neque sit amet, scelerisque elementum tortor. 
              Nullam eget nibh sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. 
              Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim congue at. 
              Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. 
              Nunc vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam nisi eget nisi. 
              Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem. Maecenas vestibulum volutpat orci eu pharetra. 
              Praesent vel blandit ante, nec faucibus libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. 
              Vivamus id dapibus eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla interdum elit pulvinar eu. 
              Quisque vitae quam dapibus, vestibulum mauris quis, laoreet massa.
            </p>
          </div>
        <div className="col-md-1"></div>
      </div>
    </div>
    <div className="footer">
      <span>Pupster - &copy;2017</span>
    </div>
  </div>;

export default About;
