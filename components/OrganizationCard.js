import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function OrganizationCard() {
  return (
    <Card className="mt-12 w-64 group mx-6">
      <CardHeader color="orange" className="relative">
        <img
          src="./hands.jpg"
          alt="img-blur-shadow"
          className="h-auto w-auto"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h6" className="mb-2">
          Cozy 5 Stars Apartment
        </Typography>
        <h3 className="text-sm text-blue">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          ello ello ello
        </h3>
      </CardBody>
      <CardFooter
        divider
        className="flex flex-row items-center justify-between py-3"
      >
        <Typography variant="small" color="green">
          $1050 Goal
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="flex gap-1"
        >
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Learn More
        </Typography>
      </CardFooter>
    </Card>
  );
}
