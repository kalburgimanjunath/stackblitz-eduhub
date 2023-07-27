const Section1 = ({ blubs }) => {
  return (
    <div>
      <div>
        {blubs &&
          blubs.map((item) => {
            return (
              <>
                <div>{item.title}</div>
                <div>{item.subtitle}</div>
              </>
            );
          })}
      </div>
    </div>
  );
};
const Section2 = ({ blubs }) => {
  return (
    <div>
      <div>
        {blubs &&
          blubs.map((item) => {
            return (
              <>
                <div>{item.title}</div>
                <div>{item.subtitle}</div>
              </>
            );
          })}
      </div>
    </div>
  );
};
const Section3 = ({ blubs }) => {
  return (
    <div>
      <div>
        {blubs &&
          blubs.map((item) => {
            return (
              <>
                <div>{item.title}</div>
                <div>{item.author}</div>
              </>
            );
          })}
      </div>
    </div>
  );
};
const Footer = () => {
  const links = [
    'Courses',
    'Business',
    'Technology',
    'Arts',
    'Community',
    'Forums',
    'Events',
    'Collaborations',
    'Support',
    'FAQ',
    'Contact',
    'Resources',
  ];
  return (
    <div>
      {links &&
        links.map((item) => {
          return <div>{item}</div>;
        })}
    </div>
  );
};
export default function Page1() {
  const blubs = [
    { title: 'World class courses', subtitle: 'learn from experts' },
    { title: 'Global community', subtitle: 'Connect and Collaborate' },
    { title: 'Career Growth', subtitle: 'Unlock new Opportunities' },
  ];
  const blubs1 = [
    {
      title: 'Unleash Your Potential with Personalized Learning Paths',
      subtitle:
        'With EduHub, your learning experience is tailored to your interests and goals. Our sophisticated AI technology creates a unique learning path for you, ensuring you get the most out of your educational journey.',
      image: '',
    },
    {
      title: 'Top Instructors Bring Learning to Life in Engaging Lectures',
      subtitle:
        'EduHub boasts a lineup of skilled instructors from top institutions around the globe. Experience captivating lectures that delve deep into subjects, inspiring you to think creatively and experientially.',
      image: '',
    },
  ];
  const blubs2 = [
    {
      title:
        'EduHub transformed my learning experience. I’ve never felt so engaged and motivated!',
      author: 'Johnson',
      image: '',
    },
    {
      title:
        'I love the personalized learning paths. They’ve helped me focus on what really matters.',
      author: 'Tyler Norris',
      image: '',
    },
    {
      title:
        'The collaborative projects are fantastic. I’ve made valuable connections!',
      author: 'Zara Wilson',
      image: '',
    },
  ];

  return (
    <>
      <div>
        <div>
          <span>2023</span>
        </div>
        <h1>EduHub</h1>
        <p>
          Welcome to EduHub, where your thirst for knowledge meets innovation!
          Our learning course platform will leave you craving more, from
          engaging video lectures to collaborative group projects that enhance
          learning.
        </p>
        <button>Start Exploring</button>
      </div>
      <Section1 blubs={blubs} />
      <Section2 blubs={blubs1} />
      <Section3 blubs={blubs2} />
      <div>
        <h1>
          Don’t just stand on the sidelines. Immerse yourself in the thrilling
          world of EduHub and unlock your true potential!
        </h1>

        <div>
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
        <Footer />
        
      </div>
    </>
  );
}
