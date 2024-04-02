import Party from "./Party"


export default function RaidGrid() {
  return (
    <div className="my-4 grid grid-cols-2 gap-4">
      <Party componentId={1} />
      <Party componentId={2} />
      <Party componentId={3} />
      <Party componentId={4} />
    </div>
  )
}