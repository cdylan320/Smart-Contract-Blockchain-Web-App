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
        <img src="./help.jpg" alt="img-blur-shadow" className="h-auto w-auto" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h6" className="mb-2">
          Help people on moutains
        </Typography>
        <h3 className="text-sm text-blue">
          Create a web application for people who needs help for harvesting on
          moutains
        </h3>
      </CardBody>
      <CardFooter
        divider
        className="flex flex-row items-center justify-between py-3"
      >
        <Typography variant="small" color="green">
          1.5 wei
        </Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          <a href="#">View Project</a>
        </Typography>
      </CardFooter>
    </Card>
  );
}
