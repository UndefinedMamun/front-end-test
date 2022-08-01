import { wait } from '.';
import image1 from '../assets/user1.jpg';
import image2 from '../assets/user2.png';

const initialItems = [
  {
      title: "Item 1",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat magni ut nam dolorem corrupti dicta deleniti quasi sapiente animi tempore dolor explicabo sit, libero consequatur, debitis perferendis. Beatae, dolore vel.",
      image: image1
  },
  {
      title: "Item 2",
      description: "Repellat magni ut nam dolorem corrupti dicta deleniti quasi sapiente animi tempore dolor explicabo sit, libero consequatur, debitis perferendis. Beatae, dolore vel.",
      image: image2
  }
]

export const getItems = async () => {
  await wait();
  return initialItems;
}