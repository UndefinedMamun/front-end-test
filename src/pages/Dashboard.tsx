
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ListItem from '../components/Item';
import Nav from '../components/Nav';
import Spinner from '../components/spinner';
import { useAppSelector } from '../hooks';
import { getItems } from '../services/items';
import { resetItems } from '../store/items';

const Dashboard = () => {
  const allItems = useAppSelector((state) => state.items.all);
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate])

  useEffect(() => {
    if (!allItems.length) {
      getItems().then(data => {
        dispatch(resetItems(data))
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }, [allItems, dispatch])

  return (
    <section className="h-screen">
      <Nav />
      <div className="container mx-auto">
        <div className="py-24 flex justify-between items-center">
          <h2 className="text-4xl">List of Items</h2>
          <Link to={"/add"} className="button">Add</Link>
        </div>

        <div className='flex flex-col gap-10'>
          {loading ?
            <div className='flex justify-center items-center bg-slate-100 h-[100px]'>
              <Spinner classNames='w-12 h-12' />
            </div> :
            allItems.map((item, index) => (<ListItem key={index} {...item} />))
          }
        </div>
      </div>
    </section>
  );
}

export default Dashboard;