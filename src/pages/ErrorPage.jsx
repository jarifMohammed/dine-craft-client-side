import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className='bg-white'>
      <div className='container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12'>
        <div className='w-full lg:w-1/2'>
          <p className='text-sm font-medium text-gray-500'>404 error</p>
          <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
            Page not found
          </h1>
          <p className='mt-4 text-gray-500 dark:text-gray-400'>
            Sorry, the page you are looking for doesn't exist. Here are some
            helpful links:
          </p>

          <div className='flex flex-col items-start mt-6 gap-y-3'>
            <button className='flex items-center justify-center w-full px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 rtl:rotate-180'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                />
              </svg>

              <span>Go back</span>
            </button>

            <Link
              to='/'
              className='w-full px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-500 rounded-lg sm:w-auto hover:bg-gray-600'
            >
              Take me home
            </Link>
          </div>
        </div>

        <div className='relative w-full mt-8 lg:w-1/2 lg:mt-0'>
          <iframe
            src='https://lottie.host/embed/cb91e34b-7681-4952-b9ab-dec91987923f/tWFaO3HbIg.lottie'
            style={{ width: '100%', height: '500px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
