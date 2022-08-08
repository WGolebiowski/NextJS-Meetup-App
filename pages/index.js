import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/Prague_-_Charles_Bridge.jpg",
    address: "Some adress 10, 123142 some city",
    description: "First meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/Prague_-_Charles_Bridge.jpg",
    address: "Some adress 22, 123142 some city",
    description: "Second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_DATA,
    },
    revalidate: 1,
  };
}

export default HomePage;
