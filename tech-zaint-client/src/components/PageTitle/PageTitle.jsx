import { Helmet } from "react-helmet-async";
import favIcon from "../../assets/brand/brand.png"

const PageTitle = ({title,desc, kw}) => {
  return (
    <div>
      <Helmet>
        <title>{title} | TechZaint</title>
        <link rel="shortcut icon" href={favIcon} type="image/x-icon" />
        <meta name="description" content={desc} />
        <meta name="keywords" content={kw} />
      </Helmet>
    </div>
  );
};

export default PageTitle;
