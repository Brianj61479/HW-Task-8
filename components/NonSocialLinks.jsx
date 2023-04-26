/** @format */
import Link from "next/link";
const NonSocialLinks = () => {
  return (
    <div>
      <div>
        <button className='button'>LINK 1</button>
      </div>
      <div>
        <button className='button'>LINK 2</button>
      </div>
      <div>
        <button className='button'>LINK 3</button>
      </div>
      <div>
        <button className='button' link to='https://google.com'>
          LINK 4
        </button>
      </div>
    </div>
  );
};
export default NonSocialLinks;
