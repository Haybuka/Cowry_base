
import FaqTab from "./faqtab.component";


const FaqIndex = ({ posts }) => {
  return (
    <div className="py-16 lg:block">
      <FaqTab posts={posts}/>
     </div>
  );
};

export default FaqIndex;
