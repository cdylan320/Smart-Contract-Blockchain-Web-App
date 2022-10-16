// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract ProjectFactory {
    address payable[] public deployedProjects;

    function createProject(uint minimum, string memory name, string memory descrip, string memory image) public {
        address newProject = address(new Project(minimum, msg.sender, name, descrip, image));
        deployedProjects.push(payable(newProject));
    }

    function getDeployedProjects() public view returns (address payable[] memory) {
        return deployedProjects;
    }
}

contract Project {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    string public name;
    string public descrip;
    string public image;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor (uint minimum, address creator, string memory projectName, string memory projectDescrip, string memory projectImage) {
        manager = creator;
        minimumContribution = minimum;
        name = projectName;
        descrip = projectDescrip;
        image = projectImage;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string memory description, uint value, address recipient) public restricted {
        Request storage newRequest = requests.push(); 
        newRequest.description = description;
        newRequest.value= value;
        newRequest.recipient= recipient;
        newRequest.complete= false;
        newRequest.approvalCount= 0;
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        payable(request.recipient).transfer(request.value);
        request.complete = true;
    }
    
    function getSummary() public view returns (
      uint, uint, uint, uint, address, string memory, string memory, string memory
      ) {
        return (
          minimumContribution,
          address(this).balance,
          requests.length,
          approversCount,
          manager,
            name,
            descrip,
            image
        );
    }
    
    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}