import { Link, useRouteError } from 'react-router-dom';
import { ErrorMessage } from './error.types';
import './error.styles.css'







function ErrorPage() {
const error = useRouteError() as ErrorMessage;
console.log(error)

const status = error?.status || 'Unknown';
  const statusText = error?.statusText || 'Unknown';
  const url = error?.data || 'Unknown';

  return (
    <div className='error-page content'>
      <h1 className='error-page__title'>Oops! We're lost in the news jungle!</h1>
      <p className='error-page__subtitle'>It seems our reporters took a wrong turn while chasing a breaking story.</p>
      <p className='error-page__subtitle'>Status: {status} - {statusText}</p>
      <p className='error-page__text'>They ended up in a place called "{url}". It must be a hidden treasure trove of news!</p>
		<p className='error-page__text'> To go back to main page click here:  </p>
		<Link to="/" className='error-page__button'> Home </Link>
      <img src='../../../src/assets/Bear72_generated.jpg' alt="Cute bears" />
    </div>
  );

 }

export  default ErrorPage