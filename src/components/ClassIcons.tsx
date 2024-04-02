import { images } from "../utils/classIcons"

export default function ClassIcons() {
  return (
    <div className="my-4 bg-black/25 border-2 border-gray-500 rounded-md p-4">
      {images.map((i) => (
        <div>
          <img src={i} />
        </div>
      ))}
    </div>
  )
}