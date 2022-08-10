import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    console.log(enteredMeetupData);
    const { title, address, description, image } = enteredMeetupData;
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify({
        title,
        address,
        description,
        image,
      }),
    });

    const data = await response.json();

    router.push("/");

    console.log(data);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
