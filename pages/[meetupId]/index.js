import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/2/23/Prague_-_Charles_Bridge.jpg"
      title="A first meetup"
      address="Some adress 10, 123142 some city"
      description="First meetup"
    />
  );
};

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: { meetupId },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/23/Prague_-_Charles_Bridge.jpg",
        title: "A first meetup",
        address: "Some adress 10, 123142 some city",
        description: "First meetup",
      },
    },
  };
}

export default MeetupDetails;
