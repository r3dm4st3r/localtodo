import {media} from "../../helpers/media";

const NothingHere = () => {
  return(
      <div className="text-center">
          <div className="w-full max-w-[150px] mx-auto">
              <img className="w-full h-full object-contain" src={media.NothingHere} alt="Nothing Here"/>
          </div>
          <h3 className="mt-5">No data yet!</h3>
      </div>
  )
}
export default NothingHere;