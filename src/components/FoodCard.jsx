import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

const FoodCard = ({ food }) => {
  const {
    name,
    image,
    category,
    quantity,
    price,
    origin,
    description,
    _id,
  } = food || {};

  // Shorten description for preview
  const shortDescription = description
    ? description.substring(0, 100) + '...'
    : '';

  return (
    <Card className="w-full rounded-lg max-w-xs mt-10 shadow-lg border border-gray-400 hover:scale-105">
      <CardHeader shadow={false} floated={false} className="h-48">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-medium text-lg">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="opacity-75"
        >
          {shortDescription}
        </Typography>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-medium mt-2"
        >
          Category: {category}
        </Typography>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          Quantity: {quantity}
        </Typography>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          Origin: {origin}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 text-center">
        <Link to={`/food-details/${_id}`}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900 text-black hover:scale-105"
          >
            Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
