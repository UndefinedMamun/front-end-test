
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Item } from '../components/Item';
import Nav from '../components/Nav';
import Spinner from '../components/spinner';
import { useAppDispatch, useAppSelector } from '../hooks';
import { wait } from '../services';
import { addItem } from '../store/items';

const AddItem = () => {
  const FormRef = useRef(null);
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  }, [isLoggedIn]);

  const handleFileSelect = (e: any) => {
    const acceptedFiles = e.target.files;
    const image = acceptedFiles === null ? "" : URL.createObjectURL(acceptedFiles[0]);
    (FormRef.current as any).setFieldValue('image', image);
  }

  const handleSubmit = async (values: Item, { setSubmitting }: FormikHelpers<Item>) => {
    setSubmitting(true)
    try {
      await wait();
      dispatch(addItem(values));
      navigate("/dashboard");
    }
    catch (error: any) {
      console.error(error)
    }
    finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="h-screen">
      <Nav />
      <div className="container mx-auto py-20">
        <Formik
          initialValues={{ title: "", description: "", image: "" }}
          onSubmit={handleSubmit}
          innerRef={FormRef}
        >
          {({
            isSubmitting,
            isValid,
            errors,
            values
          }) => (
            <Form className='flex flex-col gap-8'>
              <div>
                <label htmlFor="title" className='font-semibold inline-block mb-2'>Title</label>
                <Field
                  type="text"
                  name="title"
                  id='title'
                  className={`app-input ${errors.title ? 'border-red-600' : ''}`}
                  placeholder="Enter your User Name"
                />
                <ErrorMessage name="title" component="div" className='w-full inline-block text-red-600 pl-2' />
              </div>
              <div>
                <label htmlFor="description" className='font-semibold inline-block mb-2'>Description</label>
                <Field
                  type="textarea"
                  name="description"
                  id='description'
                  className={`app-input ${errors.description ? 'border-red-600' : ''}`}
                  placeholder="Description"
                />
              </div>
              <div>
                <label htmlFor="image" className='font-semibold inline-block mb-2'>Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/png,image/jpeg"
                  multiple={false}
                  id='image'
                  onChange={handleFileSelect}
                  className={`app-input ${errors.image ? 'border-red-600' : ''}`}
                />
                {Boolean(values.image) && <img className='w-[200px] my-5' src={values.image} alt={values.title} />}
              </div>

              <div>
                <button
                  disabled={isSubmitting || !isValid}
                  type="submit"
                  className='button'
                >
                  {isSubmitting ? <><Spinner /> Adding..</> : <span>Add</span>}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default AddItem;