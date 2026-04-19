import {
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Button,
} from "flowbite-react";
import logo from "../assets/logo.png";
function Header() {  
  return (
    <div className="bg-black flex justify-between sticky">
      <div className="flex mx-2 p-3">
        <div className="flex mr-8 mt-2 ">
          <img src={logo} className="w-15" alt="logo" />
          <div className="text-white font-semibold text-lg mt-2 ml-2">
            PassCheck
          </div>
        </div>
        <div>
          <Dropdown
            className="bg-black mr-1 mt-2 text-md hover:bg-black hover:text-gray-400"
            label="Business"
          ></Dropdown>
        </div>
        <div>
          <Dropdown
            className="bg-black mr-1 mt-2 text-md hover:bg-black hover:text-gray-400"
            label="Personal"
          ></Dropdown>
        </div>
        <Button className="mr-1 bg-black active mt-2 text-md hover:bg-black hover:text-gray-400">
          Profile
        </Button>
        <div>
          <Dropdown
            className="bg-black mr-1 mt-2 text-md hover:bg-black hover:text-gray-400"
            label="Partners"
          ></Dropdown>
        </div>
        <div>
          <Dropdown
            className="bg-black mr-1 mt-2 text-md hover:bg-black hover:text-gray-400"
            label="Resources"
          ></Dropdown>
        </div>
      </div>
      <div>
        <Dropdown
          className="bg-black mr-1 mt-5 text-md hover:bg-black hover:text-gray-400"
          label="Login"
        ></Dropdown>
      </div>
    </div>
  );
}

export default Header;
