import { FaGoogle, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div>
            <div className=' p-4 space-y-4 mb-6'>
                <h2 className="text-3xl ">Login with</h2>
                <button className="btn btn-outline capitalize  w-full  ">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline capitalize w-full ">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>
            <div className=' p-4  mb-6'>
                <h2 className="text-3xl mb-4">Find us on</h2>
                <a href="" className="p-4 flex gap-4 items-center border rounded-t-lg  capitalize  w-full  ">
                    <FaFacebook className='text-lg text-blue-300'></FaFacebook>
                    Facebook
                </a>
                <a href="" className="p-4 flex gap-4 items-center border-x capitalize w-full text-start ">
                    <FaTwitter className='text-blue-500 text-lg '></FaTwitter>
                    Twitter
                </a>
                <a href="" className="p-4 flex gap-4 items-center border rounded-b-lg   capitalize w-full ">
                    <FaInstagram className='text-red-500 text-lg'></FaInstagram>
                    Instagram
                </a>
            </div>

            {/* qZone */}

            <div className=' p-4  mb-6 space-y-4'>
                <h2 className="text-3xl  ">Q-Zone</h2>
                <a href="" className="p-4  items-center  capitalize  w-full  ">
                    <img src={qZone1} alt="" />
                    
                </a>
                <a href="" className="p-4  items-center  capitalize  w-full  ">
                    <img src={qZone2} alt="" />
                    
                </a>
                <a href="" className="p-4  items-center  capitalize  w-full  ">
                    <img src={qZone3} alt="" />
                    
                </a>

            </div>
        </div>
    );
};

export default RightSideNav;