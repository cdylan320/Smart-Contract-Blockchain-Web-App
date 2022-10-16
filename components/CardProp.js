import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "../routes";

export default function CardProp(props) {
  console.log(props);
  const address = props.address;
  console.log(address);
  return (
    <Card className="mt-12 w-96 group">
      <CardHeader color="orange" className="relative">
        <img src={props.image} alt="img-blur-shadow" className="h-50 w-auto" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h6" className="mb-2">
          {props.title}
        </Typography>
        <h3 className="text-sm text-blue">{props.description}</h3>
      </CardBody>
      <CardFooter
        divider
        className="flex flex-row items-center justify-between py-3"
      >
        <Typography variant="small" color="green">
          {props.minimumContribution} wei
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="flex gap-1"
          style={{ animation: "fadein 2s" }}
        >
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          <Link route={`/projects/projectLists/${address}`}>
            <a>View Project</a>
          </Link>
        </Typography>
      </CardFooter>
    </Card>
  );
}
