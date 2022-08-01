
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListItem from '../components/Item';
import Nav from '../components/Nav';
import { useAppSelector } from '../hooks';

const Dashboard = () => {
  const allItems = useAppSelector((state) => state.items.all);
  const {isLoggedIn} = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!isLoggedIn) navigate("/");
  }, [isLoggedIn])

  return (
    <section className="h-screen">
      <Nav/>
      <div className="container mx-auto">
        <div className="py-24 flex justify-between items-center">
          <h2 className="text-4xl">List of Items</h2>
          <button className="button">Add</button>
        </div>

        <div className='flex flex-col gap-10'>
          {allItems.map((item, index)=>(<ListItem {...item} />))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;