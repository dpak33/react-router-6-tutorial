import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className='section'>
      <h2>About</h2>
      <Link to='/' className='btn'>
        Back home
      </Link>
    </section>
  );
};

export default About;