import FreelancerCard from "./FreelancerCard";


const freelancers = [
  {
    name: "Tim Bergling",
    review: 5,
    picture: "/freelancer.jpeg",
    resume: "/dev-resume.pdf",
    description:
      "Hello! My name is Tim and I'm an aspiring software engineer. I'm currently a UC Berkeley student studying computer science with interests in data + cognitive science.",
    services: ["Programming"],
    charge: 1.5,
  },
  {
    name: "Jahseh Onfroy",
    review: 4,
    picture: "/freelancer.jpeg",
    resume: "/dev-resume.pdf",
    description: "Hello! My name is Jahseh and I'm a marketer.",
    services: ["Marketing"],
    charge: 1.5,
  },
  {
    name: "Taylor Swift",
    review: 3,
    picture: "/freelancer.jpeg",
    resume: "/dev-resume.pdf",
    description: "Hello! My name is Taylor and I'm a social media specialist.",
    services: ["Social Media"],
    charge: 1.5,
  },
  {
    name: "Justin Bieber",
    review: 2,
    picture: "/freelancer.jpeg",
    resume: "/dev-resume.pdf",
    description: "Hello! My name is Justin and I'm a electrical engineer.",
    services: ["Electrical Engineering"],
    charge: 1.5,
  },
  {
    name: "Jason Mate",
    review: 1,
    picture: "/freelancer.jpeg",
    resume: "/dev-resume.pdf",
    description: "Hello! My name is Jason and I'm a accountant.",
    services: ["Accounting"],
    charge: 1.5,
  },
];

export default function FreelancerPage() {
  return(
    <div className="grid grid-cols-3 gap-3">
      {freelancers.map((freelancer) => {
        return (
          <FreelancerCard
            freelancer={freelancer}
          />
        );
      })}
    </div>
  );
}