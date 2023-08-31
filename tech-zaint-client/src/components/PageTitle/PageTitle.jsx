import { Helmet } from "react-helmet-async";
import favIcon from "../../assets/brand/brand.png"

const PageTitle = ({title}) => {
  return (
    <div>
      <Helmet>
        <title>{title} | TechZaint</title>
        <link rel="shortcut icon" href={favIcon} type="image/x-icon" />
      </Helmet>
    </div>
  );
};

export default PageTitle;
