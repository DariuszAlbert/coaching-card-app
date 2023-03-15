import { imagesData } from "../constants/constants";
import ThumbShow from "./ThumbShow";

function ThumbList() {
  return( 
  <div className="thumb-list">
    {imagesData.map((image) => {

      return <ThumbShow key={image.id} picture={image.image} />

      })
}
  </div>
 )
}

export default ThumbList;
