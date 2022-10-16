import web3 from "./web3";
import Project from "./build/Project.json";

const project = (address) => {
  return new web3.eth.Contract(Project.abi, address);
};
export default project;
