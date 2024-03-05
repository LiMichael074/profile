import "./App.css";
import "./components/Profile";
import "./components/LinkButtons";
import "./components/Contact";
import Profile from "./components/Profile";
import LinkButtons from "./components/LinkButtons";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Profile
        pic_url="src/assets/profile_pic.jpg"
        bio="I'm a detail oriented 3D Artist / Full-Stack Developer / Game
          Developer based in Ontario, Canada. I'm experienced with different 3D
          skills, like Hard Surface Modeling, UV Unwrapping, Procedural Texture
          Generation, animation and lighting. I'm also proficient in different
          programing languages, ranging from Python, Java, Javascripets and C.
          On top of that I also experianced in using different frameworks and
          softwares, for example React, CSS, Blender, Unreal Engine 5, Unity and
          Adobe Sutie. Besides tech and arts, I'm also a car enthusiast and hope
          one day I can race on track. None the less, I'll look forward to get
          to know you and have a chance to work with you."
      />
      <div className="grid-container_link">
        <LinkButtons
          buttonText="LinkedIn"
          url="http://linkedin.com/in/michaellishauching"
          classname="item1"
        />
        <LinkButtons
          buttonText="GitHub"
          url="https://github.com/LiMichael074"
          classname="item2"
        />
        <LinkButtons
          buttonText="Resume"
          url="src/assets/Michael Li Resume.pdf"
          classname="item3"
        />
      </div>

      <Contact />
    </>
  );
}

export default App;
